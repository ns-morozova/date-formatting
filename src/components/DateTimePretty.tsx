import React from 'react';
import moment from 'moment';

interface DateTimeProps {
    date: string;
}

function DateTime({ date }: DateTimeProps) {
    return <p className="date">{date}</p>;
}

function DateTimePretty(Component: React.ComponentType<DateTimeProps>) {
    return function (props: DateTimeProps) {
        const { date } = props;
        const currentTime = moment();
        const videoTime = moment(date);
        const diffMinutes = currentTime.diff(videoTime, 'minutes');
        const diffHours = currentTime.diff(videoTime, 'hours');
        const diffDays = currentTime.diff(videoTime, 'days');

        let displayDate = '';

        if (diffMinutes < 60) {
            displayDate = `${diffMinutes} минут назад`;
        } else if (diffHours < 24) {
            displayDate = `${diffHours} часов назад`;
        } else {
            displayDate = `${diffDays} дней назад`;
        }

        return <Component {...props} date={displayDate} />;
    };
}

const DateTimeWithPretty = DateTimePretty(DateTime);

export { DateTimeWithPretty };