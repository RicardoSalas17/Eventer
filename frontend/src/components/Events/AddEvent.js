import React, { Component } from "react";
import { Form, Input, Button } from 'antd'
import { MyContext } from '../../context'
import MY_SERVICE from '../../services/index';
import Swal from 'sweetalert2'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import mapboxgl from 'mapbox-gl' //npm i mapbox-gl o yarn add mapbox-gl
// import ProjectsService from "../../services/ProjectsService";

// const projectsService = new ProjectsService();
mapboxgl.accessToken =
'pk.eyJ1IjoiZGl1cml2aiIsImEiOiJjanAxdjA2cTQwMGp1M2tvYzZmZGp3bWc3In0.4cZEyLkU2ikqx_wb4A1z8A'

export default class AddEvent extends Component {
  state = {

      formEvent: {
        eventName: '',
        dateTime: '',
        localTime: '',
        description: '',
      
        lng: 5,
    lat: 34,
    zoom: 1.5},
        file: {},
  };

 
  handleFile = e => {
    this.setState({ file: e.target.files[0] })
  }

  inputChange = ({ target: {value, name} }) =>{
    this.setState({
      ...this.state,
      formEvent:{
        ...this.state.formEvent,
        [name]:value
      }
    });
  };


  addEvent = async e => {
    e.preventDefault();
    const { formEvent } = this.state;
    const formData = new FormData()

    for(let key in this.state.formEvent){
      formData.append(key, this.state.formEvent[key])
    }
    formData.append('image', this.state.file)

    const event = await MY_SERVICE.createEvent(formData)

    Swal.fire( 'Event created', 'success')
    this.setState({ 
      formEvent: {
        eventName: '',
        dateTime: '',
        localTime: '',
        description: '',
        image:''
      }
    })
    this.props.history.push('/events')
  };

  componentDidMount() {
    const { lng, lat, zoom } = this.state.formEvent
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken
    })
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    })

    map.on('move', () => {
      const { lng, lat } = map.getCenter()

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      })
    })
    
    map.addControl(geocoder)
    geocoder.on('result', (e) => console.log(e))
  }
  render() {
    return (
        <MyContext.Consumer>
        {context => (
      <>
        <h1>App Event</h1>
        <Form
            className="container"
            onSubmit={e => {
              this.addEvent(e)
              this.props.history.push('/events')
              // Redirect('/events')
              // context.handleEvents()
            }}
            >
            
            <Form.Item>
            <Input
            name="eventName"
            type="text"
            placeholder="eventName"
          value={this.state.formEvent.eventName}
          onChange={this.inputChange}
        />
      </Form.Item>
          <Form.Item>
            <Input
              name="dateTime"
              // placeholder="000"
              type="date"
              value={this.state.formEvent.dateTime}
              onChange={this.inputChange}
            />
          </Form.Item>

          <Form.Item>
            <Input
              name="localTime"
              type="time"
              placeholder="Time"
              value={this.state.formEvent.localTime}
              onChange={this.inputChange}
            />
          </Form.Item>

          <Form.Item>
            <Input
              name="description"
              type="text"
              placeholder="Description"
              value={this.state.formEvent.description}
              onChange={this.inputChange}
            />
          </Form.Item>

          <Form.Item>
            <Input
              name="image"
              type="file"
              placeholder="Image"
              // value={this.state.formEvent.image}
              onChange={this.handleFile}/>
          </Form.Item>
          <div style={{ width: '400px', height: '300px' }} ref={e => (this.mapContainer = e)}/>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      </>
    )}
    </MyContext.Consumer>
        )
        }
    }