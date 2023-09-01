import * as React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import {Container} from './styledComponents.js';

export default function BasicDateCalendar() {
    const [date, setDate] = useState(new Date());
    const navigate = useNavigate();

    const redirect = (value) => {
        navigate(`/task/`, {state: {year: value.getFullYear(), month: value.getMonth()+1, day: value.getDate()}});
    }
  return (
    <Container>
        <div className='calendar-container'>
            <Calendar onChange={setDate} value={date} calendarType='US' onClickDay={(value) => redirect(value)}/>
        </div>
    </Container>
  );
}

