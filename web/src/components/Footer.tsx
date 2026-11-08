import Brand from "./Brand";

export default function Footer() {
    return (
        <footer class="mx-auto w-full max-w-[1680px] px-3 pb-4 sm:px-5">
            <div class="flex h-12 items-center justify-between rounded-[20px] border border-white/10 bg-neutral-900/70 px-4 text-[12px] text-ink-2">
                <div class="flex items-center gap-3">
                    <Brand />
                    <span class="text-ink-3">© {new Date().getFullYear()}</span>
                </div>
                <a href="https://github.com/lm22433/kubeworld" class="hover:text-ink-1">GitHub</a>
            </div>
        </footer>
    );
}