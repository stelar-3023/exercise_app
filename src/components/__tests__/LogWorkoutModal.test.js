import React from "react";
import { render, fireEvent, screen} from "@testing-library/react";
import WorkoutModal from "../LogWorkoutModal";


describe("toggleWorkout", () => {
  test("toggle the workout modal open", () => {
    render(<WorkoutModal user={{uid: "ZDGIjt1nP1bkbU8mSqJZ3QAO8103" }} renderWorkout={(toggleWorkout) => (
       <a className="toggle-test" onClick={toggleWorkout}>Toggle</a>
    )}/>);
    // fireEvent.click(screen.getByText("Toggle"))
    expect(screen.getByText("Add Exercises")).toBeTruthy()
  })
})