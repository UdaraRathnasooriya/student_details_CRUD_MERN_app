import React, { Fragment, useEffect, useState } from "react";
import TextInputs from "../components/forminputs/TextInputs";
import NumberInputs from "../components/forminputs/NumberInputs";
import SubmitButton from "../components/buttons/SubmitButton";
import RadioBtn from "../components/forminputs/RadioBtn";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({});

  useEffect(() => {
    Axios.get(`http://localhost:5000/student/read/${id}`)
      .then((res) => {
        // console.log(res.data);
        setStudent(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleInputUpdate = (event) => {
    const { name, value } = event.target;
    setStudent((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    Axios.put(`http://localhost:5000/student/update/${id}`, student)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
      navigate('/')
  };

  return (
    <Fragment>
      <div className="flex items-center justify-center h-screen bg-red-200">
        <div className="w-1/2 bg-blue-950 text-white p-8 rounded-xl border-black border-2 space-y-2">
          <div className="text-4xl font-semibold mb-4">Update Student</div>
          <TextInputs
            label="Full Name"
            name="name"
            type="text"
            value={student.name}
            onchange={handleInputUpdate}
          />
          <TextInputs
            label="E-mail Address"
            name="email"
            type="email"
            value={student.email}
            onchange={handleInputUpdate}
          />
          <NumberInputs
            label="Age"
            name="age"
            value={student.age}
            onchange={handleInputUpdate}
          />
          <TextInputs
            label="City"
            name="city"
            type="text"
            value={student.city}
            onchange={handleInputUpdate}
          />
          <RadioBtn
            label="Select Gender"
            valueOne="Male"
            valueTwo="Female"
            name="gender"
            value={student.gender}
            onchange={handleInputUpdate}
          />
          <div className="text-center pt-8">
            <SubmitButton
              color="yellow"
              text="Update Student"
              width="50%"
              onclick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Update;
