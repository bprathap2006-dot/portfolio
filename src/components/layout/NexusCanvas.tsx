import React, { useEffect, useRef } from 'react';

interface NexusCanvasProps {
  isDarkMode?: boolean;
}

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
}

export const NexusCanvas: React.FC<NexusCanvasProps> = ({ isDarkMode = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smooth damping
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let currentMouseX = width / 2;
    let currentMouseY = height / 2;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Node points constellation
    let nodes: NodePoint[] = [];
    const nodeCount = Math.min(Math.floor((width * height) / 32000), 55);

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.8 + 0.8,
          baseAlpha: Math.random() * 0.4 + 0.2,
        });
      }
    };

    initNodes();

    let angle = 0;
    let isTabVisible = true;

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = () => {
      if (!isTabVisible || prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Mouse damping
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      const primaryColor = isDarkMode ? '0, 240, 255' : '2, 132, 199';
      const secondaryColor = isDarkMode ? '139, 92, 246' : '124, 58, 237';

      // 1. Draw subtle computational orbital curves
      angle += 0.0008;
      const centerX = width * 0.5 + (currentMouseX - width * 0.5) * 0.03;
      const centerY = height * 0.45 + (currentMouseY - height * 0.5) * 0.03;
      const radiusX = Math.min(width, height) * 0.38;
      const radiusY = radiusX * 0.55;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);

      // Orbit 1
      ctx.beginPath();
      ctx.ellipse(0, 0, radiusX, radiusY, Math.PI / 6, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${primaryColor}, ${isDarkMode ? 0.06 : 0.08})`;
      ctx.lineWidth = 1;
      ctx.setLineDash([8, 12]);
      ctx.stroke();

      // Orbit 2
      ctx.beginPath();
      ctx.ellipse(0, 0, radiusX * 1.35, radiusY * 0.9, -Math.PI / 4, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${secondaryColor}, ${isDarkMode ? 0.05 : 0.06})`;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 16]);
      ctx.stroke();

      ctx.restore();

      // 2. Draw moving constellation nodes and data links
      ctx.setLineDash([]);
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Bounce from boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${primaryColor}, ${node.baseAlpha * (isDarkMode ? 0.6 : 0.4)})`;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distSq = dx * dx + dy * dy;
          const maxDist = 130;

          if (distSq < maxDist * maxDist) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / maxDist) * (isDarkMode ? 0.12 : 0.08);

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(${primaryColor}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse cursor if close
        const mdx = node.x - currentMouseX;
        const mdy = node.y - currentMouseY;
        const mDistSq = mdx * mdx + mdy * mdy;
        const mouseReach = 140;
        if (mDistSq < mouseReach * mouseReach) {
          const mDist = Math.sqrt(mDistSq);
          const mAlpha = (1 - mDist / mouseReach) * (isDarkMode ? 0.25 : 0.15);
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(currentMouseX, currentMouseY);
          ctx.strokeStyle = `rgba(${secondaryColor}, ${mAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-75"
      aria-hidden="true"
    />
  );
};
