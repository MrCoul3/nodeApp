import { useEffect, useState } from "react";
import moment from "moment/moment";
// npm i --save moment

// напоминалка по созданию Date объектов с помощью библиотеки moment
// конструкции создают объекты Date от текущей даты для начала и конца дня (от 00:00:00 до 23:59:59)

type IDateType = Date | null;
export const Dates = () => {
  const [date, setDate] = useState<Date | null>();

  useEffect(() => {
    const momentTodayStart: IDateType = moment().startOf("day").toDate();
    const momentTodayEnd: IDateType = moment().endOf("day").toDate();
    const momentYesterdayStart: IDateType = moment().subtract(1, "day").startOf("day").toDate();
    const momentYesterdayEnd: IDateType = moment().subtract(1, "day").endOf("day").toDate();
    const momentWeekStart: IDateType = moment().subtract(1, "week").startOf("day").toDate();
    const momentWeekEnd: IDateType = moment().subtract(1, "week").endOf("day").toDate();
    const momentMonthStart: IDateType = moment().subtract(1, "months").startOf("day").toDate();
    const momentMonthEnd: IDateType = moment().subtract(1, "months").endOf("day").toDate();
    console.log('momentTodayStart', momentTodayStart);
    console.log('momentYesterdayStart', momentYesterdayStart);
    console.log('momentYesterdayEnd' , momentYesterdayEnd);
    console.log('momentMonthStart' , momentMonthStart);
    console.log('momentMonthEnd' , momentMonthEnd);
    console.log('momentWeekStart' , momentWeekStart);
    console.log('momentWeekEnd' , momentWeekEnd);

    setDate(momentYesterdayEnd);
  }, []);

  return <div></div>;
};
