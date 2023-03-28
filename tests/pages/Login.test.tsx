import { Login } from "@/pages";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

describe("Login", () => {
  it("should render login", async () => {
    render(<Login />);
    const loginText = screen.getByText("Login", { selector: "div" });
    const loginButton = screen.getByRole("button", { name: "Login" });
    await userEvent.click(loginButton);
    expect(loginText).toBeInTheDocument();
  });
});
