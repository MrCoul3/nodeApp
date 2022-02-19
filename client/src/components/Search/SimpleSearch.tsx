import React, {FormEvent} from "react";

interface IProps {
    onFilterInput?(e: FormEvent): void;
}
export const SimpleSearch = (props: IProps) => {
  return (
    <div>
      <input onInput={props.onFilterInput} type="text" />
    </div>
  );
};
