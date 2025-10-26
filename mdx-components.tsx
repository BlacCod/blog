import type { MDXComponents } from "mdx/types";
import { ComponentPropsWithoutRef } from "react";

const components: MDXComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => {
    return <h1 className="font-medium text-2xl pt-12 text-white" {...props} />;
  },
};

export function useMDXComponents(): MDXComponents {
  return components;
}
