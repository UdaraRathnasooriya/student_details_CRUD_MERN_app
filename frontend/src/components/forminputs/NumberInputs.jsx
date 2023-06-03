import React, { Fragment } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const NumberInputs = ({ label, onchange, name, value }) => {
  return (
    <Fragment>
      <FormControl>
        <FormLabel fontSize="xl">{label}</FormLabel>
        <NumberInput value={value}>
          <NumberInputField onChange={onchange} name={name} />
        </NumberInput>
      </FormControl>
    </Fragment>
  );
};

export default NumberInputs;
