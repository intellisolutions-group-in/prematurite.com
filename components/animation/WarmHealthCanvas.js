'use client';

import React, { useEffect, useRef } from 'react';

export default function WarmHealthCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // If reduced motion is preferred, just draw a static warm background and stop
      const drawStaticBackground = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        grad.addColorStop(0, '#FFFDF8');
        grad.addColorStop(0.5, '#FFF6F1');
        grad.addColorStop(1, '#FFEBE6');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      };
      drawStaticBackground();
      window.addEventListener('resize', drawStaticBackground);
      return () => window.removeEventListener('resize', drawStaticBackground);
    }

    let animationFrameId;
    let particles = [];
    const colors = ['#FF9A86', '#FFB399', '#FFD6A6', '#FFF0BE'];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 80 + 40; // Soft larger particles
        this.speedX = (Math.random() - 0.5) * 0.15;
        this.speedY = (Math.random() - 0.5) * 0.15;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.08 + 0.02; // Very subtle low opacity
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off walls gently
        if (this.x < -100 || this.x > canvas.width + 100) this.speedX = -this.speedX;
        if (this.y < -100 || this.y > canvas.height + 100) this.speedY = -this.speedY;
      }

      draw() {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const initParticles = () => {
      particles = [];
      const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 40000), 25);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    // Draw a moving wave line in the background
    let waveOffset = 0;
    const drawWave = () => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height * 0.7);
      
      for (let x = 0; x < canvas.width; x += 10) {
        const y = canvas.height * 0.75 + Math.sin(x * 0.0025 + waveOffset) * 40 + Math.cos(x * 0.001 + waveOffset) * 20;
        ctx.lineTo(x, y);
      }
      
      ctx.strokeStyle = 'rgba(255, 154, 134, 0.04)';
      ctx.lineWidth = 4;
      ctx.stroke();
      
      waveOffset += 0.002;
    };

    const animate = () => {
      // Soft clean overlay to prevent stark clearing
      ctx.fillStyle = '#FFFDF8';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle base gradient
      const baseGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      baseGrad.addColorStop(0, 'rgba(255, 253, 248, 1)');
      baseGrad.addColorStop(0.5, 'rgba(255, 246, 241, 0.7)');
      baseGrad.addColorStop(1, 'rgba(255, 214, 166, 0.15)');
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render and update particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Render waves
      drawWave();

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      id="warm-health-canvas"
    />
  );
}
