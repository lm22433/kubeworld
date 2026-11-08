import type { RouteSectionProps } from "@solidjs/router";

export default function MainLayout(props: RouteSectionProps) {
    return <>{props.children}</>;
}