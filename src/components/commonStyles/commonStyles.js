import styled from "styled-components";
import {COLOR} from "../../constants/colors";

export const StButton = styled.button`
  width: ${({width}) => width ? width : '60px' };
  height: 100%;
  border: none;
  background: ${COLOR.buttonBackGround};
  color: ${COLOR.whiteColor};
  font-size: ${({fontSize}) => fontSize ? fontSize : '12px' };
  border-radius: 10px;
  margin-left: 10px;
  ${({isDisabled}) => isDisabled
    ?
    `cursor: not-allowed;
           opacity: 0.5;`
    : `cursor: pointer;
             opacity: 1;`};
  `
export const StInput = styled.input`
  outline: none;
  width: 85%;
  height: 100%;
  border: 1px solid ${COLOR.inputBorder};
  font-size: 17px;
  border-radius: 10px;
  padding-left: 15px;
  margin: 20px 0 20px 0;
  `