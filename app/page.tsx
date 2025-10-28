import Link from "@/components/Link";
import { ShortBlogList } from "@/components/ShortBlogList";
import { ShortTilList } from "@/components/ShortTilList";

export default function Home() {
  return (
    <>
      <h4 className="font-semibold my-2">Welcome to my digital garden</h4>
      <div className="space-y-16">
        <section className="space-y-4">
          <p>Hi, my name is Huy.</p>
          <p>
            Here, I write about what interests me, and what I learned along the
            way. Currently it's LLM, self-hosting, privacy, and other CS-related
            topics.{" "}
          </p>{" "}
          <p>
            Check out <Link href="/posts">my full list of blog posts</Link>, or{" "}
            <Link href="/til"> snippets of interesting things I learned.</Link>
          </p>
          <p>
            View my public projects on{" "}
            <Link href="https://www.github.com/blaccod">GitHub</Link>, or send
            me an email at contact [at] vuhuynguyen.com
          </p>
        </section>
        <section>
          <ShortBlogList />
        </section>
        <section>
          <ShortTilList />
        </section>
      </div>
    </>
  );
}
