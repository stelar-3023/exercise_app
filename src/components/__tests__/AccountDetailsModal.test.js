import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AccountModal from "../AccountDetailsModal";

describe("toggleAccount", () => {
  test("toggle the account details modal open", () => {
    render(
      <AccountModal
        user={{ uid: "ZDGIjt1nP1bkbU8mSqJZ3QAO8103" }}
        renderAccount={(toggleAccount) => (
          <button className="toggle-test" onClick={toggleAccount}>
            toggleAccount
          </button>
        )}
      />
    );
    fireEvent.click(screen.getByText("toggleAccount"));
    expect(screen.getByText("Account Details")).toBeTruthy();
  });
});
