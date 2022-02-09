import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { GiFilmProjector } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

import {
  Overlay,
  ModalContainer,
  UserInput,
  LogoContainer,
  LogoText,
  LogoTextPeriod,
  LoginBtnE,
} from "./Styles";

const Modal = ({ show, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <>
      <Overlay onClick={handleCloseClick} />
      <ModalContainer>
        <IoCloseSharp
          size={30}
          onClick={handleCloseClick}
          style={{ color: "#D22F27", alignSelf: "flex-end", cursor: "pointer" }}
        />
        <LogoContainer>
          <GiFilmProjector style={{ color: "#D22F27" }} size={45} />

          <LogoText>
            TrailerBox<LogoTextPeriod>.</LogoTextPeriod>
          </LogoText>
        </LogoContainer>
        <UserInput placeholder="Email" type="text" mb="60px" />
        <UserInput placeholder="Password" type="password" />
        <LoginBtnE>Login</LoginBtnE>
      </ModalContainer>
    </>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal")
    );
  } else {
    return null;
  }
};

export default Modal;
