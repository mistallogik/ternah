"use client";
/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useRef, useState } from "react";

const CARD_W = 390;
const GAP = 32;

function CardShell({ title, body, children }: { title: string; body: string; children: React.ReactNode }) {
  return (
    <article className="relative h-[507px] w-[390px] shrink-0 snap-start overflow-clip rounded-[24px] bg-mint [scroll-margin-left:max(24px,calc((100vw-1192px)/2))] max-md:h-[480px] max-md:w-[320px]">
      <div className="absolute left-[24px] top-[32px] flex w-[342px] flex-col items-start gap-[19px] text-black max-md:w-[272px]">
        <h3 className="w-full whitespace-pre-line font-display text-[24px] leading-[1.6] tracking-[0.449px] uppercase max-md:text-[20px]">
          {title}
        </h3>
        <p className="w-full text-[16px] leading-[1.2] tracking-[-0.32px]">{body}</p>
      </div>
      {children}
    </article>
  );
}

export function Carousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setEdges({ start: el.scrollLeft < 4, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 4 });
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const go = (dir: 1 | -1) => scroller.current?.scrollBy({ left: dir * (CARD_W + GAP), behavior: "smooth" });

  const arrowBtn =
    "flex items-center rounded-[99px] border-2 border-solid border-white p-[32px] transition-[opacity,background-color,transform] duration-200 ease-out hover:bg-white/10 active:scale-[0.95] disabled:pointer-events-none disabled:opacity-40 max-md:p-[20px]";

  return (
    <section id="solutions" className="relative overflow-clip bg-[#06110b] pb-[80px] pt-[555px] max-lg:pt-[420px] max-md:pt-[300px]">
      {/* Photo, mirrored as in Figma, fading to near-black */}
      <div className="pointer-events-none absolute left-1/2 top-0 aspect-[1512/1396] w-[max(100%,1512px)] -translate-x-1/2 -scale-x-100 max-md:w-[1100px]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt=""
            src="/img/carousel/bg-couple.png"
            className="absolute left-[-48.32%] top-[0.07%] h-[93.05%] w-[153.17%] max-w-none"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,17,11,0)] via-[rgba(6,17,11,0.5)] via-[33.302%] to-[#06110b] to-[64.792%]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1192px] items-center justify-between gap-8 max-[1240px]:px-6 max-md:flex-col max-md:items-start">
        <h2 className="w-[682px] max-w-full font-display text-[48px] leading-[1.6] tracking-[0.449px] text-white uppercase max-lg:text-[36px] max-md:text-[26px]">
          <span className="text-brand-bright">Everything</span> a rental runs on,{" "}
          <span className="text-brand-bright">in one place</span>
        </h2>
        <div className="flex shrink-0 items-center gap-[36px] max-md:gap-4">
          <button type="button" aria-label="Previous" onClick={() => go(-1)} disabled={edges.start} className={arrowBtn}>
            <img alt="" src="/img/carousel/arrow-left.svg" className="block size-[32px] max-w-none" />
          </button>
          <button type="button" aria-label="Next" onClick={() => go(1)} disabled={edges.end} className={arrowBtn}>
            <img alt="" src="/img/carousel/arrow-right.svg" className="block size-[32px] max-w-none" />
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        onScroll={measure}
        className="no-scrollbar relative mt-[100px] snap-x snap-mandatory overflow-x-auto max-md:mt-12"
      >
        <div className="flex w-max items-center gap-[32px] px-[max(24px,calc((100vw-1192px)/2))] max-md:gap-4">
          <CardShell
            title={"One shared \nledger"}
            body="Landlords, managers, and tenants see the same balance, so nobody has to ask what’s owed."
          >
            <div className="stroke-inside absolute left-[53px] top-[206px] h-[245.022px] w-[283px] overflow-hidden rounded-[20.827px] max-md:left-[18px]">
              <img
                alt="Lease fully paid: $9,250 total, 5 payments, 80% on time"
                src="/img/carousel/ledger.png"
                className="pointer-events-none absolute left-[-2.16%] top-[-5%] h-[108%] w-[105.19%] max-w-none"
              />
            </div>
          </CardShell>

          <CardShell title={"Documents in \none vault"} body="Leases, IDs, income proof, and receipts, kept secure and easy to find.">
            <div className="stroke-inside absolute left-[calc(50%+0.5px)] top-[203px] h-[268px] w-[283px] -translate-x-1/2 overflow-hidden rounded-[20px]">
              <img
                alt="Documents vault with leases awaiting signature"
                src="/img/carousel/documents.png"
                className="pointer-events-none absolute left-[-4.45%] top-[-18.65%] h-[129.93%] w-[108.76%] max-w-none"
              />
            </div>
          </CardShell>

          <CardShell
            title="Repairs that get tracked"
            body="Tenants send a photo-backed request, and both sides follow it until it’s fixed."
          >
            <div className="stroke-inside absolute left-[53px] top-[208px] h-[258.029px] w-[283px] overflow-clip rounded-[32.014px] max-md:left-[18px]">
              <div className="absolute left-[-47.85px] top-[-55.42px] flex h-[369.003px] w-[378.696px] items-center justify-center">
                <div className="flex-none rotate-[-5.97deg]">
                  <div className="relative h-[334.862px] w-[345.747px]">
                    <img
                      alt="Repair requests in progress and resolved"
                      src="/img/carousel/repairs.png"
                      className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardShell>

          <CardShell
            title="Rent that reconciles"
            body="Debit in the app, or e-Transfer, cheque, or cash you confirm. Every payment lands on the ledger."
          >
            <div className="stroke-inside absolute left-[calc(50%+0.5px)] top-[214px] h-[258px] w-[311px] -translate-x-1/2 overflow-clip rounded-[32.014px] max-md:w-[290px]">
              <div className="absolute left-[-43px] top-[-68.47px] flex h-[394.588px] w-[397.21px] items-center justify-center">
                <div className="flex-none rotate-[-5.91deg]">
                  <div className="relative h-[359.234px] w-[362.174px]">
                    <img
                      alt="Transactions list with rent received and a payout"
                      src="/img/carousel/rent.png"
                      className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardShell>
        </div>
      </div>
    </section>
  );
}
