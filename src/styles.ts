import styled from "styled-components";
import {COLOR} from "./constants/colors";

export const StWrapper = styled.div`
  margin: 120px auto;
  max-width: 900px;
  width: 100%;
  background: ${COLOR.whiteColor};
  color: ${COLOR.blackColor};
  border-radius: 5px;
  padding: 25px;
`;

type TNotificator= {
    type: string
}

export const StNotificator = styled.div<TNotificator>`
  background-color: ${({type}) => ( type === 'success' ? '#43AC6A' : '#b40b1c' ) } ;
  color: ${COLOR.whiteColor};
  width: 300px;
  height: 80px;
  border-radius: 15px;
  position: absolute;
  left: calc(50% - 150px);
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;
