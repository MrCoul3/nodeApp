import React from "react";
import { IIconProps } from "./IIconProps";

export const InfoButtonIcon = (props: IIconProps) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 33.75C26.6985 33.75 33.75 26.6985 33.75 18C33.75 9.30152 26.6985 2.25 18 2.25C9.30152 2.25 2.25 9.30152 2.25 18C2.25 26.6985 9.30152 33.75 18 33.75Z"
        fill="#2196F3"
      />
      <path d="M16.5 16.5H19.5V24.75H16.5V16.5Z" fill="white" />
      <path
        d="M18 14.25C19.0355 14.25 19.875 13.4105 19.875 12.375C19.875 11.3395 19.0355 10.5 18 10.5C16.9645 10.5 16.125 11.3395 16.125 12.375C16.125 13.4105 16.9645 14.25 18 14.25Z"
        fill="white"
      />
    </svg>
  );
};
