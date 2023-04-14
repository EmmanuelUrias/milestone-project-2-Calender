import { useState, useEffect } from 'react'
import UpdateEvent from './UpdateEvent'
import { useParams } from 'react-router-dom'
import GoBackBtn from '../../GoBackBtn';
import UpdatePageFetchObject from '../../models/UpdatePageFetchObject';

function UpdatePage() {
  const [eventInfo, setEventInfo] = useState<UpdatePageFetchObject>({
    event_ID: 0,
    event_date: '',
    event_title: '',
    event_location: '',
    event_description: '',
    user_ID: 0
  })

  const { id } = useParams(); // grabs id from the url 

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://milestone-project-2-calender-backend-test-hd9u50k1b.vercel.app/events/${id}`);
      const eventData = await response.json();    
      setEventInfo(eventData);
    }

    fetchData();
  }, [id]);

  return (
    <div>
      <GoBackBtn />
      <UpdateEvent
        key={id}
        id={eventInfo.event_ID}
        date={eventInfo.event_date}
        title={eventInfo.event_title}
        location={eventInfo.event_location}
        description={eventInfo.event_description}
        user_id={eventInfo.user_ID}
      />
    </div>
  )
}

export default UpdatePage