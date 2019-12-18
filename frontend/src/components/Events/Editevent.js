import React, { Component } from "react";
import { Form, Input, Button } from 'antd'
import { MyContext } from '../../context'
import MY_SERVICE from '../../services/index';
import Swal from 'sweetalert2'
// import ProjectsService from "../../services/ProjectsService";

// const projectsService = new ProjectsService();

export default class Editevent extends Component {
  state = {

      formEvent: {
        eventName: '',
        dateTime: '',
        localTime: '',
        description: ''},
        file: {},
        id:`${this.props.location.pathname}`
        
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

  // addEvent = async e => {
  //   e.preventDefault();
  //   const { eventName, dateTime, localTime, description, image } = this.state;
  //   const event = await this.context.handlecreateEvent({ eventName, dateTime, localTime, description, image });
  //   alert("evento creado");
  //   this.setState({
  //       eventName: '',
  //       dateTime: '',
  //       localTime: '',
  //       description: '',
  //       image:''
  //   });
  // };
  editEvent = async e => {
    e.preventDefault();
    const { formEvent } = this.state;
    const formData = new FormData()

    for(let key in this.state.formEvent){
      formData.append(key, this.state.formEvent[key])
    }
    formData.append('image', this.state.file)
    

    const event = await MY_SERVICE.updateEvent(`${this.props.location.pathname}`,formData)

    console.log(event);
    Swal.fire( 'Event created', 'success')
    this.setState({ 
      formEvent: {
        eventName: '',
        dateTime: '',
        localTime: '',
        description: '',
        image:'',
      }
    })
    this.props.history.push('/events')
 
  };

  render() {
    return (
        <MyContext.Consumer>
        {context => (
      <>
        <h1>App Event</h1>
        <Form
            className="container"
            onSubmit={e => {
              this.editEvent(e)
              this.props.history.push('/events')
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