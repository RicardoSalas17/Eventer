import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { MyContext } from '../../context'
import { withRouter } from 'react-router-dom'
import { Avatar } from "antd";

const StyledNavbar = styled.nav`
background: rgba(0, 0, 0, 0.863) !important;
  width: 100vw;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  box-sizing: border-box;
  & a {
    padding: 5px;
    color: white;
    text-decoration: none;
  }
  & a.navbar-active {
    color: #0f4c81;
  }
`

function Navbar(props) {

  return (
    <MyContext.Consumer>
      {context => {
        return (
          <StyledNavbar>
            <NavLink exact to="/" activeClassName="navbar-active">
              Home
            </NavLink>
            {!context.loggedUser && (
            <NavLink exact to="/signup" activeClassName="navbar-active">
              Signup
            </NavLink>
            )}
            
            {!context.loggedUser && (
              <NavLink exact to="/login" activeClassName="navbar-active">
                Login
              </NavLink>
            )}
            
            {context.loggedUser && (
            
                <NavLink
                exact to="/profile" activeClassName="navbar-active"
                >
                <Avatar src={`${context.user.image}`}
                />
                  Mi perfil
                </NavLink>

               
           
            )}

            {context.loggedUser && (
            
              <NavLink
              exact to="/addevents" activeClassName="navbar-active"
              >
  
                Agregar Evento
              </NavLink>
          )}

            

            {context.loggedUser && (
            
                <NavLink
                exact to="/events" activeClassName="navbar-active"
                >
                 Eventos
                </NavLink>
           
            )}
            {context.loggedUser && (
            
              <NavLink
              exact to="/events-tm" activeClassName="navbar-active"
              >
               Eventos PUBLICOS
              </NavLink>
         
          )}
            
            {context.loggedUser && (
              <span
                onClick={() =>
                  context.handleLogout(() => {
                    props.history.push('/login')
                  })
                }
              >
                Logout
              </span>
            )}
          </StyledNavbar>
        )
      }}
    </MyContext.Consumer>
  )
}

export default withRouter(Navbar)