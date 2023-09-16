import dayjs from "dayjs";

export default {
    nowTime(){
        return dayjs().format("YYYY-MM-DD HH:mm:ss");
    },
    getYearMonthDay(){
        return dayjs().format("YYYY-MM-DD");
    },
    getMonthDayHourMinute(){
        return dayjs().format("MM-DD HH:mm");
    },
    getHourMinute(){
        return dayjs().format("HH:mm");
    },
    getFullDateTime() {
        return dayjs().format('YYYY-MM-DD HH:mm:ss');
    }
}