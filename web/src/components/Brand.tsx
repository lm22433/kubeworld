import { A } from "@solidjs/router";
import logoUrl from "../assets/logo.svg";

export default function Brand() {
  return (
    <A
      href="/"
      end
      aria-label="Kubeworld Home"
      class="inline-flex items-center gap-2 text-[14px] font-semibold text-ink-1"
    >
      <img src={logoUrl} alt="" class="size-6" />
      Kubeworld
    </A>
  );
}
