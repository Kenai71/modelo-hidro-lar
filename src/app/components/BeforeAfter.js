"use client";
import { useState, useRef, useCallback } from "react";

export default function BeforeAfter({ beforeSrc, afterSrc }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const getPosition = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    return pct;
  }, []);

  const handleStart = useCallback((e) => {
    isDragging.current = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setPosition(getPosition(clientX));
  }, [getPosition]);

  const handleMove = useCallback((e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setPosition(getPosition(clientX));
  }, [getPosition]);

  const handleEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="before-after-wrapper"
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      {/* After image (background) */}
      <img src={afterSrc} alt="Depois" className="ba-image after" draggable={false} />

      {/* Before image (clipped) */}
      <div className="ba-clip" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <img src={beforeSrc} alt="Antes" className="ba-image before" draggable={false} />
      </div>

      {/* Labels */}
      <span className="ba-label before-label" style={{ opacity: position > 15 ? 1 : 0 }}>
        Antes
      </span>
      <span className="ba-label after-label" style={{ opacity: position < 85 ? 1 : 0 }}>
        Depois
      </span>

      {/* Slider line */}
      <div className="ba-slider-line" style={{ left: `${position}%` }} />

      {/* Slider handle */}
      <div className="ba-slider-handle" style={{ left: `${position}%` }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </div>
  );
}
