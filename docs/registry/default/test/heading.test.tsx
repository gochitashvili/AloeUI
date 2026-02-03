import { render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, expect, it } from "vitest";

import { Heading } from "@/registry/default/ui/heading";

describe("Heading", () => {
  it("renders with default size h1", () => {
    render(<Heading>Hello</Heading>);
    const el = screen.getByRole("heading", { level: 1 });
    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent("Hello");
  });

  it("renders correct element for each size", () => {
    const sizes = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
    for (let i = 0; i < sizes.length; i++) {
      const size = sizes[i];
      const level = i + 1;
      const { unmount } = render(
        <Heading size={size}>Heading {level}</Heading>,
      );
      expect(screen.getByRole("heading", { level })).toHaveTextContent(
        `Heading ${level}`,
      );
      unmount();
    }
  });

  it("applies variant classes", () => {
    render(<Heading size="h2" weight="bold">Bold</Heading>);
    const el = screen.getByRole("heading", { level: 2 });
    expect(el).toHaveClass("font-bold");
  });

  it("forwards ref", () => {
    const ref = React.createRef<HTMLHeadingElement>();
    render(<Heading ref={ref}>Ref test</Heading>);
    expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
    expect(ref.current?.tagName).toBe("H1");
  });

  it("merges className", () => {
    render(<Heading className="custom-class">Custom</Heading>);
    const el = screen.getByRole("heading");
    expect(el).toHaveClass("custom-class");
  });

  it("has data-slot", () => {
    render(<Heading>Slot</Heading>);
    const el = screen.getByRole("heading");
    expect(el).toHaveAttribute("data-slot", "heading");
  });

  it("merges props with child when asChild", () => {
    render(
      <Heading asChild size="h2">
        <a href="#test" data-testid="child-link">
          Link heading
        </a>
      </Heading>,
    );
    const link = screen.getByTestId("child-link");
    expect(link).toHaveAttribute("href", "#test");
    expect(link).toHaveTextContent("Link heading");
    expect(link.tagName).toBe("A");
  });
});
