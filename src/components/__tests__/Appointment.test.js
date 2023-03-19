import React from "react";
import { render } from "@testing-library/react";
import Appointment from "components/Appointment";

const appointment = {
  "id": 1,
  "time": "12pm",
  "interview": {
    "student": "Archie Cohen",
    "interviewer": 1
  }
};

const interview = {
  "student": "Lydia Miller-Jones",
  "interviewer": {
    "id": 1,
    "name": "Sylvia Palmer",
    "avatar": "https://i.imgur.com/LpaY82x.png"
  }
};

const dailyInterviewers = [ 
  {
    "id": 1,
    "name": "Sylvia Palmer",
    "avatar": "https://i.imgur.com/LpaY82x.png"
  },
  {
    "id": 2,
    "name": "Tori Malcolm",
    "avatar": "https://i.imgur.com/Nmx0Qxo.png"
  },
]

const bookInterview = jest.fn();
const cancelInterview = jest.fn();

it("renders without crashing", () => {
  render(
    <Appointment
      key={appointment.id}
      {...appointment}
      interview={interview}
      bookInterview={bookInterview}
      interviewers={dailyInterviewers}
      cancelInterview={cancelInterview}
    />
  );
});
