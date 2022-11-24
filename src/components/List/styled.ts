import styled from "styled-components";
import {COLOR} from "../../constants/colors";

export const StPeopleList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const StList = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 60px;
    align-items: center;
    position: relative;
    background: ${COLOR.listItem};
    border-radius: 6px;
    margin-bottom: 8px;
    padding: 0 15px;
    gap: 20px;
    border: 1px solid ${COLOR.black}
`;

export const STImg = styled.img`
  width: 30px;
  height: 30px;
`;
