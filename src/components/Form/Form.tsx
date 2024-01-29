import React, { useEffect, useState } from "react";
import "./Form.css";
import Constants from "../../constant.ts";

interface weekDays {
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
}

interface errors {
  name: string;
  email: string;
  contact: string;
  gender: string;
  dob: string;
}

const Form = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    weekday: [false, false, false, false, false],
    gender: "",
    dob: "",
  });
  const [errors, setErrors] = useState<errors>({
    name: "",
    email: "",
    contact: "",
    gender: "",
    dob: "",
  });
  const [checked, setChecked] = useState<string>();
  const [dayChecked, setDayChecked] = useState<weekDays>({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
  });

  useEffect(() => {
    if (props.form) {
      setFormData(props.form);
      if (props.form.gender) {
        setChecked(props.form.gender);
      }
      if (props.form.weekday && props.form.weekday.length === 5) {
        setDayChecked({
          monday: props.form.weekday[0],
          tuesday: props.form.weekday[1],
          wednesday: props.form.weekday[2],
          thursday: props.form.weekday[3],
          friday: props.form.weekday[4],
        });
      }
    }
  }, [props.form]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      contact: "",
      gender: "",
      dob: "",
    };

    if (
      !formData.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    ) {
      newErrors.email = Constants.Errors.invalidEmail;
      isValid = false;
    }

    if (formData.name.length === 0) {
      newErrors.name = Constants.Errors.invalidName;
      isValid = false;
    }

    if (
      !formData.contact.match(
        /^(\+\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
      )
    ) {
      newErrors.contact = Constants.Errors.invalidContact;
      isValid = false;
    }

    if (!formData.gender) {
      newErrors.gender = Constants.Errors.invalidGender;
      isValid = false;
    }

    if (!formData.dob) {
      newErrors.dob = Constants.Errors.invalidDOB;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const onChecked = (value) => {
    setChecked(value);
    setFormData({
      ...formData,
      gender: value,
    });
  };

  const handleDayToggle = (day) => {
    const temp = dayChecked;
    temp[day] = !temp[day];
    setDayChecked({ ...temp });
    setFormData({
      ...formData,
      weekday: [
        dayChecked.monday,
        dayChecked.tuesday,
        dayChecked.wednesday,
        dayChecked.thursday,
        dayChecked.friday,
      ],
    });
  };

  const onDateChange = (event) => {
    setFormData({
      ...formData,
      dob: event.target.value,
    });
  };

  const submitDetails = () => {
    if (validateForm()) {
      const entry = {
        ...formData,
      };
      props.onSubmit(entry);
      setFormData({
        name: "",
        email: "",
        contact: "",
        weekday: [false, false, false, false, false],
        gender: "",
        dob: "",
      });
      setChecked("");
      setDayChecked({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
      });
    }
  };

  return (
    <div className="container">
      <h2>{props.title}</h2>
      <br />
      <form className="form">
        <div>
          <div className="group">
            <input
              type="text"
              required
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>{Constants.Form.labels.name}</label>
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
        </div>
        <div>
          <div className="group">
            <input
              type="text"
              required
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>{Constants.Form.labels.email}</label>
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
        </div>
        <div>
          <div className="group">
            <input
              type="text"
              required
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>{Constants.Form.labels.contact}</label>
            {errors.contact && <div className="error">{errors.contact}</div>}
          </div>
        </div>
        <div>
          <div className="radio-group">
            <p>{Constants.Form.labels.weekday}</p>
            <div className="options">
              <div className="check-wrapper">
                <input
                  id="checkbox"
                  onChange={() => handleDayToggle("monday")}
                  type="checkbox"
                  checked={dayChecked.monday}
                />
                <p>{Constants.Form.weekdays.monday}</p>
              </div>
              <div className="check-wrapper">
                <input
                  id="checkbox"
                  onChange={() => handleDayToggle("tuesday")}
                  type="checkbox"
                  checked={dayChecked.tuesday}
                />
                <p>{Constants.Form.weekdays.tuesday}</p>
              </div>
              <div className="check-wrapper">
                <input
                  id="checkbox"
                  onChange={() => handleDayToggle("wednesday")}
                  type="checkbox"
                  checked={dayChecked.wednesday}
                />
                <p>{Constants.Form.weekdays.wednesday}</p>
              </div>
              <div className="check-wrapper">
                <input
                  id="checkbox"
                  onChange={() => handleDayToggle("thursday")}
                  type="checkbox"
                  checked={dayChecked.thursday}
                />
                <p>{Constants.Form.weekdays.thursday}</p>
              </div>
              <div className="check-wrapper">
                <input
                  id="checkbox"
                  onChange={() => handleDayToggle("friday")}
                  type="checkbox"
                  checked={dayChecked.friday}
                />
                <p>{Constants.Form.weekdays.friday}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="radio-group">
            <p>{Constants.Form.labels.gender}</p>
            <div className="options">
              <div className="wrapper">
                <input
                  id="radio"
                  type="radio"
                  value="Male"
                  checked={checked === "Male"}
                  onChange={() => onChecked("Male")}
                />
                <p>{Constants.Form.genders.male}</p>
              </div>
              <div className="wrapper">
                <input
                  id="radio"
                  type="radio"
                  value="Female"
                  checked={checked === "Female"}
                  onChange={() => onChecked("Female")}
                />
                <p>{Constants.Form.genders.female}</p>
              </div>
              <div className="wrapper">
                <input
                  id="radio"
                  type="radio"
                  value="Other"
                  checked={checked === "Other"}
                  onChange={() => onChecked("Other")}
                />
                <p>{Constants.Form.genders.other}</p>
              </div>
            </div>
          </div>
          {errors.contact && <div className="error">{errors.gender}</div>}
        </div>
        <div style={{ marginTop: 50 }}>
          <div className="group">
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={(event) => onDateChange(event)}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="dob">{Constants.Form.labels.dob}</label>
            {errors.contact && <div className="error">{errors.dob}</div>}
          </div>
        </div>

        <div className="button" onClick={() => submitDetails()}>
          <div className="text">{props.submit}</div>
        </div>
      </form>
    </div>
  );
};

export default Form;
