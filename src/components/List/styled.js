import styled from "styled-components";
import {COLOR} from "../../constants/colors";

export const StTasks = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    line-height: 45px;
    min-height: 60px;
    position: relative;
    background: ${COLOR.listItem};
    border-radius: 3px;
    margin-bottom: 8px;
    padding: 0 15px;
    color: #000;
    text-decoration-line: ${ ({done}) => done ? 'line-through' : 'none' }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  height: 20px;
  margin-top: 12px;
`;