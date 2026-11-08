import type { RouteSectionProps } from "@solidjs/router";
import Header from "../../components/Header";
import Background from "../../components/Background";

export default function MainLayout(props: RouteSectionProps) {
  return (
    <div class="flex min-h-dvh flex-col">
      <Background />
      <Header />
      {props.children}
    </div>
  );
}