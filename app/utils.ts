import matter from "gray-matter";
import { globSync } from "node:fs";
import path from "node:path";

export function getPosts() {
  const mdxFiles = globSync("content/posts/**.mdx");
  const frontmatters = mdxFiles.map((filePath) => {
    const slug = path.parse(filePath).name;
    return { ...matter.read(filePath).data, slug };
  });
  return frontmatters;
}

export function getTil() {
  const mdxFiles = globSync("content/til/**.mdx");
  const frontmatters = mdxFiles.map((filePath) => {
    const slug = path.parse(filePath).name;
    return { ...matter.read(filePath).data, slug };
  });
  return frontmatters;
}
