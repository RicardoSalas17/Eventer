import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import Card from '../styled-components/Card'
import {
  Button
} from 'reactstrap';
import axios from 'axios'

const ENDPOINT = 'http://localhost:3000/events'

class EventsCard extends Component {
  state = {
    events: []
  }

  async componentDidMount() {
    const { data } = await axios.get(ENDPOINT)
    this.setState({ events: [...data.events] })

  }

  render() {
    const { events } = this.state
  return (
  
    <>
    <div className="row">
      {events.map(({ 
        eventName, 
        dateTime,
        localTime,
       description,
       owner,
       comments,
       image,
       _id }
       ) => (

   <div key={`${_id}`}  className="d-flex flex-row  w-100 eventos-div">
   <div  className="w-25">
   <img src={`${image}`} className="eventImage"alt={`${eventName}`} />
   </div>
   <div className="w-75 ">
   <h2 className="text-center p-2">{eventName}</h2>
   <h4 className="text-center"> Organizador: {owner.name} </h4>
   <p>Fecha:{dateTime}</p>
   <p>Hora:{localTime}</p>
   <p>Descripción:{description}</p>
   <div className="text-center">
   <Button > 
   <a href={`/events/${_id}`} type="button" >Detail</a>
  </Button>
  <Button > 
  <a href={`/editevents/${_id}`} type="button" >Edit event</a>
 </Button>
   </div>
  
   </div>
   </div>
        ))}
       </div>

    </>

       )};

       }
  export default EventsCard




