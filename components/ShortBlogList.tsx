import Link from "./Link";

export function ShortBlogList() {
  return (
    <>
      <div className="flex flex-wrap justify-between">
        <h4 className="font-semibold">Recent posts</h4>
        <Link href="/posts">See all</Link>
      </div>
    </>
  );
}
