"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from "react";
import { clamp } from "./useScrollProgress";

// Cards stick at 120px (clears the fixed nav) and each later card sits 24px lower so the
// stack edge shows; phones use tighter values (see --stack-top / --stack-step below).

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex shrink-0 items-center justify-center rounded-[40px] bg-mint px-[10px] py-[4px]">
      <p className="text-[16px] font-medium leading-[1.2] tracking-[-0.32px] whitespace-nowrap text-brand">{children}</p>
    </div>
  );
}

function RentCard() {
  return (
    <div className="flex w-[409px] shrink-0 flex-col stroke-inside relative overflow-clip rounded-[32.014px] bg-white p-[31px] max-lg:w-full max-lg:max-w-[409px]">
      <div className="flex w-full flex-col gap-[39px]">
        <div className="flex w-full items-center justify-between">
          <p className="w-[112px] text-[24px] leading-[1.2] tracking-[-0.48px] text-black">April rent</p>
          <Pill>GROWING</Pill>
        </div>
        <p className="w-full font-display text-[62px] leading-[1.6] tracking-[0.449px] text-black uppercase max-md:text-[44px]">
          $1,850
        </p>
        <p className="w-full text-[24px] leading-[1.2] tracking-[-0.48px] text-muted">Interac e-Transfer</p>
      </div>
    </div>
  );
}

