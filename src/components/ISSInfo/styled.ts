import styled from "styled-components";
import {COLOR} from "../../constants/colors";

export const StTasks = styled.div`
  display: flex;
  flex-direction: column;
`;

type TProps = {
    width? : string,
    withPadding?: boolean,
}

export const StInfoBars = styled.div`
    display: flex;
    line-height: 25px;
    min-height: 400px;
    background: ${COLOR.whiteColor};
    gap: 15px;
    margin-top: 15px;
`;

export const StInfoBar = styled.div<TProps>`
    display: flex;
    flex-direction: column;
    width: ${({width}) => width || 'auto' };
    border: 1px solid #000;
    border-radius: 3px;
    color: #000;
    padding: ${({withPadding}) => withPadding ? '10px 15px 10px' : '0' };
`;