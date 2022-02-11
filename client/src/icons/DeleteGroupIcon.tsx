import React from "react";
import {IIconProps} from "./IIconProps";

export const DeleteGroupIcon = (props: IIconProps) => {
    return (

    <svg width={props.width}
         height={props.height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.75 6.75H7.875V13.5H6.75V6.75Z" fill={props.fill}/>
        <path d="M10.125 6.75H11.25V13.5H10.125V6.75Z" fill={props.fill}/>
        <path d="M2.25 3.375V4.5H3.375V15.75C3.375 16.0484 3.49353 16.3345 3.7045 16.5455C3.91548 16.7565 4.20163 16.875 4.5 16.875H13.5C13.7984 16.875 14.0845 16.7565 14.2955 16.5455C14.5065 16.3345 14.625 16.0484 14.625 15.75V4.5H15.75V3.375H2.25ZM4.5 15.75V4.5H13.5V15.75H4.5Z" fill={props.fill}/>
        <path d="M6.75 1.125H11.25V2.25H6.75V1.125Z" fill={props.fill}/>
    </svg>


);
};
