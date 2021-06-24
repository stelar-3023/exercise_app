import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SignupModal from "../SignupModal";

describe("toggleSignup", () => {
  test("toggle the signup modal open", () => {
    render(
      <SignupModal
        renderSignup={(toggleSignup) => (
          <button className="toggle-test" onClick={toggleSignup}>
            toggleSignup
          </button>
        )}
      />
    );
    fireEvent.click(screen.getByText("toggleSignup"));
    expect(screen.getByText("Sign up")).toBeTruthy();
  });
});
