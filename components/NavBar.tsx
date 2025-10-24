import Link from "next/link";
import { ReactNode } from "react";

function NavLink(props: { href: string; children: ReactNode }) {
  return (
    <Link
      href={props.href}
      className="text-amber-100 hover:text-amber-500 hover:underline dark:decoration-amber-100/30 hover:dark:decoration-amber-500/50 transition-colors"
    >
      {props.children}{" "}
    </Link>
  );
}
export default function NavBar() {
  return (
    <section className="flex flex-wrap ml-auto py-5 justify-end">
      <nav className="flex gap-3">
        <NavLink href="/">home</NavLink>
        <NavLink href="/about">about</NavLink>
        <NavLink href="/posts">posts</NavLink>
        <NavLink href="/til">til</NavLink>
      </nav>
    </section>
  );
}
