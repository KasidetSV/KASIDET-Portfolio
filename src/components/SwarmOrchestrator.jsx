import React, { useEffect, useRef, useState } from 'react';

export default function SwarmOrchestrator() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [telemetry, setTelemetry] = useState({
    activeAgents: 4,
    latency: '14ms',
    throughput: '38.4 MB/s',
    tickRate: '60 Hz'
  });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    // Track container resizing
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });
    resizeObserver.observe(container);

    // Agent definition matching orange/sunset theme
    const agents = [
      { id: 1, name: 'MAESTRO', angle: 0, orbitRadius: 80, speed: 0.008, size: 5, color: '#e8a55a', status: 'ORCHESTRATING', pulse: 0 },
      { id: 2, name: 'SOLOMON', angle: 2.1, orbitRadius: 110, speed: -0.005, size: 4.5, color: '#cc785c', status: 'STRATEGIZING', pulse: 1.2 },
      { id: 3, name: 'EXECUTOR', angle: 4.3, orbitRadius: 65, speed: 0.012, size: 4, color: '#9a528e', status: 'EXECUTING', pulse: 2.5 },
      { id: 4, name: 'AUDITOR', angle: 1.2, orbitRadius: 130, speed: -0.003, size: 4, color: '#e8a55a', status: 'COMPLIANT', pulse: 3.7 }
    ];

    // Data packets
    let packets = [];
    // Shockwaves
    let shockwaves = [];

    // Track mouse hover to add interactive repulsion/attraction
    let mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw faint, premium grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 30;
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

      // Draw concentric orbital paths
      ctx.strokeStyle = 'rgba(232, 165, 90, 0.03)';
      ctx.lineWidth = 1.5;
      [65, 80, 110, 130].forEach(r => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Update and Draw Core Node (COGNOS core)
      const corePulse = Math.sin(tick * 0.04) * 4 + 20;
      
      // Core Glow
      const coreGlow = ctx.createRadialGradient(centerX, centerY, 2, centerX, centerY, corePulse * 2);
      coreGlow.addColorStop(0, 'rgba(232, 165, 90, 0.25)');
      coreGlow.addColorStop(0.5, 'rgba(232, 165, 90, 0.05)');
      coreGlow.addColorStop(1, 'rgba(232, 165, 90, 0)');
      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, corePulse * 2, 0, Math.PI * 2);
      ctx.fill();

      // Core Solid Center
      ctx.fillStyle = '#e8a55a';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
      ctx.fill();
      
      // Core Ring
      ctx.strokeStyle = 'rgba(232, 165, 90, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 14 + Math.sin(tick * 0.08) * 2, 0, Math.PI * 2);
      ctx.stroke();

      // Dynamic text inside or near core
      ctx.font = '7px Share Tech Mono, monospace';
      ctx.fillStyle = 'rgba(232, 165, 90, 0.7)';
      ctx.fillText('COGNOS CORE', centerX - 24, centerY - 18);

      // Process and Draw Agents
      const calculatedAgentPositions = agents.map(agent => {
        // Orbit motion
        agent.angle += agent.speed;
        
        // Add subtle floating noise
        const floatX = Math.sin(tick * 0.03 + agent.pulse) * 4;
        const floatY = Math.cos(tick * 0.02 + agent.pulse) * 4;
        
        let targetX = centerX + Math.cos(agent.angle) * agent.orbitRadius + floatX;
        let targetY = centerY + Math.sin(agent.angle) * agent.orbitRadius + floatY;

        // Mouse interaction: push away slightly if mouse is close
        if (mouse.active) {
          const dx = targetX - mouse.x;
          const dy = targetY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 60) {
            const force = (60 - dist) / 60 * 12; // push intensity
            targetX += (dx / dist) * force;
            targetY += (dy / dist) * force;
          }
        }

        return { ...agent, x: targetX, y: targetY };
      });

      // Draw Connections & Lines
      calculatedAgentPositions.forEach(agent => {
        // Line from core to agent
        const linkGrad = ctx.createLinearGradient(centerX, centerY, agent.x, agent.y);
        linkGrad.addColorStop(0, 'rgba(232, 165, 90, 0.15)');
        linkGrad.addColorStop(1, `${agent.color}33`); // add hex transparency
        
        ctx.strokeStyle = linkGrad;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(agent.x, agent.y);
        ctx.stroke();

        // Draw sub-links between closely spaced agents to look like a neural network
        calculatedAgentPositions.forEach(other => {
          if (agent.id === other.id) return;
          const dx = agent.x - other.x;
          const dy = agent.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.strokeStyle = `rgba(204, 120, 92, ${0.1 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(agent.x, agent.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      // Spawn Data Packets randomly
      if (tick % 45 === 0 && calculatedAgentPositions.length > 0) {
        const targetAgent = calculatedAgentPositions[Math.floor(Math.random() * calculatedAgentPositions.length)];
        const fromCore = Math.random() > 0.4;
        
        packets.push({
          id: Math.random(),
          agentId: targetAgent.id,
          progress: 0,
          speed: 0.015 + Math.random() * 0.01,
          fromCore: fromCore,
          color: targetAgent.color
        });
      }

      // Update and Draw Data Packets
      packets = packets.filter(packet => {
        const agent = calculatedAgentPositions.find(a => a.id === packet.agentId);
        if (!agent) return false;

        packet.progress += packet.speed;

        if (packet.progress >= 1) {
          // Trigger shockwave at destination
          shockwaves.push({
            x: packet.fromCore ? agent.x : centerX,
            y: packet.fromCore ? agent.y : centerY,
            radius: 1,
            maxRadius: packet.fromCore ? 15 : 20,
            color: packet.color,
            alpha: 0.8
          });
          return false;
        }

        // Compute packet coordinates
        let px, py;
        if (packet.fromCore) {
          px = centerX + (agent.x - centerX) * packet.progress;
          py = centerY + (agent.y - centerY) * packet.progress;
        } else {
          px = agent.x + (centerX - agent.x) * packet.progress;
          py = centerY + (centerY - agent.y) * packet.progress; // Correct mathematical typo
        }

        // Draw packet glow
        const packetGlow = ctx.createRadialGradient(px, py, 1, px, py, 6);
        packetGlow.addColorStop(0, packet.color);
        packetGlow.addColorStop(0.5, `${packet.color}66`);
        packetGlow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = packetGlow;
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fill();

        // Draw packet center dot
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      // Update and Draw Shockwaves
      shockwaves = shockwaves.filter(wave => {
        wave.radius += 0.5;
        wave.alpha = 1 - (wave.radius / wave.maxRadius);

        if (wave.radius >= wave.maxRadius) return false;

        ctx.strokeStyle = `${wave.color}${Math.floor(wave.alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.stroke();

        return true;
      });

      // Draw Agent Nodes
      calculatedAgentPositions.forEach(agent => {
        // Ambient glow ring
        const pulseSize = agent.size + Math.sin(tick * 0.05 + agent.pulse) * 1.5;
        ctx.fillStyle = `${agent.color}1a`;
        ctx.beginPath();
        ctx.arc(agent.x, agent.y, pulseSize * 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `${agent.color}55`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(agent.x, agent.y, pulseSize * 2, 0, Math.PI * 2);
        ctx.stroke();

        // Solid Node core
        ctx.fillStyle = agent.color;
        ctx.beginPath();
        ctx.arc(agent.x, agent.y, agent.size, 0, Math.PI * 2);
        ctx.fill();

        // High-tech inner white core
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(agent.x, agent.y, agent.size * 0.4, 0, Math.PI * 2);
        ctx.fill();

        // Draw Scientific Telemetry Text next to Agent
        ctx.font = '8px Share Tech Mono, monospace';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(agent.name, agent.x + 10, agent.y - 2);

        ctx.font = '6.5px Share Tech Mono, monospace';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fillText(agent.status, agent.x + 10, agent.y + 6);
        
        // Small active blinking indicator dot next to status
        const isBlinking = Math.floor(tick / 25) % 2 === 0;
        ctx.fillStyle = isBlinking ? '#e8a55a' : 'rgba(232, 165, 90, 0.2)';
        ctx.beginPath();
        ctx.arc(agent.x + 8, agent.y + 4.5, 1.2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Interactive mouse crosshair when active
      if (mouse.active) {
        ctx.strokeStyle = 'rgba(232, 165, 90, 0.15)';
        ctx.lineWidth = 0.5;
        
        ctx.beginPath();
        ctx.moveTo(mouse.x - 10, mouse.y);
        ctx.lineTo(mouse.x + 10, mouse.y);
        ctx.moveTo(mouse.x, mouse.y - 10);
        ctx.lineTo(mouse.x, mouse.y + 10);
        ctx.stroke();
      }

      // Display floating tech metrics inside canvas borders
      ctx.font = '7px Share Tech Mono, monospace';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.fillText(`SYS.GRID: ${width}x${height}px`, 15, height - 12);
      ctx.fillText(`SWARM_ENGINE_V3`, width - 90, height - 12);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Dynamically update telemetry labels slowly
    const telemetryInterval = setInterval(() => {
      setTelemetry({
        activeAgents: 4,
        latency: `${Math.floor(10 + Math.random() * 5)}ms`,
        throughput: `${(36.2 + Math.random() * 4).toFixed(1)} MB/s`,
        tickRate: '60 Hz'
      });
    }, 3000);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      clearInterval(telemetryInterval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[270px] rounded-lg overflow-hidden glass-card border border-white/5 flex items-center justify-center cursor-crosshair select-none"
    >
      {/* Decorative layout border indicators */}
      <div className="absolute top-3 left-4 font-mono text-[9px] text-primary opacity-80 uppercase tracking-widest flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
        COGNOS.SWARM.ORCHESTRATION.MATRIX
      </div>

      <div className="absolute top-3 right-4 font-mono text-[9px] text-gray-500 uppercase tracking-widest">
        METRICS: [LNC: {telemetry.latency} | FLO: {telemetry.throughput}]
      </div>

      {/* Floating telemetry metrics block on left side */}
      <div className="absolute bottom-10 left-4 font-mono text-[8px] text-gray-500 leading-normal border-l border-white/10 pl-2">
        <span className="text-amber">SWARM: 4 ACTIVE</span><br/>
        <span>SYNC_RATE: 60Hz</span><br/>
        <span>STATUS: STEADY</span>
      </div>

      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
