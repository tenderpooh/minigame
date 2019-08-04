import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "reactstrap";
import "./App.css";

const Header = () => {
  const [collapsed, toggleNavbar] = useState(true);
  const [modal, toggleModal] = useState(false);
  return (
    <>
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            미니게임천국 with 청년참 반상회
          </NavbarBrand>
          <NavbarToggler
            onClick={() => toggleNavbar(!collapsed)}
            className="mr-2"
          />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink onClick={toggleModal}>내 정보</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin/">Admin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/user/">User</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <div>
        <Modal isOpen={modal} toggle={() => toggleModal(!modal)}>
          <ModalHeader toggle={() => toggleModal(!modal)}>내 정보</ModalHeader>
          <ModalBody>
            <div>Name : Paulo</div>
            <div>커뮤니티 : 비따비</div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => toggleModal(!modal)}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={() => toggleModal(!modal)}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export default Header;

/*
class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
*/
