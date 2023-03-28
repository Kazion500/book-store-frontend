import { App } from "@/App";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("App", () => {
  it("should render app", () => {
    render(<App />);
    const helloWorldText = screen.getByText("Hello World");
    expect(helloWorldText).toBeInTheDocument();
  });
});
