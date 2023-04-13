import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { db } from "./firebase";
import { getDocs, collection, addDoc, onSnapshot } from "firebase/firestore";

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

function CalScheduler() {
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: null,
    end: null,
  });
  const [allEvents, setAllEvents] = useState([]);
  const meetingCollectionRef = collection(db, "meetings");

  useEffect(() => {
    const unsubscribe = onSnapshot(meetingCollectionRef, (querySnapshot) => {
      const events = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        console.log(data.end.toDate());
        return {
          title: data.title,
          start: data.start.toDate(),
          end: data.end.toDate(),
        };
      });
      setAllEvents(events);
    });
    return unsubscribe;
  }, []);

  function handleAddEvent() {
    addDoc(meetingCollectionRef, newEvent).catch((err) => {
      console.error("Error adding document: ", err);
    });
    setNewEvent({ title: "", start: null, end: null });
  }

  return (
    <div>
      <div className="Scheduler">
        <h1>Calendar</h1>
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
