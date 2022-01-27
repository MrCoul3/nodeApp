import { observer } from "mobx-react";
import React from "react";
import { Button } from "@mui/material";

interface IProps {
  value: string;
  data: any;
}

const styles = {
  borderRadius: "30px",
  border: "2px solid #006660",
  width: "100px",
  height: "35px",
};

export const LoginButton = observer((props: IProps) => {
  const data = props.data
  function onHandleClick() {
    console.log(data)
  }
  return <Button onClick={onHandleClick} sx={{ ...styles }}>{props.value}</Button>;
});
