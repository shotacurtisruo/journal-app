import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import CalendarComponent from './calendar';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [entries, setEntries] = useState({});

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleSaveEntry = (date, entry) => {
    setEntries({ ...entries, [date.toDateString()]: entry });
  };
  return (
    <div className='journal-app'>
      <h1>My Journal App</h1>
      <CalendarComponent onDateClick={handleDateClick} />



    </div>
       
  );
}

export default App;
