import { For, type JSX } from "solid-js";

// Frosted aurora: slow drifting colour blobs, a vignette and film grain.
// Blob softness comes from the gradient in `.blob` (global.css), not filter: blur(),
// so each one is rasterised once and then only moved by the compositor.
const blobs: JSX.CSSProperties[] = [
  {
    width: "64vw",
    top: "-22%",
    left: "-16%",
    "--c": "var(--color-purple)",
    opacity: 0.4,
    "--anim": "lava-a 92s ease-in-out infinite",
  },
  {
    width: "56vw",
    top: "-20%",
    right: "-4%",
    "--c": "var(--color-pink)",
    opacity: 0.44,
    "--anim": "lava-b 118s ease-in-out infinite",
  },
  {
    width: "72vw",
    bottom: "-32%",
    left: "2%",
    "--c": "var(--color-blue)",
    opacity: 0.38,
    "--anim": "lava-c 104s ease-in-out infinite",
  },
  {
    width: "48vw",
    bottom: "-16%",
    right: "-8%",
    "--c": "var(--color-purple)",
    opacity: 0.36,
    "--anim": "lava-d 78s ease-in-out infinite",
  },
  {
    width: "40vw",
    top: "-8%",
    right: "14%",
    "--c": "var(--color-pink)",
    opacity: 0.3,
    "--anim": "lava-c 134s ease-in-out infinite reverse",
  },
  {
    width: "52vw",
    bottom: "-22%",
    right: "14%",
    "--c": "var(--color-blue)",
    opacity: 0.26,
    "--anim": "lava-b 86s ease-in-out infinite reverse",
  },
  {
    width: "46vw",
    top: "-16%",
    left: "16%",
    "--c": "var(--color-purple)",
    opacity: 0.3,
    "--anim": "lava-d 112s ease-in-out infinite reverse",
  },
];

const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function Background() {
  return (
    <div
      aria-hidden="true"
      class="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void"
    >
      <For each={blobs}>{(style) => <i class="blob" style={style} />}</For>
      <div class="absolute inset-0 bg-[radial-gradient(150%_120%_at_50%_44%,rgb(5_7_15/.14)_0%,rgb(5_7_15/.34)_56%,rgb(5_7_15/.66)_100%)]" />
      <div
        class="absolute inset-0 opacity-[0.045]"
        style={{ "background-image": grain }}
      />
    </div>
  );
}
