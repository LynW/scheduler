import { useState } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  Promise.all([
    axios.get("/api/days"),
    axios.get("/api/appointments"),
    axios.get("/api/interviewers"),
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
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
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
  return { state, setState, bookInterview, cancelInterview, setDay };
}
