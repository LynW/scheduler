export function getAppointmentsForDay(state, day) {
  const result = [];

  // find the day object in the days array that matches the day
  const findDay = state.days.find((dayObj) => dayObj.name === day);
  if (!findDay) {
    return result;
  } else {
    // map over the array in the day object and return the appointments
    const appointmentList = findDay.appointments.map(
      (id) => state.appointments[id]
    );
    return appointmentList;
  }
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  } else {
    // return the interview object with the interviewer added
    const interviewer = state.interviewers[interview.interviewer];
    return { ...interview, interviewer };
  }
}

export function getInterviewersForDay(state, day) {
  // find the day object in the days array that matches the day
  const selectedDay = state.days.find((dayObj) => dayObj.name === day);
  let result = [];

  if (!selectedDay) {
    return result;
  }

  // loop over the array in the day object and return the interviewers for that day
  for (const interviewId of selectedDay.interviewers) {
    const intObj = state.interviewers[interviewId];
    result.push(intObj);
  }

  return result;
}