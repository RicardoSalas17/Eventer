import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MyContext } from "../../context";
import { withRouter } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { Avatar } from "antd";

const StyledNavbar = styled.nav`
  background: rgba(0, 0, 0, 0.822);

  & a {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
`;

function NavBar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <MyContext.Consumer>
      {context => {
        return (
          <StyledNavbar>
            <Navbar color="light" light expand="md" className="bg-transparent">
              <NavbarBrand to="/">Eventer</NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto " navbar>
                  <NavItem className=" my-auto">
                    <NavLink exact to="/" className="text-white">
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem className=" my-auto">
                    <NavLink exact to="/signup" className="text-white">
                      {" "}
                      Signup
                    </NavLink>
                  </NavItem>
                  {context.loggedUser === false && (
                    <NavItem className=" my-auto">
                      <NavLink exact to="/login" className="text-white">
                        Login
                      </NavLink>
                    </NavItem>
                  )}
                  <NavItem className=" my-auto">
                    <NavLink exact to="/" className="text-white my-auto">
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      Mi perfil
                    </NavLink>
                  </NavItem>
                  {context.loggedUser=== true && (
                    <NavItem className=" my-auto">
                      <NavLink
                        onClick={() =>
                          context.handleLogout(() => {
                            props.history.push("/login");
                          })
                        }
                        className="text-white"
                      >
                        Log out
                      </NavLink>
                    </NavItem>
                  )}
                </Nav>
              </Collapse>
            </Navbar>
          </StyledNavbar>
        );
      }}
    </MyContext.Consumer>
  );
}

export default withRouter(NavBar);