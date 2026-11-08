import { A } from "@solidjs/router";
import Brand from "./Brand";

const btn =
  "inline-flex h-[34px] items-center rounded-full border px-3.5 text-[12.5px] font-medium whitespace-nowrap transition hover:-translate-y-px hover:text-ink-1";
const idle = "border-white/10 bg-white/5 text-ink-2 hover:border-white/30";
const current = "border-white/25 bg-white/10 text-ink-1";
const go =
  "border-pink/40 bg-linear-170 from-pink/25 to-purple/15 text-ink-1 hover:border-pink/70";

function NavLink(props: { href: string; label: string }) {
  return (
    <A href={props.href} class={btn} activeClass={current} inactiveClass={idle}>
      {props.label}
    </A>
  );
}

export default function Header() {
  return (
    <div class="pointer-events-none sticky top-0 z-20 mx-auto w-full max-w-[1680px] px-3 pt-3 sm:px-5 sm:pt-4">
      <header class="pointer-events-auto flex h-[58px] items-center gap-3.5 rounded-[20px] border border-white/10 bg-neutral-900/70 pr-3 pl-3.5 backdrop-blur-lg backdrop-saturate-150">
        <Brand />
        <nav
          aria-label="Primary"
          class="ml-auto flex items-center gap-1.5 sm:gap-2"
        >
          <NavLink href="/dashboard" label="Dashboard" />
          <NavLink href="/stats" label="Statistics" />
          <A
            href="/world"
            class={`${btn} ${go}`}
            activeClass="shadow-[0_0_18px_rgba(255,61,139,.28)]"
          >
            World
          </A>
        </nav>
      </header>
    </div>
  );
}
