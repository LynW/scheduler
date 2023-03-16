import React, { useState } from "react";
import axios from "axios";

import "components/Application.scss";
import Appointment from "components/Appointment";
import DayList from "./DayList";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";


export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const dailyInterviewers = getInterviewersForDay(state, state.day);

  const setDay = (day) => setState({ ...state, day });

  Promise.all([
    axios.get("/api/days"),
    axios.get("/api/appointments"),
    axios.get("/api/interviewers")
  ]).then((all) => {
    const [days, appointments, interviewers] = all;
    setState((prev) => ({
      ...prev,
      days: days.data,
      appointments: appointments.data,
      interviewers: interviewers.data,
    }));
  });

  function bookInterview(id, interview) {
    console.log(id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios
    .put(`http://localhost:8001/api/appointments/${id}`, { interview })
    .then((res) => {
      if (res.status === 204) {
        setState({
          ...state,
          appointments,
        });
      }
    });
  }

function cancelInterview(id) {
  return axios
    .delete(`http://localhost:8001/api/appointments/${id}`)
    .then((res) => {
      if (res.status === 204) {
        const appointment = {
          ...state.appointments[id],
          interview: null,
        };
        const appointments = {
          ...state.appointments,
          [id]: appointment,
        };
        setState({
          ...state,
          appointments,
        });
      }
    });
}

  const appointmentArray = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    return (
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

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} day={state.day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointmentArray}
        <Appointment key="last" time="5pm"/>
      </section>
    </main>
  );
}
