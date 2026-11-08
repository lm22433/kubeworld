export default function Background() {
    return (
        <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-neutral-950">
            <div class="absolute -top-1/4 -left-1/4 size-[60vmax] rounded-full bg-pink/15 blur-[120px]" />
            <div class="absolute -right-1/4 -bottom-1/4 size-[60vmax] rounded-full bg-purple/15 blur-[120px]" />
            
            <div
                class="absolute inset-0 opacity-[0.06]"
                style={{
                    "background-image":
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                    "background-size": "48px 48px",
                    "mask-image": "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                }}
            />
        </div>
    );
}
