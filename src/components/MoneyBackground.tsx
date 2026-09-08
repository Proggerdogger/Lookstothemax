import type { CSSProperties } from "react";
import DollarBill from "./DollarBill";

type Bill = {
  top: string;
  left: string;
  width: number;
  rotate: number;
  delay: number;
  duration: number;
  opacity: number;
};

// Fixed positions so the server and browser render the same thing.
const bills: Bill[] = [
  { top: "4%", left: "-4%", width: 260, rotate: -18, delay: 0, duration: 14, opacity: 0.7 },
  { top: "12%", left: "62%", width: 320, rotate: 14, delay: -3, duration: 17, opacity: 0.65 },
  { top: "28%", left: "22%", width: 180, rotate: 28, delay: -6, duration: 12, opacity: 0.5 },
  { top: "36%", left: "82%", width: 220, rotate: -32, delay: -9, duration: 15, opacity: 0.6 },
  { top: "50%", left: "-6%", width: 300, rotate: 10, delay: -2, duration: 18, opacity: 0.65 },
  { top: "58%", left: "44%", width: 160, rotate: -8, delay: -11, duration: 13, opacity: 0.45 },
  { top: "68%", left: "70%", width: 280, rotate: 22, delay: -5, duration: 16, opacity: 0.65 },
  { top: "80%", left: "14%", width: 200, rotate: -24, delay: -8, duration: 14, opacity: 0.55 },
  { top: "88%", left: "56%", width: 240, rotate: 6, delay: -12, duration: 19, opacity: 0.6 },
  { top: "20%", left: "40%", width: 120, rotate: -40, delay: -7, duration: 11, opacity: 0.4 },
  { top: "76%", left: "90%", width: 150, rotate: 36, delay: -4, duration: 12, opacity: 0.45 },
  { top: "-2%", left: "30%", width: 140, rotate: 44, delay: -10, duration: 13, opacity: 0.4 },
  { top: "44%", left: "58%", width: 110, rotate: -14, delay: -1, duration: 10, opacity: 0.35 },
  { top: "94%", left: "34%", width: 170, rotate: 30, delay: -6, duration: 15, opacity: 0.5 },
];

export default function MoneyBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#123b2a_0%,_#0a1f16_55%,_#050f0b_100%)]" />
      {bills.map((bill, i) => (
        <div
          key={i}
          className="money-bill absolute text-gold"
          style={
            {
              top: bill.top,
              left: bill.left,
              width: bill.width,
              opacity: bill.opacity,
              "--r": `${bill.rotate}deg`,
              animationDelay: `${bill.delay}s`,
              animationDuration: `${bill.duration}s`,
            } as CSSProperties
          }
        >
          <DollarBill className="h-auto w-full drop-shadow-[0_12px_30px_rgba(0,0,0,0.45)]" />
        </div>
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(5,15,11,0.75)_100%)]" />
    </div>
  );
}
