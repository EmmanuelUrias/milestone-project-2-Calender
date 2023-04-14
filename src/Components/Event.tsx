import React from 'react';
import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import EventPropsItem from './models/EventPropsItem';


function Event(props: EventPropsItem) { // we're going to pass some sort of props in the future

  const [showButton, setShowButton] = useState(true)

  // err message
  if (!props) {
    console.log('id:');
    return <div>Page Not Found</div>
  }

  console.log(props)

  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-lg shadow-md p-[150px] ">
        <header className="text-2xl font-bold mb-4">
          {props.title}
        </header>
        <main>
          <h2 className="text-lg font-bold mb-2">
            {props.location}
          </h2>
          <h3 className="text-lg my-4">
            {props.description}
          </h3>
          <p className="text-gray-600">
            {props.date}
          </p>
        </main>
      </div>
    </div>
  )
}
export default Event