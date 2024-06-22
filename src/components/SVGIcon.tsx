import Link from "next/link";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";
import GithubSVG from "./path/to/github.svg";

const logo = tv({
  base: "fill-current hover:text-stone-100 transition focus:text-stone-100 fill-current",
  variants: {
    size: {
      default: "w-9 h-9",
      sm: "w-8 h-8",
      xsm: "w-6 h-6",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type IconLinkProps = ComponentProps<"a"> &
  VariantProps<typeof logo> & {
    svg: React.ComponentType<any>;
  };

export default function IconLink({
  size,
  className,
  svg: SvgComponent,
  href = "#",
  ...props
}: IconLinkProps) {
  return (
    <Link href={href} target="_blank" {...props}>
      <SvgComponent className={logo({ size, className })} />
    </Link>
  );
}
