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
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

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
          id: doc.id,
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
    if (newEvent.title && newEvent.start && newEvent.end) {
      addDoc(meetingCollectionRef, newEvent).catch((err) => {
        console.error("Error adding document: ", err);
      });
      setNewEvent({ title: "", start: null, end: null });
    } else {
      alert("Please fill in all the fields before adding a new event.");
    }
  }

  function handleRemoveEvent() {
    const eventToRemove = allEvents.find(
      (event) => event.title === newEvent.title
    );
    if (eventToRemove) {
      deleteDoc(doc(meetingCollectionRef, eventToRemove.id)).catch((err) => {
        console.error("Error removing document: ", err);
      });
      setNewEvent({ title: "", start: null, end: null });
    } else {
      alert("Please enter the title of an event to remove.");
    }
  }

  return (
    <div>
      <div className="Scheduler">
        <h1 style={{ fontSize: "34px", textAlign: "center", color: "#001f3f" }}>
          Calendar
        </h1>
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "15px 30px" }}
        />
        <div className="calendarFields">
          <input
            type="text"
            placeholder="Add Title"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
          <DatePicker
            popperPlacement="auto"
            placeholderText="Start Date"
            className="startDate"
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
          />
          <DatePicker
            popperPlacement="auto"
            placeholderText="End Date"
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
          />
          <button className="addEvent" onClick={handleAddEvent}>
            Add Event
          </button>
          <button className="removeEvent" onClick={handleRemoveEvent}>
            Remove Event
          </button>
        </div>
      </div>
    </div>
  );
}
export default CalScheduler;
