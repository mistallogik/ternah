/* eslint-disable @next/next/no-img-element */
import { CtaButton } from "./CtaButton";
import { HomeScreen, Phone } from "./Phone";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center rounded-[99px] border-2 border-solid border-[#afd7c1] bg-white px-[10px] py-[8px]">
      <div className="flex items-center gap-[7px]">{children}</div>
    </div>
  );
}

function BadgeText({ strong, rest }: { strong: string; rest: string }) {
  return (
    <p className="text-[13.5px] leading-[17.55px] tracking-[-0.405px] whitespace-nowrap text-ink">
      <span className="font-semibold">{strong}</span>
      <span className="text-[rgba(11,20,16,0.7)]">{rest}</span>
    </p>
  );
}

export function Hero() {
  return (
    <section className="relative h-[1256px] overflow-hidden bg-mint-strong max-lg:h-auto">
      {/* Copy block — Figma: top 212, width 1112 */}
      <div className="absolute left-1/2 top-[212px] flex w-[1112px] -translate-x-1/2 flex-col items-center gap-[20px] max-lg:relative max-lg:left-0 max-lg:top-0 max-lg:w-full max-lg:translate-x-0 max-lg:px-4 max-lg:pt-[160px] max-md:pt-[120px]">
        <div className="hero-enter flex flex-wrap items-start justify-center gap-[8px]" style={{ animationDelay: "0ms" }}>
          <Badge>
            <BadgeText strong="Made" rest=" with care in Canada" />
            <span className="relative size-[18px] overflow-clip">
              <span className="absolute inset-[0_3.85%]">
                <img alt="" src="/img/hero/maple.svg" className="absolute inset-0 block size-full max-w-none" />
              </span>
            </span>
          </Badge>
          <Badge>
            <span className="grid size-[18px] place-items-center rounded-[9px] bg-cta">
              <img alt="" src="/img/hero/check.svg" className="block size-[11px] max-w-none" />
            </span>
            <BadgeText strong="Free" rest=" to start" />
          </Badge>
          <Badge>
            <BadgeText strong="Early access" rest=" in Canada & US" />
            <p className="text-[15px] leading-[15px] tracking-[1.2px] whitespace-nowrap text-[rgba(11,20,16,0.7)]">
              🇨🇦🇺🇸
            </p>
          </Badge>
        </div>
        <div className="flex w-full flex-col items-center justify-center px-[10px]">
          <div className="flex w-[882px] max-w-full flex-col items-center gap-[24px]">
            <h1 style={{ animationDelay: "80ms" }} className="hero-enter w-full text-center font-display text-[64px] leading-[110px] tracking-[0.449px] text-black max-lg:text-[48px] max-lg:leading-[1.5] max-md:text-[32px]">
              <span className="text-brand">ONE APP.</span> BOTH SIDES OF THE LEASE
            </h1>
            <p style={{ animationDelay: "160ms" }} className="hero-enter w-[656px] max-w-full text-center text-[24px] leading-[1.2] tracking-[-0.48px] text-black max-md:text-[18px]">
              Collect rent, sign leases, fix repairs. Built so the number one side sees is the number the
              other side sees too.
            </p>
            <div className="hero-enter" style={{ animationDelay: "240ms" }}>
              <CtaButton href="#get-early-access">Get early access</CtaButton>
            </div>
          </div>
        </div>
      </div>

      {/* Phone composition — Figma group at x 287, y 724, 993×804, clipped by the frame */}
      <div className="absolute left-[calc(50%-468.93px)] top-[724px] max-lg:relative max-lg:left-0 max-lg:top-0 max-lg:mt-16 max-lg:h-[420px] max-lg:overflow-hidden max-md:h-[330px]">
        <div className="hero-grow relative h-[804.205px] w-[992.932px] max-lg:left-1/2 max-lg:-translate-x-[calc(50%-27.5px)] max-lg:[zoom:0.75] max-md:[zoom:0.6]">
          {/* Lease card peeking from behind the phone */}
          <div className="hero-float absolute left-[533.62px] top-[160.63px] h-[158.433px] w-[459.311px] overflow-hidden rounded-[28.029px]" style={{ ["--float-dur" as string]: "4.2s", ["--float-delay" as string]: "1.5s" }}>
            <img
              alt=""
              src="/img/hero/float-lease.png"
              className="pointer-events-none absolute left-[-2.37%] top-[-92.66%] h-[657.8%] w-[104.43%] max-w-none"
            />
          </div>

          <Phone set="hero" width={395.634} height={804.205} className="!absolute left-[269.5px] top-0">
            <HomeScreen set="hero" radius={60.37} />
          </Phone>

          {/* Pay-with card */}
          <div className="hero-float absolute left-0 top-[227.46px] flex h-[249.79px] w-[320.042px] flex-col rounded-[25.873px] bg-[rgba(255,255,255,0.3)] p-[8.624px]" style={{ ["--float-dur" as string]: "3.6s", ["--float-delay" as string]: "1.2s" }}>
            <div className="relative aspect-[681/523] w-full overflow-hidden rounded-[21.914px]">
              <img
                alt="Pay with Interac e-Transfer, $1,200.00"
                src="/img/hero/float-pay.png"
                className="pointer-events-none absolute left-[-4.11%] top-[-93.31%] h-[305.93%] w-[108.22%] max-w-none"
              />
            </div>
          </div>

          {/* Reminder pill */}
          <div className="hero-float absolute left-[691.01px] top-[343.89px] h-[41.831px] w-[280.733px] overflow-hidden rounded-[20.916px] border-[5.577px] border-solid border-[#f2f5f1]" style={{ ["--float-dur" as string]: "3.2s", ["--float-delay" as string]: "1.8s" }}>
            <img
              alt="Reminder sent 3 days early"
              src="/img/hero/float-reminder.png"
              className="pointer-events-none absolute left-[-59.27%] top-[-1613.33%] h-[3186.67%] w-[218.54%] max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
