import "katex/dist/katex.min.css";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, frontmatter } = await import(
    `@/content/posts/${slug}.mdx`
  );

  return (
    <>
      <h1>{frontmatter.title}</h1>
      <p className="italic">
        Published:{" "}
        {new Date(frontmatter.publishedAt).toLocaleDateString("en-GB")}
      </p>
      <Post />
    </>
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { frontmatter } = await import(`@/content/posts/${slug}.mdx`);
  return {
    title: frontmatter.title,
  };
}
