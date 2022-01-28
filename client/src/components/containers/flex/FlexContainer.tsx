import React from "react";

interface IProps {
  children?: string | React.ReactNode;
  gap?: string;
  width?: string;
  jContent?: 'center' | 'flex-end' | 'flex-start';
  alignItems?: 'center' | 'flex-end' | 'flex-start';
  onClick?(): void;
}
export const FlexContainer = (props: IProps) => {
  const styles = {
    width: props.width,
    display: "flex",
    gap: props.gap,
    justifyContent: props.jContent,
    alignItems: props.alignItems,
  };

  return (
    <div onClick={props.onClick} style={{ ...styles }}>
      {props.children}
    </div>
  );
};
