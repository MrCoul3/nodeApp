import React, { ChangeEvent, useEffect, useState } from "react";
import moment from "moment/moment";
interface IProps {
  resultValue: Date;
  setComponentValue(e: ChangeEvent<HTMLInputElement>): void;
}

export const InputComponent = (props: IProps) => {
  function transformToRequiredFormat() {
    return moment(props.resultValue).format("YYYY-MM-DDThh:mm");
  }

  return (
    <input
      onChange={props.setComponentValue}
      value={transformToRequiredFormat()}
      type="datetime-local"
    />
  );
};
