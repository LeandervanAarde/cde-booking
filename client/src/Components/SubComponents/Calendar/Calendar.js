import React, { useState, useEffect, useRef } from 'react';
import { Col } from 'react-bootstrap';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const Calendar = (props) => {
    //Variables to get all days in the month, gets the starting day of the week and the end day of the week 
    const [calendar, setCalendar] = useState([]);
    const startDay = props.value.clone().startOf("month").startOf("week");
    const endDay = props.value.clone().endOf("month").endOf("week");

    useEffect(() => {
        const day = startDay.clone().subtract(1, "day");
  
        const Arr = []
        while (day.isBefore(endDay, "day")) {
            Arr.push(
                Array(7)
                    .fill(0)
                    .map(() => day.add(1, "day").clone())
            );
        }
        setCalendar(Arr);
    }, [props.value])

    //Function to check if the day is selected
    function currentDay(Day) {
        return props.value.isSame(Day, "day");
    }
    //Function to check dates before today
    function prevDay(Day) {
        return Day.isBefore(new Date(), "day")
    }
    //Ffunction to check if the selected day is the same day as today
    function isToday(Day) {
        return Day.isSame(new Date(), "day")
    }
    //Function to give classes to days so that they can get correct classes and can be appropriately styled
    function DayStyle(Day) {
        if (prevDay(Day)) return "before"
        if (currentDay(Day)) return "selected"
        if (isToday(Day)) return "today"
        return " "
    };
    //Function to set the current month in the header
    function currentMonth() {
        return props.value.format("MMMM");
    }

    //Sets the current year in header
    function currentYear() {
        return props.value.format("YYYY")
    }

    //Onclick function that will subtract a month and show the previous month
    function prevMonth() {
        return props.value.clone().subtract(1, "month")
    }
    //Onclick that will show the next month
    function nextMonth() {
        return props.value.clone().add(1, "month")
    }

    //Function that will check if month is the same as this month, this will not allow users to go back to months before this month
    function thisMonth() {
        return props.value.isSame(new Date(), "month")
    }

    return (
        <Col md={12} className='calendar' >
            <Col md={12} className="banner" value={props.value} onChange={props.onChange}>
                {/* Onlcik that checks if the user can go back one month */}
                <Col md={{ span: 2, offset: 1 }} className="previous" onClick={() => !thisMonth() && props.onChange(prevMonth())}><FaArrowLeft size={40} color={"white"} /></Col>
                <h4 className='month col-md-6'><strong>{currentMonth()} {currentYear()}</strong></h4>
                {/* Onlcik that checks if the user can go forward one month */}
                < Col md={2} className="next" onClick={() => props.onChange(nextMonth())}><FaArrowRight size={40} color={"white"} /></Col>
            </Col>
            <Col className='week'>
                {
                    ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => <div className='days'>{d}</div>)
                }
            </Col>
            {
                calendar.map(week => <div >
                    {
                        week.map(Day => <div className='day'  onClick={() => !prevDay(Day) && props.onChange(Day)}>
                            <div className={DayStyle(Day)} value={props.val} onClick={() => (props.function, props.function2)}>  <p>{Day.format("D")} </p></div>
                        </div>)
                    }
                </div>)
            }
        </Col>
    );


};

export default Calendar;