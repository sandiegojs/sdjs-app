export function getMonthString(date) {
    var d = new Date(date);
    var n = d.getMonth();

    var month;
    switch (n) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
        case 12:
            month = "January";

    }
    return month;
};

export function getMonthAbr(date) {
    var d = new Date(date);
    var n = d.getMonth();

    var month;
    switch (n) {
        case 0:
            month = "JAN";
            break;
        case 1:
            month = "FEB";
            break;
        case 2:
            month = "MAR";
            break;
        case 3:
            month = "APR";
            break;
        case 4:
            month = "MAY";
            break;
        case 5:
            month = "JUN";
            break;
        case 6:
            month = "JUL";
            break;
        case 7:
            month = "AUG";
            break;
        case 8:
            month = "SEP";
            break;
        case 9:
            month = "OCT";
            break;
        case 10:
            month = "NOV";
            break;
        case 11:
            month = "DEC";
            break;
        case 12:
            month = "JAN";

    }
    return month;
};

export function getDayOfTheWeek(date) {
    var d = new Date(date);
    var n = d.getDay() + 1;

    var day;
    switch (n) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
    }
    return day;
};

export function getDateString(date) {
    return date.slice(-2);
};

export function getYearString(date) {
    return date.substring(0, 4);
};

export function standardTime(time) {
    var hour = time.substring(0, 2);
    var min = time.slice(-2);
    var amOrPm = " AM";
    if (hour > 12) {
        hour -= 12;
        amOrPm = " PM";
    }

    var regTime = hour + ":" + min + amOrPm;
    return regTime;
};


