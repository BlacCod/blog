import { getTil } from "@/app/utils";
import Link from "@/components/Link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "TIL",
};
export default function Posts() {
  const posts = getTil();

  console.log(posts);
  return (
    <div>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/til/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
