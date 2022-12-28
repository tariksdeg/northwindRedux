import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 
} from "reactstrap";
import CartSummary from "../cart/CartSummary";


export default class Navi extends Component {
  constructor(props) {
    super(props);
    this.toogle = this.toogle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toogle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">APP</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="m1-auto" navbar>
              <NavItem>
                <NavLink></NavLink>
              </NavItem>
              <NavItem>
                <NavLink></NavLink>
              </NavItem>
              <CartSummary/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
