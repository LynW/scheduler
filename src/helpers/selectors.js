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