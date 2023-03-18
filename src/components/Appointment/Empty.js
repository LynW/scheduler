import React from "react";
import "components/Appointment/styles.scss";

// If there are no appointments scheduled, an empty with a button. If the user clicks the button, they can add an interview.
export default function Empty(props) {
  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </main>
  );
}