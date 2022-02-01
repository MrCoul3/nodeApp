import React from "react";
import { useStore } from "../../hooks/useStore";
interface IProps {
  inputData: any;
}
export const ObjectElement = (props: IProps) => {
  const store = useStore();
  function onHandleClick(e: React.MouseEvent) {
    e.stopPropagation();
    store.groupAppStore.setSelectedElementData(props.inputData);
  }
  return <div onClick={onHandleClick}>{props.inputData}</div>;
};
