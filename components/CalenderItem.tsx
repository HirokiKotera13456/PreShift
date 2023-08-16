'use client'

import React from "react";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import ja from "date-fns/locale/ja";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import DatePicker from "react-datepicker";

const locales = {
  ja: require("date-fns/locale/ja"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "MTG",
    allDay: true,
    start: new Date(2021, 10, 18),
    end: new Date(2021, 10, 18),
  },
  {
    title: "長期休暇",
    allDay: true,
    start: new Date(2021, 10, 19),
    end: new Date(2021, 10, 25),
  },
  {
    title: "出張",
    allDay: true,
    start: new Date(2021, 10, 26),
    end: new Date(2021, 10, 30),
  },
];

function CalenderItem() {
  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}

export default CalenderItem;