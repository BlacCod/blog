import { getTil } from "@/app/utils";
import Link from "./Link";

export function ShortTilList() {
  const posts = getTil();
  return (
    <>
      <div className="flex flex-wrap justify-between">
        <h4 className="font-semibold">Recent snippets</h4>
        <Link href="/til">See all</Link>
      </div>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/til/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
