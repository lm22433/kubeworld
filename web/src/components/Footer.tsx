import { SiGithub } from "solid-icons/si";
import Brand from "./Brand";

export default function Footer() {
  return (
    <footer class="mx-auto w-full max-w-[1680px] px-3 pb-4 sm:px-5">
      <div class="flex h-[58px] items-center justify-between rounded-[20px] border border-white/10 bg-neutral-900/70 pr-4 pl-3.5 text-[15px] text-ink-2">
        <div class="flex items-center gap-3">
          <Brand />
          {/* Padding grows this box to the 16px wordmark's cap height, so the two baselines line up. */}
          <span class="pt-[calc(1cap/15)] text-ink-3 [text-box:trim-both_cap_alphabetic]">
            © {new Date().getFullYear()} Harry Greentree. All rights reserved.
          </span>
        </div>
        <a
          href="https://github.com/lm22433/kubeworld"
          class="flex items-center gap-1.5 font-medium transition hover:text-ink-1"
        >
          <SiGithub size={20} aria-hidden="true" />
          <span class="[text-box:trim-both_cap_alphabetic]">GitHub</span>
        </a>
      </div>
    </footer>
  );
}
