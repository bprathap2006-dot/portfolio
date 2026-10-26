import React, { useEffect, useRef } from 'react';

export const StudioBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // A few very subtle, slow-moving warm light orbs & fine lines
    const particles: { x: number; y: number; vx: number; vy: number; radius: number; alpha: number }[] = [];
    const particleCount = 18;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.18 + 0.05,
      });
    }

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      time += 0.003;

      // Draw subtle, organic curved line drifting slowly
      if (!prefersReducedMotion) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(37, 99, 235, 0.04)';
        ctx.lineWidth = 1.5;
        const waveY = height * 0.25 + Math.sin(time) * 30;
        ctx.moveTo(0, waveY);
        ctx.bezierCurveTo(
          width * 0.33,
          waveY - 40 * Math.cos(time * 0.8),
          width * 0.66,
          waveY + 40 * Math.sin(time * 0.7),
          width,
          waveY - 15
        );
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = 'rgba(15, 23, 42, 0.025)';
        ctx.lineWidth = 1;
        const waveY2 = height * 0.65 + Math.cos(time * 0.6) * 25;
        ctx.moveTo(0, waveY2);
        ctx.bezierCurveTo(
          width * 0.4,
          waveY2 + 35 * Math.sin(time * 0.5),
          width * 0.75,
          waveY2 - 35 * Math.cos(time * 0.6),
          width,
          waveY2 + 10
        );
        ctx.stroke();
      }

      // Draw occasional subtle floating dust motes
      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${p.alpha})`;
        ctx.fill();
      });

      if (!prefersReducedMotion) {
        animId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Soft moving studio ambient gradients */}
      <div 
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[750px] max-h-[750px] rounded-full bg-gradient-to-br from-blue-100/40 via-amber-100/30 to-transparent blur-[120px] animate-subtle-drift" 
      />
      <div 
        className="absolute top-[35%] -right-[15%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-bl from-indigo-100/30 via-slate-100/40 to-transparent blur-[140px] animate-subtle-drift" 
        style={{ animationDelay: '-6s' }}
      />
      <div 
        className="absolute -bottom-[15%] left-[20%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-tr from-amber-50/50 via-blue-50/30 to-transparent blur-[130px] animate-subtle-drift" 
        style={{ animationDelay: '-12s' }}
      />

      {/* Lightweight canvas for organic curve lines and subtle motes */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
