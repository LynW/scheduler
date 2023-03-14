import React, { useState } from "react";
import "components/Appointment/styles.scss";

import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default function Form(props) {

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = function() {
    setStudent("");
    setInterviewer(null);
  };

  const cancel = function() {
    reset();
    props.onCancel();
  };

  return (
    <main className="appointment__card appointment__card--create">
    <section className="appointment__card-left">
    <form autoComplete="off">
      <input
        className="appointment__create-input text--semi-bold"
        student="student"
        type="text"
        placeholder="Enter Student Name"
        onChange={event => setStudent(event.target.value)}
        value={props.student}
      />
    </form>
    <InterviewerList
      interviewers={props.interviewers}
      value={interviewer}
      onChange={setInterviewer}
    />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={cancel}>Cancel</Button>
      <Button confirm onClick={event => props.onSave(student, interviewer)} onSubmit={event => event.preventDefault()}>Save</Button>
    </section>
  </section>
</main>
  );
};
