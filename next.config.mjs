import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      "remark-frontmatter", // This allows mdx to "understand" frontmatter, i.e. not render them
      "remark-mdx-frontmatter", // This exports the frontmatter as variables
      "remark-math",
    ],
    rehypePlugins: ["rehype-katex"],
  },
});

export default withMDX(nextConfig);
