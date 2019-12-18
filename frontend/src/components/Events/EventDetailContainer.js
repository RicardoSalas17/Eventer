import React, { Component } from 'react'
// import Card from '../styled-components/Card'
import axios from 'axios'





class EventDetailContainer extends Component {

    state = {}

    async componentDidMount() {
        const { id } = this.props.match.params
        const { data } = await axios.get(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=3c27oyAcQSIQNGPt7bzLXHgBy8ZIahhV`)
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
      <div className="App">
        <div>
          <div>
            <img src={event.images[0].url} alt={event.name} width="100px" />
          </div>
          <div label={event.name}></div>
        </div>
        <input {...this.props} />
      </div>
    )
  }
}

export default EventDetailContainer