import React from "react";
import "components/Appointment/styles.scss";

import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default function Form(props) {
  return (
    <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off">
      <input
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        placeholder="Enter Student Name"
        onChange={event => props.setName(event.target.value)}
        value={props.name}
      />
    </form>
    <InterviewerList
      interviewers={props.interviewers}
      value={props.interviewer}
      onChange={props.setInterviewer}
    />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={props.onCancel}>Cancel</Button>
      <Button confirm onClick={props.onConfirm}>Save</Button>
    </section>
  </section>
</main>
  );
};