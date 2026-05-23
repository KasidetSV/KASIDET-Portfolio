import { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates tracking
    let mouse = { x: width / 2, y: height / 2 };
    let targetMouse = { x: width / 2, y: height / 2 };

    const handleMouseMove = (e) => {
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Ambient floating values
    let tick = 0;

    const render = () => {
      tick += 0.005;

      // Easing: Smooth lag interpolation for the organic motion
      mouse.x += (targetMouse.x - mouse.x) * 0.04;
      mouse.y += (targetMouse.y - mouse.y) * 0.04;

      // Clear the background to dark slate
      ctx.fillStyle = '#060608';
      ctx.fillRect(0, 0, width, height);

      // Draw subtle grid lines (Open Design spec)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.012)';
      ctx.lineWidth = 1;
      const gridSize = 48;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 1. Mouse Warp Gradient (Coral-Amber Dusk Glow)
      const mouseGradSize = Math.max(width, height) * 0.45;
      const mouseGradient = ctx.createRadialGradient(
        mouse.x, mouse.y, 10,
        mouse.x, mouse.y, mouseGradSize
      );
      mouseGradient.addColorStop(0, 'rgba(204, 120, 92, 0.07)'); // Coral base glow
      mouseGradient.addColorStop(0.3, 'rgba(232, 165, 90, 0.02)'); // Sunset Amber fade
      mouseGradient.addColorStop(1, 'rgba(6, 6, 8, 0)');

      ctx.fillStyle = mouseGradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Slow Ambient Floating Gradient (Cosmic Purple/Magenta Tone in Background)
      const driftX = width * 0.75 + Math.sin(tick) * 120;
      const driftY = height * 0.25 + Math.cos(tick * 0.8) * 120;
      const ambientGradSize = Math.max(width, height) * 0.55;
      const ambientGradient = ctx.createRadialGradient(
        driftX, driftY, 50,
        driftX, driftY, ambientGradSize
      );
      ambientGradient.addColorStop(0, 'rgba(154, 82, 142, 0.03)'); // Cosmic Purple
      ambientGradient.addColorStop(0.5, 'rgba(154, 82, 142, 0.01)');
      ambientGradient.addColorStop(1, 'rgba(6, 6, 8, 0)');

      ctx.fillStyle = ambientGradient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 -z-10 w-full h-full pointer-events-none"
    />
  );
}
