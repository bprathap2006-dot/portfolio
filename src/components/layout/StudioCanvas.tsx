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
  maxAlpha: number;
}

interface WaveLine {
  yOffset: number;
  amplitude: number;
  speed: number;
  wavelength: number;
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

    // Mouse coordinates with damping
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

    // Elegant drifting particles
    let particles: Particle[] = [];
    const particleCount = 22;

    // Fine undulating curved lines
    const waveLines: WaveLine[] = [
      { yOffset: 0.22, amplitude: 35, speed: 0.0006, wavelength: 0.0018, alpha: 0.09 },
      { yOffset: 0.48, amplitude: 45, speed: 0.0004, wavelength: 0.0014, alpha: 0.07 },
      { yOffset: 0.75, amplitude: 30, speed: 0.0005, wavelength: 0.002, alpha: 0.08 },
    ];

    const initElements = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: -Math.random() * 0.35 - 0.1, // gently float upward
          radius: Math.random() * 1.2 + 0.6,
          alpha: Math.random() * 0.3 + 0.1,
          maxAlpha: Math.random() * 0.35 + 0.15,
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

      // Smooth mouse damping
      mouseX += (targetMouseX - mouseX) * 0.035;
      mouseY += (targetMouseY - mouseY) * 0.035;
      step += 1;

      // 1. Soft moving ambient light gradients
      const primaryOrbX = width * 0.3 + Math.sin(step * 0.001) * (width * 0.15) + (mouseX - width * 0.5) * 0.05;
      const primaryOrbY = height * 0.25 + Math.cos(step * 0.0008) * (height * 0.1) + (mouseY - height * 0.5) * 0.05;

      const secondaryOrbX = width * 0.75 + Math.cos(step * 0.0012) * (width * 0.12);
      const secondaryOrbY = height * 0.6 + Math.sin(step * 0.0009) * (height * 0.12);

      // Ambient Orb 1 (Cobalt soft tint)
      const grad1 = ctx.createRadialGradient(primaryOrbX, primaryOrbY, 20, primaryOrbX, primaryOrbY, Math.min(width, height) * 0.5);
      if (isDarkMode) {
        grad1.addColorStop(0, 'rgba(56, 189, 248, 0.08)');
        grad1.addColorStop(1, 'rgba(11, 15, 25, 0)');
      } else {
        grad1.addColorStop(0, 'rgba(37, 99, 235, 0.06)');
        grad1.addColorStop(0.6, 'rgba(219, 234, 254, 0.03)');
        grad1.addColorStop(1, 'rgba(250, 249, 246, 0)');
      }
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Ambient Orb 2 (Warm alabaster / subtle amber glow)
      const grad2 = ctx.createRadialGradient(secondaryOrbX, secondaryOrbY, 30, secondaryOrbX, secondaryOrbY, Math.min(width, height) * 0.45);
      if (isDarkMode) {
        grad2.addColorStop(0, 'rgba(139, 92, 246, 0.06)');
        grad2.addColorStop(1, 'rgba(11, 15, 25, 0)');
      } else {
        grad2.addColorStop(0, 'rgba(245, 158, 11, 0.03)');
        grad2.addColorStop(0.5, 'rgba(251, 191, 36, 0.015)');
        grad2.addColorStop(1, 'rgba(250, 249, 246, 0)');
      }
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Fine curved bezier lines
      ctx.lineWidth = 1;
      waveLines.forEach((wave, idx) => {
        ctx.beginPath();
        const baseLineY = height * wave.yOffset;
        const color = isDarkMode 
          ? `rgba(148, 163, 184, ${wave.alpha * 0.8})` 
          : `rgba(100, 116, 139, ${wave.alpha})`;

        ctx.strokeStyle = color;

        for (let x = 0; x <= width; x += 15) {
          const y = baseLineY + Math.sin(x * wave.wavelength + step * wave.speed + idx) * wave.amplitude + Math.cos(x * 0.001 + step * 0.0003) * 15;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      // 3. Occasional subtle floating particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around smoothly
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        const particleColor = isDarkMode 
          ? `rgba(226, 232, 240, ${p.alpha * 0.7})` 
          : `rgba(71, 85, 105, ${p.alpha * 0.6})`;
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
