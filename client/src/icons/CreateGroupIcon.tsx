import React from "react";
import {IIconProps} from "./IIconProps";

export const CreateGroupIcon = (props: IIconProps) => {
    return (

    <svg width={props.width}
         height={props.height} viewBox="0 0 25 25"  xmlns="http://www.w3.org/2000/svg">
        <path d="M21.875 14.5833V19.7917C21.875 20.3442 21.6555 20.8741 21.2648 21.2648C20.8741 21.6555 20.3442 21.875 19.7917 21.875H5.20833C4.6558 21.875 4.12589 21.6555 3.73519 21.2648C3.34449 20.8741 3.125 20.3442 3.125 19.7917V5.20833C3.125 4.6558 3.34449 4.12589 3.73519 3.73519C4.12589 3.34449 4.6558 3.125 5.20833 3.125H10.4167V5.20833H5.20833V19.7917H19.7917V14.5833H21.875Z" fill={props.fill}/>
        <path d="M21.8749 7.29167H17.7083V3.125H15.6249V7.29167H11.4583V9.375H15.6249V13.5417H17.7083V9.375H21.8749V7.29167Z" fill={props.fill}/>
    </svg>

);
};
