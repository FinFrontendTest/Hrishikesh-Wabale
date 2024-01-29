import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form.tsx";
import Modal from "./components/Modal/Modal.tsx";
import Table from "./components/Table/Table.tsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Constants from "./constant.ts";

function App() {
  // State
  const [modal, setModal] = useState({
    show: false,
    key: null,
  });
  const [data, setData] = useState([]);

  // Notifications
  const addedNotif = () =>
    toast.success(Constants.App.toastAddSuccess, {
      position: Constants.App.toastPosition,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: Constants.App.toastTheme,
    });
  const updatedNotif = () =>
    toast.info(Constants.App.toastUpdateSuccess, {
      position: Constants.App.toastPosition,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: Constants.App.toastTheme,
    });
  const deletedNotif = () =>
    toast.error(Constants.App.toastDeleteSuccess, {
      position: Constants.App.toastPosition,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: Constants.App.toastTheme,
    });

  // Methods
  const closeModal = () => {
    setModal({
      show: false,
      key: null,
    });
    modal.show = false;
  };

  const displayModal = (key) => {
    setModal({
      show: true,
      key: key,
    });
  };

  const onSubmit = (entry) => {
    setData([...data, entry]);
    addedNotif();
  };

  const onUpdate = (entry, key) => {
    const temp = data;
    temp[key] = entry;
    setData([...temp]);
    updatedNotif();
  };

  const onDelete = (key) => {
    let temp = data;
    temp.splice(key, 1);
    setData([...temp]);
    deletedNotif();
  };

  return (
    <div className="App">
      <ToastContainer />
      {modal.show ? (
        <Modal
          closeModal={closeModal}
          onUpdate={onUpdate}
          rowId={modal.key}
          form={data[modal.key]}
        />
      ) : null}
      <Form
        title={Constants.App.formTitle}
        submit={Constants.App.submit}
        onSubmit={onSubmit}
      />
      <hr />
      <Table data={data} displayModal={displayModal} onDelete={onDelete} />
    </div>
  );
}

export default App;
