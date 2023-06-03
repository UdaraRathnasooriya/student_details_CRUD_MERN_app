import React, { Fragment } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";

const ButtonIcon = ({color,icon,onclick}) => {
  return (
    <Fragment>
      <IconButton
        colorScheme={color}
        icon={icon}
        onClick={onclick}
      />
    </Fragment>
  );
};

export default ButtonIcon;
