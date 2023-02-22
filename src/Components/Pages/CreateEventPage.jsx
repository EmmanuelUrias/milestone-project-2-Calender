import { createClient } from '@supabase/supabase-js'
import GoBackBtn from '../GoBackBtn';

//require('dotenv').config()

const supabaseUrl = "https://keztfhsconadyzpjouyc.supabase.co/"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlenRmaHNjb25hZHl6cGpvdXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzNTE5NDUsImV4cCI6MTk5MTkyNzk0NX0.Klp0MeA68AP0nNonvKmn1wDh_RZL-HoMtexKYUSaEB8"

const supabase = createClient(supabaseUrl, supabaseKey)

function CreateEventPage() {
  async function handleSubmit(event) {
    event.preventDefault()

    //EXTRACT THE FORM DATA
    const formData = {
      title: document.getElementById('event-title').value,
      date: document.getElementById('choose-date').value,
      location: document.getElementById('location').value,
    }

    //MAKE THE API CALL
    const { data, error } = await supabase
      .from('events')
      .insert(formData)

    if (error) {
      alert('Failed to add event')
      console.error(error)
    } else {
      alert('Event added successfully!')
    }
  }

  return (
    <div className=' text-center  m-auto w-auto items-center  justify-between font-bold bg-red-400'>
      <GoBackBtn />
      <form onSubmit={handleSubmit} className= 'items-center justify-center rounded-md text-center t bg-gray-50 text-2xl'>
        <label htmlFor="event-title">Event Title: </label>
        <input id="event-title" type="text" />
        <label htmlFor="choose-date">Date: </label>
        <input id="choose-date" type="date" />
        <label htmlFor="location">Event Location: </label>
        <input id="location" type="text" />
        <input type="submit" value="Add Event" />
      </form>
    </div>
  )
}

export default CreateEventPage
