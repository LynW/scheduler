import React from "react";
import { render, cleanup } from "@testing-library/react";
import Application from "components/Application";

afterEach(cleanup);

describe("Application", () => {
  xit("renders without crashing", () => {
    render(<Application />);
  });
  it("does something it is supposed to do", () => {
    // ...
  });
});