function RepairCard() {
  const check = <img alt="" src="/img/features/check-circle.svg" className="block size-[36px] shrink-0 max-w-none" />;
  const line = <div className="h-[2px] w-[120px] shrink-0 bg-brand max-md:w-auto max-md:flex-1" />;
  return (
    <div className="flex w-[409px] shrink-0 flex-col stroke-inside relative overflow-clip rounded-[32.014px] bg-white px-[30px] py-[48px] max-lg:w-full max-lg:max-w-[409px]">
      <div className="flex w-full flex-col gap-[34px]">
        <p className="w-full text-[24px] leading-[1.2] tracking-[-0.48px] text-muted">Repair request</p>
        <p className="w-full text-[33px] font-medium leading-[1.2] tracking-[-0.66px] text-black">Leaking faucet</p>
        <div className="flex w-full flex-col items-end gap-[11px]">
          <div className="flex w-full items-center">
            {check}
            {line}
            {check}
            {line}
            {check}
          </div>
          <div className="relative h-[17px] w-full text-[14px] leading-[1.2] tracking-[-0.28px] whitespace-nowrap text-muted">
            <p className="absolute left-0 top-0">Sent</p>
            <p className="absolute left-[39.26%] top-0 text-center">In progress</p>
            <p className="absolute right-0 top-0 text-right">Resolved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RenewalCard() {
  return (
    <div className="flex w-[409px] shrink-0 flex-col stroke-inside relative overflow-clip rounded-[32.014px] bg-white px-[31px] py-[30px] max-lg:w-full max-lg:max-w-[409px]">
      <div className="flex w-full flex-col gap-[26px]">
        <div className="flex w-full items-center justify-between">
          <p className="min-w-px flex-1 text-[24px] leading-[1.2] tracking-[-0.48px] text-black">Lease renewal</p>
          <Pill>Signed</Pill>
        </div>
        <div className="relative h-[126px] w-full overflow-clip">
          <div className="absolute left-[calc(50%+0.5px)] top-[23px] h-[85px] w-[246px] -translate-x-1/2 max-md:scale-[0.8]">
            <div className="absolute inset-[-2.35%_0_-1.91%_-0.48%]">
              <img alt="Signature" src="/img/features/signature.svg" className="block size-full max-w-none" />
            </div>
          </div>
        </div>
        <p className="w-full text-[24px] leading-[1.2] tracking-[-0.48px] text-muted">Landlord &amp; tenant</p>
      </div>
    </div>
  );
}

const features = [
  {
    icon: "/img/features/icon-calendar.svg",
    a: "Collect rent ",
    b: "on time",
    body: "Tenants pay by pre-authorized debit in the app, or by e-Transfer, cheque, card, or cash outside it for you to confirm. Either way, every payment reconciles against the lease.",
    bodyWidth: "w-[454px]",
    card: <RentCard />,
  },
  {
    icon: "/img/features/icon-wrench.svg",
    a: "fix things ",
    b: "faster",
    body: "Tenants send a request with a photo. It lands on your dashboard \nthe moment it's in, and you mark it resolved once the work is done.",
    card: <RepairCard />,
  },
  {
    icon: "/img/features/icon-doc.svg",
    a: "renew ",
    b: "hassle-free",
    body: "E-sign a lease and track it to Signed. Rent changes, due-day \nchanges, and cancellation notices go through the same \nrequest-and-approve flow, so both signatures stay on record.",
    card: <RenewalCard />,
  },
];

export function Features() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wrapRefs = useRef<(HTMLDivElement | null)[]>([]);

  // As each later card slides up over the one before, the covered card shrinks slightly.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const wraps = wrapRefs.current;
      const covered = wraps.map((w, i) => {
        if (!w || i === 0) return 0;
        const rect = w.getBoundingClientRect();
        const stickTop = parseFloat(getComputedStyle(w).top) || 0;
        return clamp(1 - (rect.top - stickTop) / (rect.height || 1));
      });
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        let depth = 0;
        for (let j = i + 1; j < covered.length; j++) depth += covered[j];
        card.style.transform = `scale(${1 - depth * 0.04})`;
        card.style.filter = depth > 0 ? `brightness(${1 - depth * 0.05})` : "";
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <section className="bg-white px-[160px] py-[120px] max-[1512px]:px-[max(24px,calc((100vw-1192px)/2))] max-lg:py-20">
      <div className="mx-auto flex w-full max-w-[1192px] flex-col gap-[80px] max-lg:gap-12">
        <h2 className="w-full whitespace-pre-wrap font-display text-[48px] leading-[1.6] tracking-[0.449px] text-black max-lg:text-[36px] max-md:text-[26px]">
          <span className="text-brand">{"EVERYTHING A RENTAL NEEDS. \n"}</span>
          NOTHING IT DOESN’T.
        </h2>

        <div className="flex w-full flex-col gap-[64px] max-md:gap-8">
          {features.map((f, i) => (
            <div
              key={f.b}
              ref={(el) => {
                wrapRefs.current[i] = el;
              }}
              className="sticky w-full [--stack-step:24px] [--stack-top:120px] max-md:[--stack-step:12px] max-md:[--stack-top:84px]"
              style={{ top: `calc(var(--stack-top) + ${i} * var(--stack-step))` }}
            >
              <div
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={`flex w-full origin-top flex-col overflow-clip rounded-[32px] bg-mint p-[64px] will-change-transform max-lg:p-8 ${i > 0 ? "shadow-[0_-12px_32px_-12px_rgba(6,40,24,0.18)]" : ""}`}
              >
                <div className="flex w-full items-center gap-[105px] max-xl:gap-12 max-lg:flex-col max-lg:items-start">
                  <div className="flex min-w-px flex-1 flex-col items-start gap-[144px] max-lg:gap-10">
                    <img alt="" src={f.icon} className="block size-[64px] shrink-0 max-w-none" />
                    <div className="flex w-full flex-col items-start gap-[19px] text-black">
                      <h3 className="w-full font-display text-[32px] leading-[1.6] tracking-[0.449px] uppercase max-md:text-[24px]">
                        {f.a}
                        <span className="text-brand">{f.b}</span>
                      </h3>
                      <p
                        className={`${f.bodyWidth ?? "w-full"} max-w-full text-[16px] leading-[1.2] tracking-[-0.32px] lg:whitespace-pre-line`}
                      >
                        {f.body}
                      </p>
                    </div>
                  </div>
                  {f.card}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
