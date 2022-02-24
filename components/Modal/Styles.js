import styled from "styled-components";
import { Btn } from "../../styles";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 3;
`;

export const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  width: 500px;
  height: 600px;
  border-radius: 15px;
  padding: 30px 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  z-index: 3;
`;

export const Heading = styled.h3`
color
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  cursor: pointer;
  margin: 3rem 0px 4rem 0px;
`;

export const LogoText = styled.h1`
  font-size: 30px;
  margin-left: 10px;
  color: #fff;
`;

export const LogoTextPeriod = styled.span`
  color: red;
`;

export const UserInput = styled.input`
  background-color: transparent;
  width: 100%;
  border: none;
  border-bottom: 1px silver solid;
  outline: none;
  margin-bottom: ${(props) => (props.mb ? props.mb : "unset")};
  color: white;
  font-size: 18px;
  padding: 8px 5px;
  &:focus {
    outline: none;
  }
  &:placeholder {
    color: silver;
  }
`;

export const LoginBtnE = styled(Btn)`
  width: 100%;
  font-size: 20px;
  margin-top: 55px;
  font-weight: bold;
  &:hover {
    background-color: #d2302791;
    transition: all 0.3s ease-in-out;
  }
  &:active {
    transform: translateY(2px);
  }
`;
