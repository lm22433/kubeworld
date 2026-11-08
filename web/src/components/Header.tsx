import { A } from "@solidjs/router";
import type { IconTypes } from "solid-icons";
import {
  TbOutlineChartBar,
  TbOutlineStack2,
  TbOutlineWorld,
} from "solid-icons/tb";
import Brand from "./Brand";

// Plain icon + text links; the current page gets bright text.
const link =
  "flex items-center gap-1.5 text-[15px] font-medium transition hover:text-ink-1";

function NavLink(props: {
  href: string;
  label: string;
  icon: IconTypes;
  iconClass?: string;
}) {
  return (
    <A
      href={props.href}
      class={link}
      activeClass="text-ink-1"
      inactiveClass="text-ink-2"
    >
      <props.icon size={20} class={props.iconClass} aria-hidden="true" />
      <span class="sr-only sm:not-sr-only sm:[text-box:trim-both_cap_alphabetic]">
        {props.label}
      </span>
    </A>
  );
}

export default function Header() {
  return (
    <div class="pointer-events-none sticky top-0 z-20 mx-auto w-full max-w-[1680px] px-3 pt-3 sm:px-5 sm:pt-4">
      <header class="pointer-events-auto flex h-[58px] items-center gap-3.5 rounded-[20px] border border-white/10 bg-neutral-900/70 pr-4 pl-3.5 backdrop-blur-lg backdrop-saturate-150">
        <Brand />
        <nav
          aria-label="Primary"
          class="ml-auto flex items-center gap-4 sm:gap-5"
        >
          <NavLink href="/dashboard" label="Dashboard" icon={TbOutlineStack2} />
          <NavLink href="/stats" label="Statistics" icon={TbOutlineChartBar} />
          <NavLink
            href="/world"
            label="World"
            icon={TbOutlineWorld}
            iconClass="text-pink"
          />
        </nav>
      </header>
    </div>
  );
}
