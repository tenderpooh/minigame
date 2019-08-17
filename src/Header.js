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
import Leaderboard from "./User/Leaderboard";
import Credit from "./User/Credit";

const Header = () => {
  const [collapsed, toggleNavbar] = useState(true);
  const [modal, toggleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  let modalContent = "";
  switch (modalTitle) {
    case "리더보드":
      modalContent = <Leaderboard />;
      break;
    case "만든 사람들":
      modalContent = <Credit />;
      break;
    default:
      modalContent = <Credit />;
  }
  return (
    <>
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            미니게임천국
          </NavbarBrand>
          <NavbarToggler
            onClick={() => toggleNavbar(!collapsed)}
            className="mr-2"
          />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink
                  onClick={e => {
                    toggleModal(true);
                    setModalTitle(e.target.name);
                  }}
                  name="리더보드"
                >
                  리더보드
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={e => {
                    toggleModal(true);
                    setModalTitle(e.target.name);
                  }}
                  name="만든 사람들"
                >
                  만든 사람들
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/";
                  }}
                >
                  로그아웃
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <div>
        <Modal isOpen={modal} toggle={() => toggleModal(!modal)}>
          <ModalHeader toggle={() => toggleModal(!modal)}>
            {modalTitle}
          </ModalHeader>
          <ModalBody>{modalContent}</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => toggleModal(!modal)}>
              닫기
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
