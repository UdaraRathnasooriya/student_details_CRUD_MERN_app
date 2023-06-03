import React, { Fragment, useEffect, useState } from "react";
import SubmitButton from "../components/buttons/SubmitButton";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";

const Read = () => {
  const { id } = useParams();
  //   console.log(id);

  const [student, setStudent] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:5000/student/read/${id}`)
      .then((res) => {
        setStudent(res.data);
        // console.log(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <div className="flex justify-center items-center h-screen bg-orange-100">
        <div className="w-[50%] bg-blue-950 border-2 rounded-xl text-white p-4">
          <div className="text-4xl font-semibold mb-4 text-center">
            Student Details{" "}
          </div>
          <div className="text-lg font-medium mb-4">Name : {student.name} </div>
          <div className="text-lg font-medium mb-4">
            E-Mail : {student.email}
          </div>
          <div className="text-lg font-medium mb-4">Age : {student.age}</div>
          <div className="text-lg font-medium mb-4">City : {student.city}</div>
          <div className="text-lg font-medium mb-4">
            Gender : {student.gender}
          </div>
          <div className="text-center space-x-4">
            <Link to="/">
              <SubmitButton color="yellow" text="Back" width="30%" />
            </Link>
            <Link to={`/update/${student._id}`}>
              <SubmitButton color="blue" text="Edit" width="30%" />
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Read;
