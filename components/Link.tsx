import NextLink from "next/link";
import type { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof NextLink> & {
  className?: string;
  underline?: boolean;
  external?: boolean;
};

export default function Link({
  className,
  external,
  underline = true,
  ...restProps
}: LinkProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <NextLink
      {...restProps}
      {...externalProps}
      className={`${underline && "underline underline-offset-2"} decoration-amber-500 ${className || ""}`}
    />
  );
}
