import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = ({ onDateClick }) => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (date) => {
        setDate(date);
        onDateClick(date);
    };

    return <Calendar onChange={handleDateChange} value={date} />;


};
export default CalendarComponent