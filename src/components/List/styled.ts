import styled from "styled-components";
import {COLOR} from "../../constants/colors";

export const StTasks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const StList = styled.div`
  display: inline-block;
  box-sizing: content-box;
  position: relative;
  width: 180px;
  height: 130px;
  padding: 36px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 0 15px #ddd;
  a {
    text-decoration: none;
    color: ${COLOR.blackColor};
  }
`;

export const StCountry = styled.div`
  font-size: 2em;
  margin-top: 10px;
`;

export const StDegree = styled.div`
  font-size: 4em;
`;

export const StImg = styled.img`
  height: 100px;
  width: 100px;
  position: absolute;
  top: 8px;
  right: 16px;
  font-size: 18px;
`;

export const StButton = styled.button`
  width: 20px;
  height: 20px;
  background: ${COLOR.buttonBackGround};
  color: ${COLOR.whiteColor};
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
export const ButtonWrapper = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  display: flex;
  gap: 10px;
  height: 20px;
`;
