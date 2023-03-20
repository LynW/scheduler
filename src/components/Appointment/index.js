import React from "react";
import "components/Appointment/styles.scss";
import useVisualMode from "hooks/useVisualMode";

import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {
  // Custom hook to manage visual mode
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  // Save interview function
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch((error) => transition(ERROR_SAVE, true));
  }

  // Delete interview function
  function deleteInterview() {
    transition(DELETING);
    props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch((error) => transition(ERROR_DELETE, true));
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CREATE && (
        <Form interviewers={props.interviewers} onCancel={back} onSave={save} />
      )}
      {mode === SAVING && <Status message="Saving!" />}
      {mode === DELETING && <Status message="Deleting!" />}
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you would like to delete?"
          onConfirm={deleteInterview}
          onCancel={back}
        />
      )}
      {mode === EDIT && (
        <Form
          name={props.interview.student}
          interviewers={props.interviewers}
          interviewer={props.interview.interviewer.id}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === ERROR_SAVE && (
        <Error message="Appointment could not be saved" onClose={back} />
      )}
      {mode === ERROR_DELETE && (
        <Error message="Appointment could not be deleted" onClose={back} />
      )}
    </article>
  );
}
