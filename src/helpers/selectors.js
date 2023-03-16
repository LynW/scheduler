export function getAppointmentsForDay(state, day) {
  const result = [];

  const findDay = state.days.find((dayObj) => dayObj.name === day);
  if (!findDay) {
    return result;
  } else {
    const appointmentList = findDay.appointments.map((id) => state.appointments[id]);
    return appointmentList;
  }
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  } else {
    const interviewer = state.interviewers[interview.interviewer];
    return { ...interview, interviewer };
  }
}

export function getInterviewersForDay(state, day) {
  const selectedDay = state.days.find(dayObj => dayObj.name === day);
  let result = [];

  if (!selectedDay) {
    return result;
  }

  for (const interviewId of selectedDay.interviewers) {
    const intObj = state.interviewers[interviewId];
    result.push(intObj);
  }

  return result;
};