import { useState } from "react";
import "./ContactUs.css";

export default function ContactUs() {
  const [values, setValues] = useState({});
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [messageErr, setMessageErr] = useState(false);
  const field = "This field is required.";
  const email = "Invalid email address";

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setNameErr(false);
    setEmailErr(false);
    setMessageErr(false);
  };

  const handleOnSubmit = () => {
    let succes = true;
    if (!values.name || values.name === "") {
      setNameErr(true);
      succes = false;
    }

    if (!values.message || values.message === "") {
      setMessageErr(true);
      succes = false;
    }

    if (!values.email || values.email === "") {
      setEmailErr(true);
      succes = false;
    }
    if (values.email && values.email.includes("@") && values.email.includes(".")) {
      setEmailErr(false);
    } else {
      setEmailErr(true);
      succes = false;
    }

    if (succes) {
      window.location.reload(false);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="contact">
      <h2>CONTACT US</h2>
      <div className="form">
        <div className={nameErr ? "error nameInput" : "nameInput"}>
          <p>Name</p>
          <input name="name" type="text" value={values.name ? values.name : ""} onChange={handleOnChange} />
          <h5>{nameErr ? field : ""}</h5>
        </div>

        <div className={emailErr ? "error emailInput" : "emailInput"}>
          <p>Email</p>
          <input name="email" type="text" value={values.email ? values.email : ""} onChange={handleOnChange} />
          <h5>{emailErr ? email : ""}</h5>
        </div>

        <div className={messageErr ? "error messageInput" : "messageInput"}>
          <p>Message</p>
          <textarea name="message" type="text" value={values.message ? values.message : ""} onChange={handleOnChange} />
          <h5>{messageErr ? field : ""}</h5>
        </div>

        <button onClick={handleOnSubmit}>SUBMIT</button>
      </div>
    </div>
  );
}
