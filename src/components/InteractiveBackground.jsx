import React, { useEffect, useRef } from 'react';

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
      ctx.fillStyle = '#0B0F19';
      ctx.fillRect(0, 0, width, height);

      // Draw subtle grid lines (Open Design spec)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 40;
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

      // 1. Mouse Warp Gradient (Teal Accent)
      const mouseGradSize = Math.max(width, height) * 0.45;
      const mouseGradient = ctx.createRadialGradient(
        mouse.x, mouse.y, 10,
        mouse.x, mouse.y, mouseGradSize
      );
      mouseGradient.addColorStop(0, 'rgba(0, 255, 163, 0.09)');
      mouseGradient.addColorStop(0.3, 'rgba(0, 255, 163, 0.03)');
      mouseGradient.addColorStop(1, 'rgba(11, 15, 25, 0)');

      ctx.fillStyle = mouseGradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Slow Ambient Floating Gradient (Purple/Blue Tone in Background)
      const driftX = width * 0.7 + Math.sin(tick) * 100;
      const driftY = height * 0.3 + Math.cos(tick * 0.8) * 100;
      const ambientGradSize = Math.max(width, height) * 0.5;
      const ambientGradient = ctx.createRadialGradient(
        driftX, driftY, 50,
        driftX, driftY, ambientGradSize
      );
      ambientGradient.addColorStop(0, 'rgba(170, 59, 255, 0.03)');
      ambientGradient.addColorStop(0.5, 'rgba(170, 59, 255, 0.01)');
      ambientGradient.addColorStop(1, 'rgba(11, 15, 25, 0)');

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
