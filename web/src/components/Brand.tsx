import { A } from "@solidjs/router";

// Placeholder mark — swap the <svg> for the real logo when there is one.
function Logo() {
    return (
        <svg viewBox="0 0 24 24" class="size-6 text-pink" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7z" />
            <path d="M3.5 7 12 11.5 20.5 7M12 11.5v10" />
        </svg>
    );
}

export default function Brand() {
    return (
        <A href="/" end aria-label="Kubeworld Home" class="inline-flex items-center gap-2 text-[14px] font-semibold text-ink-1">
            <Logo />
            Kubeworld
        </A>
    );
}
