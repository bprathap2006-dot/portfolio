import React, { useEffect, useRef } from 'react';

interface StudioCanvasProps {
  isDarkMode?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

interface WaveLine {
  yRatio: number;
  amplitude: number;
  speed: number;
  frequency: number;
  alpha: number;
}

export const StudioCanvas: React.FC<StudioCanvasProps> = ({ isDarkMode = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 3;
    let targetMouseX = width / 2;
    let targetMouseY = height / 3;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initElements();
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Drifting particles: very few, delicate
    let particles: Particle[] = [];
    const particleCount = 18;

    // Subtle curved contour lines
    const waveLines: WaveLine[] = [
      { yRatio: 0.2, amplitude: 30, speed: 0.0004, frequency: 0.0015, alpha: 0.06 },
      { yRatio: 0.45, amplitude: 40, speed: 0.0003, frequency: 0.0012, alpha: 0.05 },
      { yRatio: 0.75, amplitude: 25, speed: 0.0005, frequency: 0.0018, alpha: 0.05 },
    ];

    const initElements = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: -Math.random() * 0.25 - 0.05,
          radius: Math.random() * 1.2 + 0.6,
          alpha: Math.random() * 0.25 + 0.1,
        });
      }
    };

    initElements();

    let step = 0;
    let isVisible = true;

    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const render = () => {
      if (!isVisible || prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;
      step += 1;

      // 1. Soft moving ambient light
      const orb1X = width * 0.35 + Math.sin(step * 0.0008) * (width * 0.1) + (mouseX - width * 0.5) * 0.04;
      const orb1Y = height * 0.25 + Math.cos(step * 0.0006) * (height * 0.08) + (mouseY - height * 0.5) * 0.04;

      const orb2X = width * 0.7 + Math.cos(step * 0.0009) * (width * 0.1);
      const orb2Y = height * 0.65 + Math.sin(step * 0.0007) * (height * 0.1);

      // Light gradient wash (Cobalt tone)
      const grad1 = ctx.createRadialGradient(orb1X, orb1Y, 10, orb1X, orb1Y, Math.min(width, height) * 0.55);
      if (isDarkMode) {
        grad1.addColorStop(0, 'rgba(56, 189, 248, 0.05)');
        grad1.addColorStop(1, 'rgba(15, 18, 25, 0)');
      } else {
        grad1.addColorStop(0, 'rgba(29, 78, 216, 0.035)');
        grad1.addColorStop(0.6, 'rgba(219, 234, 254, 0.015)');
        grad1.addColorStop(1, 'rgba(251, 249, 245, 0)');
      }
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Warm tone wash
      const grad2 = ctx.createRadialGradient(orb2X, orb2Y, 20, orb2X, orb2Y, Math.min(width, height) * 0.5);
      if (isDarkMode) {
        grad2.addColorStop(0, 'rgba(129, 140, 248, 0.04)');
        grad2.addColorStop(1, 'rgba(15, 18, 25, 0)');
      } else {
        grad2.addColorStop(0, 'rgba(217, 119, 6, 0.025)');
        grad2.addColorStop(0.6, 'rgba(245, 241, 234, 0.015)');
        grad2.addColorStop(1, 'rgba(251, 249, 245, 0)');
      }
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Fine curved bezier lines
      ctx.lineWidth = 1;
      waveLines.forEach((wave, idx) => {
        ctx.beginPath();
        const baseLineY = height * wave.yRatio;
        const color = isDarkMode 
          ? `rgba(161, 161, 170, ${wave.alpha * 0.9})` 
          : `rgba(113, 113, 122, ${wave.alpha})`;

        ctx.strokeStyle = color;

        for (let x = 0; x <= width; x += 20) {
          const y = baseLineY + Math.sin(x * wave.frequency + step * wave.speed + idx) * wave.amplitude + Math.cos(x * 0.0008 + step * 0.0002) * 12;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      // 3. Subtle floating specks
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        const particleColor = isDarkMode 
          ? `rgba(212, 212, 216, ${p.alpha * 0.6})` 
          : `rgba(82, 82, 91, ${p.alpha * 0.5})`;
        ctx.fillStyle = particleColor;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
