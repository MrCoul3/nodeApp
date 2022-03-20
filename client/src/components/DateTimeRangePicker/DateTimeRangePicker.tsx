import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import { FlexContainer } from "../FlexContainer";
import { DateTimePicker } from "@mui/lab";
import { TextField } from "@mui/material";
import React, {useEffect} from "react";
import enLocale from "date-fns/locale/en-US";
import ruLocale from "date-fns/locale/ru";
import {DateRange} from "@mui/lab/DateRangePicker/RangeTypes";

//"@material-ui/pickers": "^3.3.10",
//     "@mui/lab": "^5.0.0-alpha.73",
//    "date-fns": "^2.28.0",
const localeMap = {
    en: enLocale,
    ru: ruLocale,
};
export const DateTimeRangePicker = () => {
    const [locale, setLocale] = React.useState<keyof typeof localeMap>("ru");
    const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
    const [timeValue, setTimeValue] = React.useState<Date | null>(new Date());

    useEffect(() => {
        console.log("value", value);
    }, [value]);
  return (
    <>
      <LocalizationProvider
        dateAdapter={AdapterDateFns as any}
        locale={localeMap[locale]}
      >
        <StaticDateRangePicker
          calendars={1}
          displayStaticWrapperAs={"desktop"}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => <></>}
        />
        <FlexContainer width={"300px"} fDirection={"column"}>
          <DateTimePicker
            renderInput={(props) => <TextField color={"primary"} {...props} />}
            value={timeValue}
            onChange={(newValue) => {
              setTimeValue(newValue as any);
            }}
          />
          <DateTimePicker
            renderInput={(props) => <TextField color={"primary"} {...props} />}
            value={timeValue}
            onChange={(newValue) => {
              setTimeValue(newValue as any);
            }}
          />
        </FlexContainer>
      </LocalizationProvider>
    </>
  );
};
