import React, { Component, createContext } from 'react'
import MY_SERVICE from './services/index'
import Swal from 'sweetalert2'


export const MyContext = createContext()

class MyProvider extends Component {
  state = {
    loggedUser: false,
    formSignup: {
      name: '',
      email: '',
      password: ''
    },
    loginForm: {
      email: '',
      password: ''
    },
    formEvent:{
    eventName: '',
    dateTime: '',
    localTime: '',
    description: '',
    image:'',

    },
    user: {},
    events:{},
    // file:{}

  }

   componentDidMount() {
    if (document.cookie) {
      MY_SERVICE.getUser()
        .then(({ data }) => { 
          this.setState({ loggedUser: true, user: data.user, events:data.events })
          Swal.fire(`Welcome back ${data.user.name} `, '', 'success')
        })
        .catch(err => console.log(err))
    }
    MY_SERVICE.getEvents().then(({ data }) => { 
      this.setState({  events:data.events })
      // console.log(data)
    })
    .catch(err => console.log(err))
  }


  handleInput = (e, obj) => {
    const a = this.state[obj]
    const key = e.target.name
    a[key] = e.target.value
    this.setState({ obj: a })
  }

  handleFile = (e, obj)=> {
    const a = this.state[obj]
    const key = e.target.name
    a[key] = e.target.files[0]
    this.setState({obj: a })

  }

  handleSignup = async e => {
    e.preventDefault()
    const { data } = await MY_SERVICE.signup(this.state.formSignup)
    Swal.fire(`Welcome ${data.user.name}`, 'User created', 'success')

  }
  

    handleLogin = (e, cb) => {
    e.preventDefault()
    MY_SERVICE.login(this.state.loginForm)
      .then(({ data }) => {
        this.setState({ loggedUser: true, user: data.user })
        cb()
      })
      .catch(err => {
        Swal.fire(err)
        console.log(err)
      })
  }

  

  handleLogout = async cb => {
    await MY_SERVICE.logout()
    window.localStorage.clear()
    this.setState({ loggedUser: false, user: {} })
    cb()
  }

 
  handlecreateEvent = async e => {
    e.preventDefault()
    const { data } = await MY_SERVICE.createEvent (this.state.formEvent)
    Swal.fire( 'Event created', 'success')
    console.log(data)
  }



  render() {

    return (
      <MyContext.Provider
        value={{
          loggedUser: this.state.loggedUser,
          formSignup: this.state.formSignup,
          formEvent: this.state.formEvent,
          loginForm: this.state.loginForm,
          events: this.state.events,
          handleInput: this.handleInput,
          handleSignup: this.handleSignup,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          handlecreateEvent: this.handlecreateEvent,
          handleFile:this.handleFile
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }

  
}


export default MyProvider
