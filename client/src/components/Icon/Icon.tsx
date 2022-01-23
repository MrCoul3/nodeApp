import React from "react";

export const Icon = (props: {icon: string}) => {
    return (
        <div>
            <img src={props.icon} alt=""/>
        </div>
    );
};