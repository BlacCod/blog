import NextLink from "next/link";
import type { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof NextLink> & {
  className?: string;
  underline?: boolean;
};

export default function Link({
  className,
  underline = true,
  ...restProps
}: LinkProps) {
  const isExternal =
    typeof restProps.href === "string" &&
    (restProps.href.startsWith("http") || restProps.href.startsWith("mailto:"));

  const externalProps = isExternal
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
