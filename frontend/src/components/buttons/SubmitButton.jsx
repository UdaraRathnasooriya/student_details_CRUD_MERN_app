import React, { Fragment } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const SubmitButton = ({color,text,onclick,width}) => {
  return (
    <Fragment>
      <Button colorScheme={color} onClick={onclick} width={width}>{text}</Button>
    </Fragment>
  );
};

export default SubmitButton;
