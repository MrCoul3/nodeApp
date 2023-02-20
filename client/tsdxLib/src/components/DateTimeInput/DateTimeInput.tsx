import moment from "moment";
import classNames from "classnames";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import React, { FormEvent, forwardRef, useRef } from "react";
// @ts-ignore
import ReactInputDateMask from "react-input-date-mask";
import { useTranslation } from "react-i18next";
import TimeInputScroller from "../TimeInputScroller/TimeInputScroller";
import {Popover} from "@mui/material";
import style from './style.module.css'

interface IDateTimeInputProps {
    value: Date;
    onChange(value: Date): void;
}

export const DateTimeInput = forwardRef((props: IDateTimeInputProps) => {
    const timeFromInputRef = useRef(null);
    const { t } = useTranslation();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    function getDateFromTimeScroller(datetime: Date, value: Date) {
        const time = moment(datetime).format("HH:mm");
        const result = (
            moment(value).format("DD.MM.yyyy").toString() +
            " " +
            time
        ).replace(/(\d+).(\d+).(\d+)/, "$3/$2/$1");
        return moment(result).toDate();
    }

    function transformTimeToDate(
        e: FormEvent<HTMLInputElement>,
        value: Date | null,
    ) {
        const date =
            moment(value).format("DD.MM.yyyy").toString() +
            " " +
            (e.target as HTMLInputElement).value;
        return moment(date.replace(/(\d+).(\d+).(\d+)/, "$3/$2/$1")).toDate();
    }

    function transformDateToDate(dateValue: string, value: Date | null) {
        const date = dateValue + " " + moment(value).format("HH:mm").toString();
        return moment(date.replace(/(\d+).(\d+).(\d+)/, "$3/$2/$1")).toDate();
    }

    return (
        <>
            <div
                className={style.dateTimeInputWrap}
                onKeyDown={
                    (e) =>
                        (e.key === "Enter" || e.code === "Space") &&
                        (e.target as HTMLInputElement).classList.contains(
                            "ReactInputDateMaskFrom",
                        )
                            ? (
                                  timeFromInputRef.current as HTMLInputElement | null
                              )?.focus()
                            : null
                    /*if (
                        (e.key === "Enter" || e.code === 'Space') &&
                        (e.target as HTMLInputElement).classList.contains(
                            "ReactInputDateMaskFrom",
                        )
                    ) {
                        (timeFromInputRef.current as HTMLInputElement | null)?.focus();
                    }*/
                }
            >
                <input
                    // disabled
                    value={moment(props.value).format("YYYY-MM-DD")}
                    // required
                    className={classNames(
                        style.dateInput,
                        "ReactInputDateMaskFrom",
                    )}
                    onChange={(e) => {
                        const result = transformDateToDate(
                            moment(e.target.value).format("DD.MM.yyyy"),
                            props.value,
                        );
                        props.onChange(result);
                    }}
                    // onClick={(e) => {}}
                    onKeyDown={(e) => {
                        if (e.code === "Space") {
                            e.preventDefault();
                        }
                        if (e.code === "Tab") {
                            e.preventDefault();
                            (
                                timeFromInputRef.current as unknown as HTMLInputElement
                            ).focus();
                        }
                    }}
                    type="date"
                />

                <input
                    ref={timeFromInputRef}
                    onInput={(e) => {
                        const result = transformTimeToDate(e, props.value);
                        props.onChange(result);
                    }}
                    value={moment(props.value).format("HH:mm").toString()}
                    className={classNames(style.timeInput, "from")}
                    required
                    type="time"
                />
                <div
                    style={{ position: "relative", right: "37px" }}
                    title={t("titleSelectATime")}
                    onClick={handleClick}
                >
                    <AccessTimeIcon color={"primary"} className={style.icon} />
                </div>
            </div>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <div className={style.timeInputScroller}>
                    {anchorEl !== null ? (
                        <TimeInputScroller
                            datetime={moment(props.value)}
                            onChange={(datetime: Date) => {
                                const result = getDateFromTimeScroller(
                                    datetime,
                                    props.value,
                                );
                                props.onChange(result);
                            }}
                        />
                    ) : null}
                </div>
            </Popover>
        </>
    );
});
