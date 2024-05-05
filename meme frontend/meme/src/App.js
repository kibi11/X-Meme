import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_KEY = "6Lf0SNEpAAAAAG3FgFnQ3h2C16WVc_QiI2w6gZCn";
const recaptchaRef = React.createRef();

export default function Addmeme({ images, setImages }) {
  const [values, setValues] = useState({
    name: "",
    url: "",
    caption: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleauthorname = (event) => {
    setValues({ ...values, name: event.target.value });
    console.log(event.target.value);
  };
  const handlecaption = (event) => {
    setValues({ ...values, caption: event.target.value });
  };
  const handleurl = (event) => {
    setValues({ ...values, url: event.target.value });
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    if (values.name && values.url) {
      setValid(true);
      axios
        .post("https://x-meme-zeta.vercel.app/memes", values)
        .then((response) => {
          console.log(response.data, "is the data that I get back");
          setImages(images.concat(response.data));
        });
      const refreshedObject = {
        name: "",
        url: "",
        caption: "",
      };
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
      setValues(refreshedObject);
    }
    setSubmitted(true);
  };

  const EnableButton = () => {
    if (showInfo == false) {
      setShowInfo(true);
    } else {
      setShowInfo(false);
    }
  };

  return (
    <div class="form-container">
      <form
        class="register-form"
        onSubmit={handlesubmit}
        data-netlify-recaptcha="true"
        data-netlify="true"
        data-netlify-recaptcha="true" // new Netlify data attribute
      >
        <div class="add-new">
          <h2>Add Meme</h2>
        </div>
        {/* Uncomment the next line to show the success message */}
        {showSuccess ? (
          <div class="success-message">
            Success! Thank you for your contribution
          </div>
        ) : (
          false
        )}
        <input
          onChange={handleauthorname}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="Name ( Required )"
          name="Name"
          value={values.name}
        />
        {/* Uncomment the next line to show the error message */}
        {/* {submitted && !values.name ? (
          <span id="author-error">Please enter Name </span>
        ) : null} */}
        <input
          onChange={handlecaption}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Caption ( Required )"
          name="Caption"
          value={values.caption}
        />
        <input
          onChange={handleurl}
          id="email"
          class="form-field"
          type="text"
          placeholder="Enter the image Url ( Required )"
          name="url"
          value={values.url}
        />
        {/* Uncomment the next line to show the error message */}
        {/* {submitted && !values.url ? (
          <span id="url-error">Please enter the image url</span>
        ) : null} */}
        <ReCAPTCHA
          sitekey={RECAPTCHA_KEY}
          onChange={EnableButton}
          className="captcha"
          ref={recaptchaRef}
        />
        <button
          class="form-field"
          type="submit"
          style={{ display: showInfo ? "block" : "none" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
