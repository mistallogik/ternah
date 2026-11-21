"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { HomeScreen, Phone } from "./Phone";
import { usePinProgress } from "./useScrollProgress";

const steps = [
  { a: "rent DUE, ", b: "THEN PAID", body: "See what's owed and when, then pay it from the same screen." },
  { a: "LANDlords, ", b: "recieve it", body: "Payments, requests and signatures land as they happen." },
  { a: "FiND A Place, ", b: "& apply", body: "See the unit, then apply once with ID and income checked." },
  { a: "SHARED BILLs, ", b: "& charges", body: "See the unit, then apply once with ID and income checked." },
  { a: "REPORT Repair ", b: "easily", body: "Snap it, send it, and follow it from submitted to fixed." },
  { a: "SIGN LEASE ", b: "ON the go", body: "Read it, sign it, and both signatures stay on record." },
  {
    a: "managers seE ",
    b: "landlords",
    body: "Every landlord's buildings, new and current tenants, and their team.",
  },
];

/** Screen shown in the phone for each step; step 0 is the Figma home screen. */
const screens = [
  null,
  "/img/realities/screen-1.jpg",
  "/img/realities/screen-2.jpg",
  "/img/realities/screen-3.jpg",
  "/img/realities/screen-4.jpg",
  "/img/realities/screen-5.jpg",
  "/img/realities/screen-6.jpg",
];

const SCREEN_RADIUS = 56.021;

export function Realities() {
  const [active, setActive] = useState(0);
  const { trackRef, stickyRef, scrollToProgress } = usePinProgress((p) => {
    const i = Math.min(steps.length - 1, Math.floor(p * steps.length));
    setActive((prev) => (prev === i ? prev : i));
  });

  return (
    <section
      id="product"
      className="relative overflow-clip bg-forest pb-[120px] pt-[120px] max-lg:pb-20 max-lg:pt-24"
      style={{
        // Figma "Layer_1" pattern, multiplied onto the section colour. Fixed attachment keeps it
        // still while the row is pinned; centred where Figma places it relative to the pinned row.
        backgroundImage: "url(/img/realities/pattern.svg)",
        backgroundBlendMode: "multiply",
        backgroundRepeat: "no-repeat",
        backgroundSize: "3518.678px 3501.19px",
        backgroundAttachment: "fixed",
        backgroundPosition: "calc(50vw + 320.86px - 1759.339px) calc(max(541px, 50vh) - 128.6px - 1750.595px)",
      }}
    >
      <div className="mx-auto w-full max-w-[1192px] max-[1240px]:px-6">
        <h2 className="relative z-10 w-full whitespace-pre-wrap font-display text-[48px] leading-[1.6] tracking-[0.449px] text-white uppercase max-lg:text-[36px] max-md:text-[26px]">
          {"built around the realities of \n"}
          <span className="text-brand-bright">tenants</span> and <span className="text-brand-bright">landlords</span>
        </h2>

        {/* Pinned track: the row stays fixed while the page scrolls through each step */}
        <div
          ref={trackRef}
          className="relative mt-[120px] max-lg:mt-12"
          style={{ height: `calc(862px + ${steps.length - 1} * 55vh)` }}
        >
          <div
            ref={stickyRef}
            className="sticky top-[max(110px,calc(50vh-431px))] flex items-start gap-[200px] max-xl:gap-10 max-lg:top-[96px] max-lg:flex-col max-lg:items-center max-lg:gap-8"
          >
            <ol className="flex w-[545px] shrink-0 flex-col gap-[48px] max-lg:w-full max-lg:max-w-[545px] max-lg:gap-0">
              {steps.map((s, i) => {
                const on = i === active;
                return (
                  <li key={s.b} className={on ? "" : "max-lg:hidden"}>
                    <button
                      type="button"
                      onClick={() => scrollToProgress((i + 0.5) / steps.length)}
                      aria-current={on ? "step" : undefined}
                      className={`flex w-full cursor-pointer items-stretch gap-[20px] text-left transition-opacity duration-300 ease-out ${on ? "opacity-100" : "opacity-30 hover:opacity-60"}`}
                    >
                      <span
                        className={`w-[8px] shrink-0 origin-top bg-brand-bright transition-transform duration-300 ease-out ${on ? "scale-y-100" : "scale-y-0"}`}
                      />
                      <span className="flex min-w-0 flex-1 flex-col gap-[12px] text-white">
                        <span className="w-full font-display text-[32px] leading-[1.6] tracking-[0.449px] uppercase max-md:text-[24px]">
                          {s.a}
                          <span className="text-brand-bright">{s.b}</span>
                        </span>
                        <span className="w-full text-[16px] leading-[1.2] tracking-[-0.32px]">{s.body}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className="max-lg:[zoom:0.75] max-md:[zoom:0.6]">
              <Phone set="realities" width={367} height={746}>
                {screens.map((src, i) => (
                  <div
                    key={i}
                    aria-hidden={i !== active}
                    className={`absolute inset-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                  >
                    {src === null ? (
                      <HomeScreen set="realities" radius={SCREEN_RADIUS} />
                    ) : (
                      <div
                        className="absolute overflow-hidden bg-[#eef3ef]"
                        style={{ inset: "1.99% 4.56% 1.18% 4.78%", borderRadius: SCREEN_RADIUS }}
                      >
                        <img
                          alt={`${steps[i].a}${steps[i].b} in the Ternah app`}
                          src={src}
                          className="absolute inset-0 size-full max-w-none object-cover object-top"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </Phone>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
