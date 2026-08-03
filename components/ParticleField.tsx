"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type ParticleFieldProps = {
  className?: string;
};

type Particle = {
  baseX: number;
  baseY: number;
  phase: number;
  depth: number;
  tone: number;
  size: number;
};

type TypewriterProgress = {
  active: boolean;
  completed: boolean;
  progress: number;
  x: number;
  y: number;
};

function seededRandom(seed: number) {
  let value = seed >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let result = value;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

export default function ParticleField({ className }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const themeStyles = window.getComputedStyle(document.documentElement);
    const themeValue = (name: string, fallback: string) =>
      themeStyles.getPropertyValue(name).trim() || fallback;
    const backgroundColour = themeValue("--brand-bg", "#263b35");
    const particlePalette = [
      themeValue("--brand-particle-1", "#f7f8f3"),
      themeValue("--brand-particle-2", "#dce8d9"),
      themeValue("--brand-particle-3", "#a8c5ad"),
      themeValue("--brand-particle-4", "#ddec67"),
      themeValue("--brand-particle-5", "#72b492"),
    ];
    const particleBlend = themeValue(
      "--brand-particle-blend",
      "lighter",
    ) as GlobalCompositeOperation;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const pointer = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };
    const typing = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
      pulse: 0,
      progress: 0,
      completed: false,
    };

    let particles: Particle[] = [];
    let frame = 0;
    let width = 0;
    let height = 0;

    const createParticles = () => {
      const random = seededRandom(42);
      const spacing = width < 720 ? 11 : 9;
      const nextParticles: Particle[] = [];

      for (let y = -spacing; y <= height + spacing; y += spacing) {
        for (let x = -spacing; x <= width + spacing; x += spacing) {
          nextParticles.push({
            baseX: x + (random() - 0.5) * spacing * 0.82,
            baseY: y + (random() - 0.5) * spacing * 0.82,
            phase: random() * Math.PI * 2,
            depth: 0.2 + random() * 0.8,
            tone: random(),
            size: 0.45 + random() * 1.15,
          });
        }
      }

      particles = nextParticles;
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      const scale = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * scale);
      canvas.height = Math.round(height * scale);
      context.setTransform(scale, 0, 0, scale, 0, 0);
      createParticles();
    };

    const draw = (timestamp: number) => {
      context.globalCompositeOperation = "source-over";
      context.globalAlpha = reducedMotion.matches ? 1 : 0.3;
      context.fillStyle = backgroundColour;
      context.fillRect(0, 0, width, height);

      const pointerVelocityX = pointer.targetX - pointer.x;
      const pointerVelocityY = pointer.targetY - pointer.y;
      pointer.x += (pointer.targetX - pointer.x) * 0.11;
      pointer.y += (pointer.targetY - pointer.y) * 0.11;
      typing.x += (typing.targetX - typing.x) * 0.2;
      typing.y += (typing.targetY - typing.y) * 0.2;
      typing.pulse *= 0.965;

      const time = reducedMotion.matches ? 0 : timestamp * 0.001;
      const interactionRadius = Math.min(280, Math.max(175, width * 0.22));
      const typeRadius = Math.min(360, Math.max(240, width * 0.32));
      const pointerSpeed = Math.min(1, Math.hypot(pointerVelocityX, pointerVelocityY) / 90);

      context.globalCompositeOperation = particleBlend;

      for (const particle of particles) {
        const normalizedX = (particle.baseX / width - 0.5) * 2;
        const normalizedY = (particle.baseY / height - 0.5) * 2;

        const broadWave =
          Math.sin(normalizedX * 3.2 + time * 0.82 + Math.sin(normalizedY * 3.7)) *
          0.52;
        const crossWave =
          Math.cos(normalizedY * 5.4 - time * 0.66 + Math.cos(normalizedX * 2.8)) *
          0.31;
        const smallWave =
          Math.sin(
            (normalizedX + normalizedY) * 11.5 - time * 1.32 + particle.phase,
          ) * 0.17;
        const elevation = broadWave + crossWave + smallWave;

        let x =
          particle.baseX +
          Math.cos(normalizedY * 4.2 - time * 0.74 + particle.phase) *
            (7 + particle.depth * 13) +
          elevation * 9;
        let y =
          particle.baseY +
          elevation * (35 + particle.depth * 48) +
          Math.sin(normalizedX * 5.5 + time * 0.9) * (4 + particle.depth * 8);

        let typingGlow = 0;
        if (typing.active || typing.pulse > 0.015) {
          const typeDx = x - typing.x;
          const typeDy = y - typing.y;
          const typeDistance = Math.sqrt(typeDx * typeDx + typeDy * typeDy * 1.55) || 1;

          if (typeDistance < typeRadius) {
            const strength = typing.active ? 1 : Math.min(1, typing.pulse);
            const influence = Math.pow(1 - typeDistance / typeRadius, 2);
            const wake =
              Math.sin(typeDistance * 0.075 - time * 7.2 - typing.progress * 8) *
              influence;
            const push =
              (influence * (24 + typing.pulse * 34) + wake * 17) * strength;
            const curl = influence * (16 + typing.pulse * 24) * strength;
            x += (typeDx / typeDistance) * push - (typeDy / typeDistance) * curl;
            y += (typeDy / typeDistance) * push + (typeDx / typeDistance) * curl;
            typingGlow = influence * (0.32 + typing.pulse * 0.68) * strength;
          }
        }

        if (pointer.active && finePointer.matches && !reducedMotion.matches) {
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 1;

          if (distance < interactionRadius) {
            const influence = Math.pow(1 - distance / interactionRadius, 2.25);
            const ripple =
              Math.sin(distance * 0.06 - time * 5.2 + particle.phase * 0.18) *
              influence *
              18;
            const radial = influence * (58 + pointerSpeed * 38) + ripple;
            const orbit = influence * (34 + pointerSpeed * 46);
            x += (dx / distance) * radial - (dy / distance) * orbit;
            y += (dy / distance) * radial + (dx / distance) * orbit;
          }
        }

        const flowingTexture =
          0.5 +
          0.5 *
            Math.sin(
              normalizedX * 5.7 +
                normalizedY * 3.1 +
                elevation * 5.5 -
                time * 0.74 +
                particle.phase * 0.22,
            );
        const fineTexture =
          0.5 +
          0.5 *
            Math.cos(
              normalizedY * 24 +
                Math.sin(normalizedX * 7.5 - time * 0.9) * 3.4 +
                particle.phase * 0.16,
            );
        const texture = Math.pow(flowingTexture, 1.45) * 0.7 + fineTexture * 0.3;
        const edgeFade = Math.min(
          1,
          Math.max(0, Math.min(particle.baseX, width - particle.baseX) / 44),
          Math.max(0, Math.min(particle.baseY, height - particle.baseY) / 44),
        );

        const movingTone = Math.max(
          0,
          Math.min(
            1,
            flowingTexture * 0.55 +
              fineTexture * 0.25 +
              (elevation + 0.9) * 0.12 +
              particle.tone * 0.08,
          ),
        );
        const colorIndex =
          typingGlow > 0.34
            ? 3
            : movingTone > 0.84
            ? 3
            : movingTone > 0.68
              ? 4
              : movingTone > 0.48
                ? 2
                : movingTone > 0.28
                  ? 1
                  : 0;
        context.globalAlpha =
          (0.055 +
            texture * (0.2 + particle.depth * 0.42) +
            typingGlow * 0.5 +
            (colorIndex >= 3 ? 0.1 : 0)) *
          edgeFade;
        context.fillStyle = particlePalette[colorIndex];
        const size =
          particle.size *
          (0.72 + texture * 0.55) *
          (colorIndex >= 3 ? 1.12 : 1) *
          (1 + typingGlow * 0.65);
        context.fillRect(x, y, size, size);
      }

      context.globalAlpha = 1;
      if (!reducedMotion.matches) {
        frame = window.requestAnimationFrame(draw);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.targetX = event.clientX - bounds.left;
      pointer.targetY = event.clientY - bounds.top;
      pointer.active =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const handleTypewriterProgress = (event: Event) => {
      const detail = (event as CustomEvent<TypewriterProgress>).detail;
      const bounds = canvas.getBoundingClientRect();
      typing.targetX = detail.x - bounds.left;
      typing.targetY = detail.y - bounds.top;
      if (typing.x < -500) {
        typing.x = typing.targetX;
        typing.y = typing.targetY;
      }
      typing.active = detail.active;
      typing.progress = detail.progress;
      if (detail.active) typing.pulse = 1;
      if (detail.completed && !typing.completed) {
        typing.completed = true;
        typing.pulse = 1;
      }
    };

    const handleMotionPreference = () => {
      window.cancelAnimationFrame(frame);
      draw(0);
    };

    resize();
    draw(0);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("reed:typewriter-progress", handleTypewriterProgress);
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);
    reducedMotion.addEventListener("change", handleMotionPreference);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("reed:typewriter-progress", handleTypewriterProgress);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      reducedMotion.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "pointer-events-none",
        className ?? "absolute inset-0 h-full w-full",
      )}
      aria-hidden="true"
    />
  );
}
