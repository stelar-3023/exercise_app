import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import WorkoutModal from "../LogWorkoutModal";

describe("toggleWorkout", () => {
  test("toggle the workout modal open", () => {
    render(
      <WorkoutModal
        user={{ uid: "ZDGIjt1nP1bkbU8mSqJZ3QAO8103" }}
        renderWorkout={(toggleWorkout) => (
          <button className="toggle-test" onClick={toggleWorkout}>
            toggleWorkout
          </button>
        )}
      />
    );
    fireEvent.click(screen.getByText("toggleWorkout"));
    expect(screen.getByText("Add Exercises")).toBeTruthy();
  });
});
