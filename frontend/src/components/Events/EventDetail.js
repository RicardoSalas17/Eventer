import React, { Component } from 'react'
// import Card from '../styled-components/Card'
import axios from 'axios'





class EventDetail extends Component {

    state = {}

    async componentDidMount() {
        const { id } = this.props.match.params
        const { data } = await axios.get(`http://localhost:3000/events/${id}`)
        this.setState({ event: { ...data } })
      }


  render() {
    const { event } = this.state
    if (!event) {
      return (
        <div className="App">
          <img
            src="https://thumbs.gfycat.com/SlimyElasticAnemonecrab-size_restricted.gif"
            alt="loading"
          />
        </div>
      )
    }
    return (


          <div className="evento-detalle-fondo">
      <div className="container">
        <div className="row">
          <div className="row detalle-evento-privado-div my-3 ">
            <div className="col-12 col-md-4">
            <img src={`${event.image}`} className="evento-privado-img py-auto" alt={`${event.eventName}`} />
            </div>
            <div className="col-12 col-md-6 text-white">
              <h2 className="text-center">
                {" "}
                <b>Nombre del evento {event.eventName} </b>{" "}
              </h2>
              <div className="py-3">
                <p>
                  <b>Fecha:</b>{event.dateTime}
                </p>
                <p>
                  <b>Horario:</b>{event.localTime}
                </p>
                <p>
                  <b>Descripción:</b>{event.description}
                </p>

                
                
              </div>
​
              <div className="text-center mt-2">
                <a className="event-button" href="/">
                  Comentar
                </a>
              </div>
            </div>
          </div>
        </div>
​
        <div className="text-center p-3 p-md-5">
          <h2 className="titulo-mis-eventos">Comentarios</h2>
        </div>
​
        <div className="row">
          <div className="col-2">
            <img
              src="https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg"
              alt="Foto de perfil"
              className="w-100"
            />
          </div>
          <div className="col-10">
            <p>
              <b>Nombre del autor del comentario</b>
            </p>
            <p>Comentario</p>
          </div>
        </div>
        <div className="row ml-5">
          <div className="col-2">
            <img
              src="https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg"
              alt="Foto de perfil"
              className="w-100"
            />
          </div>
          <div className="col-10">
            <p>
              <b>Nombre del autor del subcomentario comentario</b>
            </p>
            <p>Comentario</p>
          </div>
        </div>
      </div>
    </div>
        
    )
  }
}

export default EventDetail