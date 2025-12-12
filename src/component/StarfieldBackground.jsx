import React, { useRef, useEffect } from "react";

/**
 * Full-screen star + comet background canvas.
 * Drop <StarfieldBackground /> at the root of your app.
 *
 * Props:
 *  - baseStars: approximate stars for desktop (default 1000)
 *  - speed: overall motion multiplier (default 0.8)
 *  - disabled: bool (if true, won't animate) - useful for tests
 */
export default function StarfieldBackground({
  baseStars = 1000,
  speed = 0.8,
  disabled = false,
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const hiddenRef = useRef(false);

  useEffect(() => {
    if (disabled) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let dpr = Math.max(window.devicePixelRatio || 1, 1);

    // adaptive star count
    function computeStarCount() {
      const area = width * height;
      const norm = (area / (1920 * 600)); // reference area
      // on small screens reduce density
      const smallScreenFactor = width < 700 ? 0.45 : 1;
      return Math.max(160, Math.round(baseStars * norm * smallScreenFactor));
    }

    let stars = [];
    let comet = {
      x: -200,
      y: 0,
      vx: 1.6 * speed,
      vy: 0.12 * speed,
      tail: [],
      tailLen: 200,
      size: 3,
      alive: true,
    };

    function resize() {
      dpr = Math.max(window.devicePixelRatio || 1, 1);
      width = canvas.clientWidth || window.innerWidth;
      height = canvas.clientHeight || window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = computeStarCount();
      stars = new Array(count).fill(0).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.2 + 0.2,
        tw: Math.random() * 0.06 + 0.01,
        ph: Math.random() * Math.PI * 2,
        dx: (Math.random() - 0.5) * 0.02 * speed,
        dy: (Math.random() - 0.5) * 0.02 * speed,
      }));

      comet.x = -Math.random() * width * 0.3 - 80;
      comet.y = height * (0.35 + Math.random() * 0.3);
      comet.tail = [];
      comet.alive = true;
    }

    function drawStars() {
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.ph += s.tw;
        const a = 0.45 + Math.sin(s.ph) * 0.45;
        ctx.beginPath();
        ctx.fillStyle = `rgba(230,230,230,${a})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

        s.x += s.dx;
        s.y += s.dy;
        if (s.x < -6) s.x = width + 6;
        if (s.x > width + 6) s.x = -6;
        if (s.y < -6) s.y = height + 6;
        if (s.y > height + 6) s.y = -6;
      }
    }

    function updateComet() {
      if (!comet.alive) return;
      comet.tail.unshift({ x: comet.x, y: comet.y });
      if (comet.tail.length > comet.tailLen) comet.tail.pop();

      comet.x += comet.vx * (1 + Math.random() * 0.18) * speed;
      comet.y += comet.vy * (0.9 + Math.random() * 0.2) * speed;
      comet.y += Math.sin(comet.x * 0.004) * 0.24 * speed;

      if (comet.x > width + 160) {
        comet.alive = false;
        setTimeout(() => {
          comet.x = -Math.random() * width * 0.25 - 120;
          comet.y = height * (0.3 + Math.random() * 0.4);
          comet.tail = [];
          comet.vx = (1.4 + Math.random() * 1.6) * speed;
          comet.vy = (Math.random() - 0.45) * 0.25 * speed;
          comet.alive = true;
        }, 900 + Math.random() * 1700);
      }
    }

    function drawComet() {
      if (comet.tail.length <= 1) return;

      // soft glow trail
      for (let i = 0; i < comet.tail.length; i += 2) {
        const t = comet.tail[i];
        const k = i / comet.tail.length;
        const size = (1 - k) * 6;
        const alpha = (1 - k) * 0.08;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,240,200,${alpha})`;
        ctx.arc(t.x, t.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // colored speckles along tail
      for (let i = 0; i < comet.tail.length; i += 4) {
        const t = comet.tail[i];
        const k = i / comet.tail.length;
        const alpha = (1 - k) * 0.9;
        const r = Math.floor(220 * (1 - k) + 30 * k);
        const g = Math.floor(200 * (1 - k) + 70 * k);
        const b = Math.floor(120 * (1 - k) + 200 * k);
        ctx.beginPath();
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.arc(t.x, t.y, (1 - k) * 2 + 0.4, 0, Math.PI * 2);
        ctx.fill();
      }

      // head glow
      const grd = ctx.createRadialGradient(
        comet.x,
        comet.y,
        0,
        comet.x,
        comet.y,
        36
      );
      grd.addColorStop(0, "rgba(255,250,220,0.95)");
      grd.addColorStop(0.25, "rgba(220,200,150,0.55)");
      grd.addColorStop(0.6, "rgba(90,120,200,0.06)");
      grd.addColorStop(1, "rgba(20,30,60,0)");
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(comet.x, comet.y, 36, 0, Math.PI * 2);
      ctx.fill();

      // core
      ctx.beginPath();
      ctx.fillStyle = "rgba(255,255,255,0.98)";
      ctx.arc(comet.x, comet.y, 2.6, 0, Math.PI * 2);
      ctx.fill();
    }

    function render() {
      if (hiddenRef.current) {
        rafRef.current = requestAnimationFrame(render);
        return;
      }
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);
      drawStars();
      updateComet();
      drawComet();
      rafRef.current = requestAnimationFrame(render);
    }

    // pause when tab hidden to save CPU
    function handleVisibility() {
      hiddenRef.current = document.hidden;
    }
    document.addEventListener("visibilitychange", handleVisibility);

    // initial setup + listeners
    resize();
    rafRef.current = requestAnimationFrame(render);
    window.addEventListener("resize", resize);

    // cleanup
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [baseStars, speed, disabled]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      aria-hidden="true"
      style={{ display: "block" }}
    />
  );
}
