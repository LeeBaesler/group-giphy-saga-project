import React, {useState } from 'react';
import Calendar from 'react-calendar';
import { render } from 'react-dom';
import 'react-calendar/dist/Calendar.css';


const ReactCalendar = () => {

    //new Date allows current date to be shown
    // captures date and time
    const [date, setDate] = useState( new Date ())

    const onChange = date => {
        setDate(date)
    }
    return (
     <div>

            {/* Calendar is rendered. able to change change date of calendar
            need to now figure how to connec to DB and render data when 
            specific date is chosen */}
        <Calendar onChange={onChange} value={date} />
        {console.log(date)}
        {date.toDateString}
        </div>
    )
}

export default ReactCalendar