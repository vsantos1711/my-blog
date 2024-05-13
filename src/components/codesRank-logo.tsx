import Link from "next/link";

import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const logo = tv({
  base: "fill-current",
  variants: {
    size: {
      default: "w-9 h-9",
      sm: "w-8 h-8 ",
      xsm: "w-6 h-6 ",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type LogoProps = ComponentProps<"svg"> & VariantProps<typeof logo>;

export default function CodesRankLogo({ size, className }: LogoProps) {
  return (
    <Link
      href="https://github.com/vsantos1711"
      target="_blank"
      className="hover:text-stone-100 transition focus:text-stone-100"
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={logo({ size, className })}
      >
        <title>CodersRank</title>
        <path d="M23.134 8.64l-5.973-3.62a.286.286 0 0 0-.412.125l-1.4 3.286 2.842 1.696a.53.53 0 0 1 0 .921l-5.335 3.14-2.267 5.274a.127.127 0 0 0 .052.203.122.122 0 0 0 .134-.035l3.914-2.365 1.545 2.219a.373.373 0 0 0 .309.167h3.708a.367.367 0 0 0 .327-.2.382.382 0 0 0-.018-.386l-2.513-3.852 5.088-3.077c.577-.349.865-.74.865-1.172V9.813c0-.433-.288-.823-.866-1.172zM13.082 4.35L.845 12.052c-.577.348-.858.739-.845 1.171v1.173c.014.432.303.816.866 1.15l6.056 3.496a.286.286 0 0 0 .412-.146l1.36-3.286-2.884-1.633a.518.518 0 0 1-.275-.384.529.529 0 0 1 .254-.537l5.295-3.245 2.183-5.316a.128.128 0 0 0-.04-.142.122.122 0 0 0-.146-.005z" />
      </svg>
    </Link>
  );
}
