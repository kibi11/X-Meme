import axios from "axios";
import React, {useState} from "react";
import "./App.css";

export default function Addmeme({images,setImages}) {


 const [values , setValues] = useState({
   name: "",
   url: "",
   caption: "",
 });

 const [submitted, setSubmitted] = useState(false);
 const [valid, setValid] = useState(false);


 const handleauthorname = (event) => {
   setValues({...values, name : event.target.value})
   console.log(event.target.value);
 }
 const handlecaption = (event) => {
   setValues({...values, caption : event.target.value})
 }
 const handleurl = (event) => {
   setValues({...values, url : event.target.value})
 }
 const handlesubmit = (event) => {
   event.preventDefault();
   if(values.name && values.url)
   {
     setValid(true);
     axios.post('https://gentle-refuge-82765.herokuapp.com/memes/', values)
     .then((response) => {

       console.log(response.data, "is the data that I get back");
       setImages(images.concat(response.data));


     });
   }
   setSubmitted(true);
   console.log(valid , "is the valid");
   console.log(submitted , "is the sumit");
 }


  return (
    <div class="form-container">
      <form class="register-form" onSubmit= {handlesubmit}>


        <div class = "add-new"><h2>Add a new meme</h2></div>
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <input
          onChange = {handleauthorname}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="Name"
          name="Name"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.name ? <span id="author-error">Please enter Name </span> : null}
        <input
          onChange = {handlecaption}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Caption"
          name="Caption"
        />
        <input
          onChange = {handleurl}
          id="email"
          class="form-field"
          type="text"
          placeholder="Enter the image Url"
          name="url"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.url ? <span id="url-error">Please enter the image url</span> : null}
        <button class="form-field" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
