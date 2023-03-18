import React from "react";
import "components/Appointment/styles.scss";

// This component is used to display the time of the appointment
export default function Header(props) {
  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">{props.time}</h4>
      <hr className="appointment__separator" />
    </header>
  );
}