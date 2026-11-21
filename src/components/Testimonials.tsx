"use client";
/* eslint-disable @next/next/no-img-element */

import { useRef } from "react";
import { clamp, lerp, usePinProgress } from "./useScrollProgress";

type Testimonial = {
  quote: string;
  who: string;
  role: string;
  bg: string;
  /** Resting position from Figma, measured from the frame centre */
  x: number;
  y: number;
  rotate: number;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Find a place and apply with documents already in the account. Pay rent, submit a repair with photos, and keep receipts in one place.",
    who: "Tenants",
    role: "Find, apply, pay, and request repairs",
    bg: "bg-[#c3ebd5]",
    x: 25.6,
    y: -19.35,
    rotate: -2.56,
  },
  {
    quote:
      "Find a place and apply with documents already in the account. Pay rent, submit a repair with photos, and keep receipts in one place.",
    who: "Tenants",
    role: "Find, apply, pay, and request repairs",
    bg: "bg-[#ede2f6]",
    x: 25.6,
    y: -19.35,
    rotate: 3.52,
  },
  {
    quote:
      "Find a place and apply with documents already in the account. Pay rent, submit a repair with photos, and keep receipts in one place.",
    who: "Tenants",
    role: "Find, apply, pay, and request repairs",
    bg: "bg-[#f0edd6]",
    x: 35.73,
    y: 7.33,
    rotate: 1.01,
  },
];

// Scroll budget: a short hold on the title alone, one slot per card, then a hold on the full stack.
const LEAD = 0.1;
const SLOT = 0.27;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

function Card({ t }: { t: Testimonial }) {
  return (
    <div
      className={`flex w-[421.2px] flex-col items-center gap-[32px] rounded-[25.085px] px-[33.437px] pb-[33.437px] pt-[66.873px] drop-shadow-[0px_0px_15.68px_rgba(0,0,0,0.02)] ${t.bg}`}
    >
      <p className="w-[354.6px] text-pretty text-[29.253px] font-semibold leading-[35.104px] tracking-[-1.1701px] text-ink">
        {t.quote}
      </p>
      <div className="flex w-full items-center gap-[12px]">
        <div className="grid size-[51.3px] shrink-0 place-items-center rounded-[25.65px] bg-white">
          <img alt="" src="/img/testimonials/user.svg" className="block size-[28.772px] max-w-none" />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-[19.088px] font-semibold capitalize leading-[26.723px] tracking-[-0.5726px] whitespace-nowrap text-ink">
            {t.who}
          </p>
          <p className="text-[17.179px] leading-[24.051px] tracking-[-0.5154px] whitespace-nowrap text-[rgba(11,20,16,0.7)]">
            {t.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const cards = useRef<(HTMLDivElement | null)[]>([]);

  const { trackRef, stickyRef } = usePinProgress((p) => {
    const vh = window.innerHeight;
    testimonials.forEach((t, i) => {
      const el = cards.current[i];
      if (!el) return;
      const k = easeOut(clamp((p - LEAD - i * SLOT) / SLOT));
      // Card rises from below the viewport, untilting into its resting angle.
      const y = lerp(vh * 0.75 + 200, t.y, k);
      const r = lerp(t.rotate + 10 * (i % 2 ? -1 : 1), t.rotate, k);
      el.style.transform = `translate(-50%, -50%) translate(${t.x}px, ${y}px) rotate(${r}deg)`;
      el.style.visibility = k === 0 ? "hidden" : "visible";
    });
  });

  return (
    <section aria-label="Testimonials" className="bg-[#f0fcf6]">
      <div ref={trackRef} className="relative" style={{ height: "340vh" }}>
        <div ref={stickyRef} className="sticky top-0 h-screen overflow-clip">
          <h2 className="absolute left-1/2 top-[calc(50%-33.5px)] w-[824px] max-w-[calc(100%-48px)] -translate-x-1/2 -translate-y-1/2 text-balance text-center font-display text-[42.418px] leading-[1.6] tracking-[-1.2725px] text-ink uppercase max-md:text-[30px]">
            Built for <span className="text-brand">everyone</span> on the lease
          </h2>
          <div className="absolute inset-0 max-md:[zoom:0.78]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                ref={(el) => {
                  cards.current[i] = el;
                }}
                className="invisible absolute left-1/2 top-1/2 will-change-transform"
              >
                <Card t={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
