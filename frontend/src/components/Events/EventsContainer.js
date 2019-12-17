import React from 'react'
import { Form, Input, Button } from 'antd'
import { MyContext } from '../../context'
import EventCard from "./EventCards";

export default function upContainer(props) {

    return (
        
        <MyContext.Consumer>
        
        {context => (
            
            <Form
            onSubmit={e => {
                context.handlecreateEvent(e)
                props.history.push('/events')
                // console.log(context.events[0])
            }}
            >
            
            <Form.Item>
            <Input
            name="eventName"
            type="text"
            placeholder="eventName"
          value={context.formEvent.eventName}
          onChange={e => context.handleInput(e, 'formEvent')}
        />
      </Form.Item>
          <Form.Item>
            <Input
              name="dateTime"
              placeholder="000"
              type="date"
              value={context.handlecreateEvent.dateTime}
              onChange={e => context.handleInput(e, 'formEvent')}
            />
          </Form.Item>

          <Form.Item>
            <Input
              name="localTime"
              type="time"
              placeholder="Time"
              value={context.formEvent.localTime}
              onChange={e => context.handleInput(e, 'formEvent')}
            />
          </Form.Item>

          <Form.Item>
            <Input
              name="description"
              type="text"
              placeholder="Description"
              value={context.formEvent.description}
              onChange={e => context.handleInput(e, 'formEvent')}
            />
          </Form.Item>

          <Form.Item>
            <Input
              name="image"
              type="file"
              placeholder="Image"
            //   value={context.formEvent.image}
              onChange={e => context.handleFile(e, 'formEvent')}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
          
            <EventCard events={context.events} />


        </Form>

     


        

       
      )}
    </MyContext.Consumer>
  )
}
