import React, { useEffect } from 'react';
import i18n from 'i18next';
import moment from 'moment';
// @ts-ignore
import ReactInputDateMask from 'react-input-date-mask';
import { DateTimeInput } from './components/DateTimeInput/DateTimeInput';
import { LocalizationProvider, StaticDateRangePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { RangeInput } from '@mui/lab/DateRangePicker/RangeTypes';
import enLocale from 'date-fns/locale/en-US';
import ruLocale from 'date-fns/locale/ru';
import {FlexContainer} from 'react-flxcontainer';
import style from './style.module.css';

interface IDateTimeRangePickerProps {
  setDateValue(newValue: (Date | null)[]): void;
  value: Date[];
}

export const localeMap = {
  en: enLocale,
  ru: ruLocale,
};

export const DateTimeRangePicker = (props: IDateTimeRangePickerProps) => {
  const initialLocaleState = i18n.language.toString() as 'en' | 'ru';
  const [locale, setLocale] =
    React.useState<keyof typeof localeMap>(initialLocaleState);

  const currentDate = moment().toDate();

  useEffect(() => {
    setLocale(initialLocaleState);
  }, [i18n.language]);

  function transformDateToDate(dateValue: string, value: Date | null) {
    const date = dateValue + ' ' + moment(value).format('HH:mm');
    return moment(date.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1')).toDate();
  }
  function setDateRangeValue(newValue: (Date | null)[]) {
    if (newValue[1]) {
    }
    const result = newValue.map((value, index, array) => {
      if (index == 1 && value === null) {
        if (
          moment(array[0]?.getTime()).format('DD.MM.yyyy') ===
          moment(currentDate).format('DD.MM.yyyy')
        ) {
          return currentDate;
        } else {
          return transformDateToDate(
            moment(array[0]).format('DD.MM.yyyy'),
            moment(newValue[0]).endOf('day').toDate()
            // props.value[1],
          );
        }
      }

      if (index === 1 && value) {
        if (
          moment(array[1]?.getTime()).format('DD.MM.yyyy') ===
          moment(currentDate).format('DD.MM.yyyy')
        ) {
          return currentDate;
        } else {
          return transformDateToDate(
            moment(value).format('DD.MM.yyyy'),
            moment(newValue[1]).endOf('day').toDate()
            // props.value[1],
          );
        }
      } else {
        return transformDateToDate(
          moment(array[0]).format('DD.MM.yyyy'),
          props.value[0]
        );
      }
    });
    props.setDateValue(result);
  }

  return (
    <div>
      <LocalizationProvider
        dateAdapter={AdapterDateFns as any}
        locale={localeMap[locale]}
      >
        <div style={{ maxHeight: '350px' }}>
          <StaticDateRangePicker
            showDaysOutsideCurrentMonth
            className={style.StaticDateRangePicker}
            calendars={1}
            displayStaticWrapperAs={'desktop'}
            value={props.value as RangeInput<Date | null>}
            // value={props.value as any}
            onChange={(newValue: any) => {
              setDateRangeValue(newValue);
            }}
            renderInput={() => <></>}
          />
        </div>
        <div>
          <FlexContainer
            gap={'10px'}
            margin={'0 auto'}
            padding={'15px'}
            width={'290px'}
            fDirection={'row'}
          >
            {props.value.map((value, index) => (
              <DateTimeInput
                onChange={(value) => {
                  index === 0
                    ? props.setDateValue([value, props.value[1]])
                    : props.setDateValue([props.value[0], value]);
                }}
                value={value}
                key={index}
              />
            ))}
          </FlexContainer>
        </div>
      </LocalizationProvider>
    </div>
  );
};
