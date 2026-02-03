import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, expect, it } from "vitest";

import { Paragraph } from "@/registry/default/ui/paragraph";

describe("Paragraph", () => {
  it("renders with default size base", () => {
    render(<Paragraph>Hello</Paragraph>);
    const el = screen.getByText("Hello");
    expect(el).toBeInTheDocument();
    expect(el.tagName).toBe("P");
  });

  it("renders correct size variants", () => {
    const { unmount } = render(<Paragraph size="xs">XS</Paragraph>);
    expect(screen.getByText("XS")).toBeInTheDocument();
    unmount();

    render(<Paragraph size="3xl">3XL</Paragraph>);
    expect(screen.getByText("3XL")).toBeInTheDocument();
  });

  it("applies variant classes", () => {
    render(<Paragraph size="base" weight="semibold">Bold</Paragraph>);
    const el = screen.getByText("Bold");
    expect(el).toHaveClass("font-semibold");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLParagraphElement>();
    render(<Paragraph ref={ref}>Ref test</Paragraph>);
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
    expect(ref.current?.tagName).toBe("P");
  });

  it("merges className", () => {
    render(<Paragraph className="custom-class">Custom</Paragraph>);
    const el = screen.getByText("Custom");
    expect(el).toHaveClass("custom-class");
  });

  it("has data-slot", () => {
    render(<Paragraph>Slot</Paragraph>);
    const el = screen.getByText("Slot");
    expect(el).toHaveAttribute("data-slot", "paragraph");
  });

  it("merges props with child when asChild", () => {
    render(
      <Paragraph asChild size="base">
        <a href="#test" data-testid="child-link">
          Link paragraph
        </a>
      </Paragraph>,
    );
    const link = screen.getByTestId("child-link");
    expect(link).toHaveAttribute("href", "#test");
    expect(link).toHaveTextContent("Link paragraph");
    expect(link.tagName).toBe("A");
  });
});
