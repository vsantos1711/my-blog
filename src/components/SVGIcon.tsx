import Link from "next/link";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const logo = tv({
  base: "fill-current hover:text-stone-100 transition focus:text-stone-100 fill-current",
  variants: {
    size: {
      default: "sm:w-9 sm:h-9 w-8 h-8",
      sm: "w-7 h-7",
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
