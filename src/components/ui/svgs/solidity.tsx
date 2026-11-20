import type { SVGProps } from "react";
import { useId } from "react";

const Solidity = (props: SVGProps<SVGSVGElement>) => {
  const id = useId();

  return (
    <svg {...props} fill="none" viewBox="0 0 32 32">
      <path
        fill={`url(#${id}-a)`}
        d="M11 3H23L17 13H5Z"
      />
      <path
        fill="#66758F"
        d="M23 3L17 13H29Z"
      />
      <path
        fill="#C9D2E0"
        d="M5 3H11L5 13Z"
      />
      <path
        fill={`url(#${id}-b)`}
        d="M9 29H21L27 19H15Z"
      />
      <path
        fill="#68758F"
        d="M9 29L15 19H3Z"
      />
      <path
        fill="#E4EAF4"
        d="M27 29H21L27 19Z"
      />
      <defs>
        <linearGradient
          id={`${id}-a`}
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop stopColor="#F4F6FA" />
          <stop offset="1" stopColor="#8995AA" />
        </linearGradient>
        <linearGradient
          id={`${id}-b`}
          x1="0"
          y1="1"
          x2="1"
          y2="0"
        >
          <stop stopColor="#9BA8BF" />
          <stop offset="1" stopColor="#DDE4F0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export { Solidity };