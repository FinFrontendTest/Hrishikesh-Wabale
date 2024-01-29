import React from "react";
import "./Modal.css";
import Form from "../Form/Form.tsx";
import Constants from "../../constant.ts";

const Modal = (props) => {
  // Methods
  const onUpdate = (entry) => {
    props.onUpdate(entry, props.rowId);
    props.closeModal();
  };

  const closeModal = (e) => {
    e.stopPropagation();
    props.closeModal();
  };
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>
          &times;
        </span>

        <div className="modal-flex">
          <Form
            form={props.form}
            onSubmit={onUpdate}
            title={Constants.Modal.formTitle}
            submit={Constants.Modal.update}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
