import React, { Fragment, useEffect, useState } from "react";
import TextIcon from "../components/buttons/TextIcon";
import TableDisplay from "../components/tables/TableDisplay";
import { AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Axios from "axios";

const Home = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/student/read")
      .then((res) => {
        setStudent(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <div className=" bg-red-100 flex justify-center items-center h-screen">
        <div className="border-2 rounded-lg overflow-x-auto  border-blue-950 bg-yellow-100 p-4">
          <div className="flex items-center  justify-between">
            <div className="font-bold text-[48px] ">Student List</div>
            <div>
              <Link to="/create">
                <TextIcon color="yellow" icon={<AddIcon />} text={'Add Student'} />
              </Link>
            </div>
          </div>
          <div className="overflow-y-auto">
            <TableDisplay student={student} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
