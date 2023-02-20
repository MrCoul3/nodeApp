import * as React from 'react';

interface IProps {
    children?: string | React.ReactNode;
    gap?: string;
    padding?:string;
    width?: string;
    height?: string;
    jContent?: 'center' | 'flex-end' | 'flex-start' | 'space-between';
    alignItems?: 'center' | 'flex-end' | 'flex-start';
    fDirection?:'column' | 'row';
    background?:string;
    margin?:string;
    flexWrap?:"wrap" | "nowrap";
    overflow?:string;
    position?:string;
    zIndex?:number;
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
        background: props.background,
        margin: props.margin,
        flexWrap: props.flexWrap,
        overflow: props.overflow,
        zIndex: props.zIndex
    };

    return (
        <div onClick={props.onClick} style={{ ...styles}}>
            {props.children}
        </div>
    );
};
