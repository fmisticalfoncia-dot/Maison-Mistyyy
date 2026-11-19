"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Globe } from "lucide-react";
import { editorialImages } from "@/lib/images";

const IMAGE_URLS = Array.from(
  { length: 12 },
  (_, i) => editorialImages[i % editorialImages.length].src
);

const TOTAL = IMAGE_URLS.length;
const Z_FAR = -2400;
const Z_NEAR = 780;
const RANGE = Z_NEAR - Z_FAR;
const DURATION = 16;
const FADE_IN = 0.06;
const FADE_OUT = 0.04;

const css = `
.endless-root,
.endless-root *,
.endless-root *::before,
.endless-root *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.endless-root {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #000000;
  color: #ffffff;
  font-family: inherit;
  user-select: none;
  pointer-events: none;
}

.endless-root .endless-scene {
  position: absolute;
  inset: 0;
  -webkit-perspective: 1100px;
  perspective: 1100px;
  -webkit-perspective-origin: 50% 50%;
  perspective-origin: 50% 50%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.endless-root .endless-world {
  position: absolute;
  inset: 0;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.endless-root .endless-plane {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #000000;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  will-change: transform;
}

.endless-root .endless-plane img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.endless-root .endless-title {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 50;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-family: "Cormorant Garamond", "Times New Roman", serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.28em;
  line-height: 1;
  white-space: nowrap;
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .endless-root .endless-title {
    font-size: 1.375rem;
  }
}

@media (min-width: 1200px) {
  .endless-root .endless-title {
    font-size: 1.875rem;
  }
}

.endless-root .endless-footer {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transform: translateX(-50%);
  color: #707070;
}

@media (min-width: 768px) {
  .endless-root .endless-footer {
    bottom: 2rem;
  }
}

.endless-root .endless-globe {
  display: block;
  flex-shrink: 0;
}

.endless-root .endless-caption {
  color: #707070;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 1.3;
  text-align: center;
  white-space: nowrap;
}

/* iOS WebKit flattens nested 3D when an ancestor uses overflow: hidden. */
@supports (-webkit-touch-callout: none) {
  .endless-root {
    overflow: visible;
    -webkit-clip-path: inset(0);
    clip-path: inset(0);
  }
}
`;

function opacityForProgress(progress: number) {
  if (progress < FADE_IN) return Math.max(0, progress / FADE_IN);
  if (progress > 1 - FADE_OUT) return Math.max(0, (1 - progress) / FADE_OUT);
  return 1;
}

function getLayout() {
  const width = window.innerWidth;
  const planeW = width < 768 ? Math.min(width * 0.26, 200) : Math.min(width * 0.26, 440);
  return {
    planeW,
    planeH: planeW * (4 / 3),
    offsetX: width * 0.33,
    angle: 24,
  };
}

export default function Endless() {
  const worldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const world = worldRef.current;
    if (!world) return;

    const planes = Array.from(world.querySelectorAll<HTMLElement>(".endless-plane"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tweens: gsap.core.Tween[] = [];

    gsap.ticker.lagSmoothing(0);
    gsap.set(world, { force3D: true });

    const applyLayout = () => {
      const { planeW, planeH, offsetX, angle } = getLayout();
      planes.forEach((plane, index) => {
        const isLeft = index % 2 === 0;
        plane.style.width = `${planeW}px`;
        plane.style.height = `${planeH}px`;
        gsap.set(plane, {
          xPercent: -50,
          yPercent: -50,
          x: isLeft ? -offsetX : offsetX,
          y: 0,
          rotationY: isLeft ? angle : -angle,
          force3D: true,
        });
      });
    };

    applyLayout();

    planes.forEach((plane, index) => {
      const img = plane.querySelector("img") as HTMLImageElement;
      const startProgress = index / TOTAL;

      gsap.set(plane, { z: Z_FAR + startProgress * RANGE });
      img.style.opacity = String(opacityForProgress(startProgress));
      plane.style.zIndex = String(Math.round(startProgress * 1000));

      if (reduceMotion) return;

      const tween = gsap.fromTo(
        plane,
        { z: Z_FAR },
        {
          z: Z_NEAR,
          duration: DURATION,
          ease: "none",
          repeat: -1,
          immediateRender: false,
          onUpdate() {
            const progress = this.progress();
            img.style.opacity = String(opacityForProgress(progress));
            plane.style.zIndex = String(Math.round(progress * 1000));
          },
        }
      );

      tween.progress(startProgress);
      tweens.push(tween);
    });

    window.addEventListener("resize", applyLayout);

    return () => {
      window.removeEventListener("resize", applyLayout);
      tweens.forEach((tween) => tween.kill());
      gsap.killTweensOf(planes);
    };
  }, []);

  return (
    <section className="endless-root" aria-label="Endless 3D image corridor">
      <style>{css}</style>
      <div className="endless-scene">
        <div className="endless-world" ref={worldRef}>
          {IMAGE_URLS.map((url, index) => (
            <div className="endless-plane" key={`${url}-${index}`}>
              <img src={url} alt="" loading="eager" decoding="async" />
            </div>
          ))}
        </div>
      </div>
      <h1 className="endless-title">Champagne Muse</h1>
      <div className="endless-footer">
        <Globe className="endless-globe" width={24} height={24} aria-hidden="true" />
        <p className="endless-caption">Maison Mistyy · Luxury Editorial</p>
      </div>
    </section>
  );
}

export { Endless as Component };
