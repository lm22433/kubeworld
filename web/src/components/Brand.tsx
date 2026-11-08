import { A } from "@solidjs/router";
import logoUrl from "../assets/logo.svg";

export default function Brand() {
  return (
    <A
      href="/"
      end
      aria-label="Kubeworld Home"
      class="inline-flex items-center gap-1.5 text-[16px] font-semibold text-ink-1"
    >
      <img src={logoUrl} alt="" class="size-8" />
      <span class="[text-box:trim-both_cap_alphabetic]">Kubeworld</span>
    </A>
  );
}
