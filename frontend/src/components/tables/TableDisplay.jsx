import React, { Fragment } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  HStack,
} from "@chakra-ui/react";
import ButtonIcon from "../buttons/ButtonIcon";
import { ViewIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const TableDisplay = ({ student }) => {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    Axios.delete(`http://localhost:5000/student/delete/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    location.reload();
  };
  return (
    <Fragment>
      <div>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>Display Student Details</TableCaption>
            <Thead>
              <Tr>
                <Th>Student Name</Th>
                <Th>Student e-mail</Th>
                <Th>Student Age</Th>
                <Th>Student City</Th>
                <Th>Student Gender</Th>
              </Tr>
            </Thead>
            <Tbody>
              {student.map((item) => {
                return (
                  <Tr key={item._id}>
                    <Td>{item.name}</Td>
                    <Td>{item.email}</Td>
                    <Td>{item.age}</Td>
                    <Td>{item.city}</Td>
                    <Td>{item.gender}</Td>
                    <Td>
                      <HStack spacing="8px">
                        <Link to={`/read/${item._id}`}>
                          <ButtonIcon color="blue" icon={<ViewIcon />} />
                        </Link>
                        <Link to={`/update/${item._id}`}>
                          <ButtonIcon color="teal" icon={<EditIcon />} />
                        </Link>

                        <ButtonIcon
                          color="red"
                          icon={<DeleteIcon />}
                          onclick={() => {
                            return handleDelete(item._id);
                          }}
                        />
                      </HStack>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </Fragment>
  );
};

export default TableDisplay;
