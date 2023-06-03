import React, { Fragment } from "react";
import {
  Radio,
  RadioGroup,
  Stack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const RadioBtn = ({ label, valueOne, valueTwo, onchange, name, value }) => {
  return (
    <Fragment>
      <FormControl>
        <FormLabel fontSize="xl">{label}</FormLabel>
        <RadioGroup value={value}  >
          <Stack spacing={10} direction="row">
            <Radio
              value={valueOne}
              colorScheme="green"
              name={name}
              onChange={onchange}
            >
              {valueOne}
            </Radio>
            <Radio
              value={valueTwo}
              colorScheme="green"
              name={name}
              onChange={onchange}
            >
              {valueTwo}
            </Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
    </Fragment>
  );
};

export default RadioBtn;
