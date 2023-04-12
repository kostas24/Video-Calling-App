import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
//dummy test data
// April = month 3. month 0 = january
const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2023, 3, 14),
    end: new Date(2023, 3, 14),
  },
  {
    title: "Days Off",
    start: new Date(2023, 3, 9),
    end: new Date(2023, 3, 11),
  },
  {
    title: "Headstarter Conference",
    start: new Date(2023, 3, 20),
    end: new Date(2023, 3, 23),
  },
];

function CalScheduler() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div>
      <div className="Scheduler">
        <h1>Calendar</h1>
        <h2>Add New Event</h2>
        <div>
          <input
            type="text"
            placeholder="Add Title"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
          <DatePicker
            placeholderText="Start Date"
            className="startDate"
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
          />
          <DatePicker
            placeholderText="End Date"
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
          />
          <button className="addEvent" onClick={handleAddEvent}>
            Add Event
          </button>
        </div>
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "60px 30px" }}
        />
      </div>
    </div>
  );
}

export default CalScheduler;
