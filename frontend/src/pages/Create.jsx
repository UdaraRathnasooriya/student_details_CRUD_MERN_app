import React, { Fragment, useState } from "react";
import TextInputs from "../components/forminputs/TextInputs";
import NumberInputs from "../components/forminputs/NumberInputs";
import SubmitButton from "../components/buttons/SubmitButton";
import RadioBtn from "../components/forminputs/RadioBtn";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

let count = 0;

const Create = () => {
  count ++;
  console.log(count)
  const [data, setData] = useState({
    name: "",
    email: "",
    age: 0,
    city: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    Axios.post("http://localhost:5000/student/create", data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    navigate("/");
  };

  return (
    <Fragment>
      <div className="flex items-center justify-center h-screen bg-red-200">
        <div className="w-1/2 bg-blue-950 text-white p-8 rounded-xl border-black border-2 space-y-2">
          <div className="text-4xl font-semibold mb-4">Add Student({count})</div>
          <TextInputs
            label="Full Name"
            onchange={handleInputChange}
            name="name"
            type="text"
          />
          <TextInputs
            label="E-mail Address"
            onchange={handleInputChange}
            name="email"
            type="email"
          />
          <NumberInputs label="Age" onchange={handleInputChange} name="age" />
          <TextInputs
            label="City"
            onchange={handleInputChange}
            name="city"
            type="text"
          />
          <RadioBtn
            label="Select Gender"
            valueOne="Male"
            valueTwo="Female"
            onchange={handleInputChange}
            name="gender"
          />
          <div className="text-center pt-8">
            <SubmitButton
              color="yellow"
              text="Add Student"
              width="50%"
              onclick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Create;
