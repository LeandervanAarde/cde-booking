import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Col } from 'react-bootstrap';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Calendar = () => {
    const [calendar, setCalendar] = useState([]);
    const [value, onchange] = useState(moment());
    const startDay = value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month").endOf("week");

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

    }, [value])

    function currentDay(Day) {
        return value.isSame(Day, "day");
    }

    function prevDay(Day) {
        return Day.isBefore(new Date(), "day")
    }

    function isToday(Day) {
        return Day.isSame(new Date(), "day")
    }



    function DayStyle(Day) {
        if (prevDay(Day)) return "before"
        if (currentDay(Day)) return "selected"
        if (isToday(Day)) return "today"

        return " "
    };

    function currentMonth() {
        return value.format("MMMM");
    }
    function currentYear() {
        return value.format("YYYY")
    }

    function prevMonth(){
        return value.clone().subtract(1, "month")
    }

    function nextMonth(){
        return value.clone().add(1, "month")
    }
    function thisMonth(){
        return value.isSame(new Date(), "month")
    }


    return (
        <Col md={12} className='calendar' >
            <Col md={12} className="banner" value={value} onchange={onchange}>
                <Col md={{span:2, offset:1}} className="previous" onClick={() =>!thisMonth() && onchange(prevMonth())}><FaArrowLeft  size={40} color={"white"}/></Col>
                <h2 className='month col-md-6'>{currentMonth()} {currentYear()}</h2>
                < Col md={2} className="next" onClick={() => onchange(nextMonth())}><FaArrowRight size={40} color={"white"}/></Col>
            </Col>
            <Col className='week'>
                {
                 [  "SUN", "MON","TUE", "WED", "THU", "FRI", "SAT"].map((d) => <div className='days'>{d}</div>)
                }
            </Col>
            {
                calendar.map(week => <div >
                    {
                        week.map(Day => <div className='day' onClick={() => !prevDay(Day) && onchange(Day)}>
                            <div className={DayStyle(Day)}> <p>{Day.format("D")} </p></div>
                        </div>)
                    }
                </div>)
            }
        </Col>
    );
};

export default Calendar;