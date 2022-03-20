import React from "react";

interface IProps {
  children?: string | React.ReactNode;
  gap?: string;
  padding?:string;
  width?: string;
  height?: string;
  jContent?: 'center' | 'flex-end' | 'flex-start' | 'space-between';
  alignItems?: 'center' | 'flex-end' | 'flex-start';
  fDirection?:'column' | 'row';
  onClick?(): void;
}
export const FlexContainer = (props: IProps) => {
  const styles = {
    padding: props.padding,
    width: props.width,
    height: props.height,
    display: "flex",
    gap: props.gap,
    justifyContent: props.jContent,
    alignItems: props.alignItems,
    flexDirection: props.fDirection,
  };

  return (
    <div onClick={props.onClick} style={{ ...styles}}>
      {props.children}
    </div>
  );
};
