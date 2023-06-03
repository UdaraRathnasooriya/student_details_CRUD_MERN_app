import React, { Fragment } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const TextInputs = ({label,onchange,type,name,value}) => {
  return (
    <Fragment>
      <FormControl>
        <FormLabel fontSize="xl">{label}</FormLabel>
        <Input type={type} onChange={onchange} name={name} value={value} />
      </FormControl>
    </Fragment>
  );
};

export default TextInputs;
