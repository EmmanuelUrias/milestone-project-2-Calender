import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import React from 'react';
import CalenderFetchObjectItem from './models/CalenderFetchObjectItem';

function Calender() {
  const navigate = useNavigate()

  const [eventInfo, setEventInfo] = useState([])


  useEffect(() => {
    async function fetchData(): Promise<void> {
      const response = await fetch(`https://milestone-project-2-calender-backend-test-hd9u50k1b.vercel.app/api/events`);
      const eventData = await response.json();
      const newArr = eventData.map((evt: { event_ID: number; event_title: string; event_location: string; event_date: string; }) => {
        const { event_ID: id, event_title: title, event_location: location, event_date: date } = evt;
        return { id, title, location, date }
      })
      setEventInfo(newArr);

    }

    fetchData();
  }, []);

  const eventContent = (eventInfo: {event: CalenderFetchObjectItem}) => {
    return eventInfo.event.title
    
  }


  const eventParam = (event: { id: number; }) => {
    return event.id;
  }

  // creates path for each item in the calender
  const handleNavigateClick = (eventClickInfo: { event: any; }) => {
    const event = eventClickInfo.event;
    const eventId = eventParam(event);
    navigate(`/event/${eventId}`);
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={eventInfo}
      eventContent={eventContent}
      selectable={true}
      eventClick={handleNavigateClick}
      eventColor={'red'}
    />

  )
}

export default Calender