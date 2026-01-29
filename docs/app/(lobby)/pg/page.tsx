import { Demo } from "@/components/demo";
import { Shell } from "@/components/shell";
import HeadingDemo from "@/registry/default/examples/heading-demo";

export default function PlaygroundPage() {
  return (
    <Shell>
      <Demo>
        <HeadingDemo />
      </Demo>
    </Shell>
  );
}
