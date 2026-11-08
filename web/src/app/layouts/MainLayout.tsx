import type { RouteSectionProps } from "@solidjs/router";
import Background from "../../components/Background";
import Header from "../../components/Header";

export default function MainLayout(props: RouteSectionProps) {
  return (
    <div class="flex min-h-dvh flex-col">
      <Background />
      <Header />
      {props.children}
    </div>
  );
}
