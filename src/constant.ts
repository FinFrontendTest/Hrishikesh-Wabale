const Constants = {
  Form: {
    labels: {
      name: "Name",
      email: "Email",
      contact: "Contact",
      weekday: "Weekdays",
      gender: "Gender",
      dob: "Date of Birth",
    },
    weekdays: {
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
    },
    genders: {
      male: "Male",
      female: "Female",
      other: "Other",
    },
  },
  Errors: {
    invalidName: "Name is required!",
    invalidEmail: "Invalid Email!",
    invalidContact: "Invalid Contact!",
    invalidGender: "Gender is required!",
    invalidDOB: "DOB is required!",
  },
  Table: {
    title: "Details Table",
    weekdays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    actionEdit: "Edit Action",
    actionDelete: "Delete Action",
    tableHeader: {
      srNo: "S.No",
      name: "Name",
      email: "Email",
      contact: "Contact",
      weekday: "Weekday",
      gender: "Gender",
      dob: "DOB",
      action: "Action",
    },
  },
  Modal: {
    formTitle: "Edit Details",
    update: "Update",
  },
  App: {
    toastAddSuccess: "Record Added Successfully!",
    toastUpdateSuccess: "Record Updated Successfully!",
    toastDeleteSuccess: "Record Deleted Successfully!",
    toastTheme: "colored",
    toastPosition: "top-center",
    formTitle: "Add Details",
    submit: "Submit",
  },
};

export default Constants;
