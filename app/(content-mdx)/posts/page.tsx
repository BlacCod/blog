import { getPosts } from "@/app/utils";
import Link from "@/components/Link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
};

export default function Posts() {
  const posts = getPosts();

  return (
    <div>
      <h2>All Posts</h2>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
