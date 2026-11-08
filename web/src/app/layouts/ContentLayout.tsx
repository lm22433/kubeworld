import type { RouteSectionProps } from "@solidjs/router";
import Footer from "../../components/Footer";

export default function ContentLayout(props: RouteSectionProps) {
  return (
    <div class="flex flex-1 flex-col">
      <main class="mx-auto w-full max-w-[1680px] flex-1 px-5 pt-4 pb-14">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
