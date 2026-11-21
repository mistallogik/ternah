/* eslint-disable @next/next/no-img-element */
import { CtaButton } from "./CtaButton";

type Plan = {
  name: string;
  price: string;
  note: string;
  features: string[];
  bg: string;
  pillBg: string;
  pillText: string;
  pillWidth?: string;
  divider: string;
  check: string;
};

const plans: Plan[] = [
  {
    name: "BASIC",
    price: "C$39",
    note: "For the first year then C$49/month",
    features: [
      "Up to 30 message history",
      "Rent collection & receipts",
      "Lease storage & e-sign",
      "Maintenance queue",
      "Listings & applications",
      "In-app messaging",
      "Auto-pay & late tracking",
    ],
    bg: "bg-[#f0edd6]",
    pillBg: "bg-[#e0dcbc]",
    pillText: "text-[#e76b2f]",
    pillWidth: "w-[71px]",
    divider: "bg-[#e0dcbc]",
    check: "/img/pricing/check-orange.svg",
  },
  {
    name: "GROWING",
    price: "C$69",
    note: "Save C$165.60 with yearly billing",
    features: [
      "Everything in basic",
      "1 team seat",
      "Unlimited message history",
      "Vendor directory",
      "Property managers",
      "Priority support",
    ],
    bg: "bg-[#ede2f6]",
    pillBg: "bg-[#f9f5fc]",
    pillText: "text-[#9c70c4]",
    divider: "bg-[#f9f5fc]",
    check: "/img/pricing/check-purple.svg",
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`flex h-full w-[361px] shrink-0 flex-col items-start gap-[10px] overflow-clip rounded-[24px] px-[36px] py-[29px] max-md:h-auto max-md:w-full max-md:gap-8 max-md:px-6 ${plan.bg}`}
    >
      <div className="flex min-h-px w-full flex-1 flex-col items-start gap-[24px]">
        <div
          className={`flex shrink-0 items-center justify-center rounded-[40px] px-[10px] py-[4px] ${plan.pillBg} ${plan.pillWidth ?? ""}`}
        >
          <p className={`text-[16px] font-medium leading-[1.2] tracking-[-0.32px] whitespace-nowrap ${plan.pillText}`}>
            {plan.name}
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-[20px]">
          <div className="flex w-full flex-col items-start gap-[8px] whitespace-nowrap text-black">
            <div className="relative flex w-full items-center gap-[8px]">
              <p className="font-display text-[40px] leading-[1.6] tracking-[0.449px] uppercase">{plan.price}</p>
              <p className="absolute left-[135px] top-[31px] text-[24px] font-medium leading-[1.2] tracking-[-0.48px]">
                /Month
              </p>
            </div>
            <p className="text-[16px] font-medium leading-[1.2] tracking-[-0.32px]">{plan.note}</p>
          </div>
          <div className={`h-px w-full shrink-0 ${plan.divider}`} />
          <ul className="flex w-full flex-col items-start gap-[12px]">
            {plan.features.map((f) => (
              <li key={f} className="flex w-full items-center gap-[13px]">
                <img alt="" src={plan.check} className="block size-[24px] shrink-0 max-w-none" />
                <p className="text-[16px] leading-[1.2] tracking-[-0.32px] whitespace-nowrap text-black">{f}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CtaButton href="#get-early-access" className="!text-black">
        GET EARLY ACCESS
      </CtaButton>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="bg-white p-[160px] max-[1512px]:px-[max(24px,calc((100vw-1192px)/2))] max-lg:py-20">
      <div className="mx-auto flex w-full max-w-[1192px] items-start gap-[120px] max-xl:flex-col max-xl:gap-12">
        <div className="flex w-[322px] shrink-0 flex-col items-start justify-center gap-[36px] max-xl:w-full max-xl:max-w-[480px]">
          <div className="flex w-full flex-col items-start gap-[20px]">
            <h2 className="w-full text-balance font-display text-[42.418px] leading-[1.6] tracking-[-1.2725px] text-ink uppercase max-md:text-[32px]">
              Simple, Transparent <span className="text-brand">Pricing</span>
            </h2>
            <p className="w-full text-[16px] leading-[1.2] tracking-[-0.32px] text-black">
              Choose a plan that fits your business needs and budget. No hidden fees, no surprises, just
              straightforward pricing.
            </p>
          </div>
          <CtaButton variant="green" href="#get-early-access">
            START FOR FREE
          </CtaButton>
        </div>
        <div className="flex h-[568px] items-center gap-[28px] max-md:h-auto max-md:w-full max-md:flex-col">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
