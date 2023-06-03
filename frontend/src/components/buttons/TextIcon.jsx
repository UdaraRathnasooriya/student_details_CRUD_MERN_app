import React, { Fragment } from "react";
import { Button} from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'



const TextIcon = ({color,icon,text}) => {
  return (
    <Fragment>
      <div>
        <Button colorScheme={color} leftIcon={icon}>{text}</Button>
      </div>
    </Fragment>
  );
};

export default TextIcon;
