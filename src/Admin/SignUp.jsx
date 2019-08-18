import React, { useState } from "react";
import {
  Alert,
  Input,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const SignUp = () => {
  const [barcode, setBarcode] = useState("");
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [comm, setComm] = useState("");
  const [modal, toggleModal] = useState(false);
  const [alert, setAlert] = useState("");
  const CREATE_USER = gql`
    mutation CREATE_USER(
      $barcode: Int!
      $pw: String!
      $comm: String!
      $name: String!
    ) {
      createUser(barcode: $barcode, pw: $pw, comm: $comm, name: $name) {
        name
      }
    }
  `;
  const [
    createUser,
    { loading: mutationLoading, error: mutationError }
  ] = useMutation(CREATE_USER, {
    onCompleted() {
      toggleModal(true);
      setBarcode("");
      setName("");
      setPw("");
      setComm("");
      setAlert("");
    },
    onError(e) {
      const fieldName = e.message
        .split(":")[2]
        .split("=")[1]
        .trim();
      console.error(fieldName);
      switch (fieldName) {
        case "barcode":
          setAlert("바코드가 중복되었습니다.");
          break;
        case "name":
          setAlert("이름이 중복되었습니다.");
          break;
        default:
          setAlert("");
      }
    }
  });
  return (
    <Container>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <Input
          className="mb-1"
          onChange={e => setComm(e.target.value)}
          value={comm}
          placeholder="커뮤니티"
          style={{ width: "80%" }}
        />
        <Input
          className="mb-1"
          onChange={e => setName(e.target.value)}
          value={name}
          placeholder="닉네임"
          style={{ width: "80%" }}
        />
        <Input
          className="mb-1"
          onChange={e => setPw(e.target.value)}
          value={pw}
          placeholder="비밀번호"
          style={{ width: "80%" }}
          type="password"
        />
        <Input
          className="mb-1"
          onChange={e => setBarcode(e.target.value)}
          value={barcode}
          placeholder="바코드"
          style={{ width: "80%" }}
        />
        <Button
          className="mb-1"
          color="info"
          style={{ width: "80%" }}
          onClick={() =>
            createUser({
              variables: {
                comm: comm,
                name: name,
                pw: pw,
                barcode: Number(barcode)
              }
            })
          }
          disabled={
            barcode.length !== 4 || comm === "" || pw === "" || name === ""
          }
        >
          플레이어 등록
        </Button>
        <Alert
          style={{ width: "80%" }}
          color="info"
          isOpen={mutationError !== undefined}
        >
          {mutationLoading && "Loading..."}
          {alert}
        </Alert>
        <Modal isOpen={modal} toggle={() => toggleModal(!modal)}>
          <ModalHeader toggle={() => toggleModal(!modal)}>
            등록 완료
          </ModalHeader>
          <ModalBody>플레이어 등록이 완료되었습니다.</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => toggleModal(!modal)}>
              닫기
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </Container>
  );
};

export default SignUp;
