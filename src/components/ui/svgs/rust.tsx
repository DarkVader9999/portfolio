import type { SVGProps } from "react";

const Rust = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 64 64">
    <path
      fill="url(#solana-rust)"
      d="M15.5 14.5a2 2 0 0 1 1.4-.6h38.6a1 1 0 0 1 .7 1.7l-8.1 8.1a2 2 0 0 1-1.4.6H8.1a1 1 0 0 1-.7-1.7l8.1-8.1Z"
    />
    <path
      fill="url(#solana-rust)"
      d="M48.5 27.9a2 2 0 0 0-1.4-.6H8.5a1 1 0 0 0-.7 1.7l8.1 8.1a2 2 0 0 0 1.4.6h38.6a1 1 0 0 0 .7-1.7l-8.1-8.1Z"
    />
    <path
      fill="url(#solana-rust)"
      d="M15.5 41.3a2 2 0 0 1 1.4-.6h38.6a1 1 0 0 1 .7 1.7l-8.1 8.1a2 2 0 0 1-1.4.6H8.1a1 1 0 0 1-.7-1.7l8.1-8.1Z"
    />
    <defs>
      <linearGradient
        id="solana-rust"
        x1="8"
        y1="51"
        x2="56"
        y2="13"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9945FF" />
        <stop offset="1" stopColor="#14F195" />
      </linearGradient>
    </defs>
  </svg>
);

export { Rust };