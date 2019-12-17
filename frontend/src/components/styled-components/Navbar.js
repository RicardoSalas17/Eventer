// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { MyContext } from "../../context";
// import { withRouter } from "react-router-dom";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem
// } from "reactstrap";
// import { Avatar } from "antd";

// const StyledNavbar = styled.nav`
//   background: rgba(0, 0, 0, 0.822);

//   & a {
//     padding-right: 0.5rem;
//     padding-left: 0.5rem;
//   }
// `;

// function NavBar(props) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);
//   return (
//     <MyContext.Consumer>
//       {context => {
//         return (
//           <StyledNavbar>
//             <Navbar color="light" light expand="md" className="bg-transparent">
//               <NavbarBrand to="/">Eventer</NavbarBrand>
//               <NavbarToggler onClick={toggle} />
//               <Collapse isOpen={isOpen} navbar>
//                 <Nav className="ml-auto " navbar>
//                   <NavItem className=" my-auto">
//                     <NavLink exact to="/" className="text-white">
//                       Home
//                     </NavLink>
//                   </NavItem>
//                   <NavItem className=" my-auto">
//                     <NavLink exact to="/signup" className="text-white">
//                       {" "}
//                       Signup
//                     </NavLink>
//                   </NavItem>
//                   {context.loggedUser === false && (
//                     <NavItem className=" my-auto">
//                       <NavLink exact to="/login" className="text-white">
//                         Login
//                       </NavLink>
//                     </NavItem>
//                   )}
//                   <NavItem className=" my-auto">
//                     <NavLink exact to="/" className="text-white my-auto">
//                       <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
//                       Mi perfil
//                     </NavLink>
//                   </NavItem>
//                   {context.loggedUser=== true && (
//                     <NavItem className=" my-auto">
//                       <NavLink
//                         onClick={() =>
//                           context.handleLogout(() => {
//                             props.history.push("/login");
//                           })
//                         }
//                         className="text-white"
//                       >
//                         Log out
//                       </NavLink>
//                     </NavItem>
//                   )}
//                 </Nav>
//               </Collapse>
//             </Navbar>
//           </StyledNavbar>
//         );
//       }}
//     </MyContext.Consumer>
//   );
// }

// export default withRouter(NavBar);


import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { MyContext } from '../../context'
import { withRouter } from 'react-router-dom'

const StyledNavbar = styled.nav`
  width: 100vw;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  box-sizing: border-box;
  & a {
    padding: 5px;
    color: black;
    text-decoration: none;
  }
  & a.navbar-active {
    color: #0f4c81;
  }
`

function Navbar(props) {
  console.log(props)
  return (
    <MyContext.Consumer>
      {context => {
        return (
          <StyledNavbar>
            <NavLink exact to="/" activeClassName="navbar-active">
              Home
            </NavLink>
            <NavLink exact to="/signup" activeClassName="navbar-active">
              Signup
            </NavLink>
            {!context.loggedUser && (
              <NavLink exact to="/login" activeClassName="navbar-active">
                Login
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