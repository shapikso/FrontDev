import styled from "styled-components";
import {COLOR} from "../../constants/colors";

type TProps = {
    width? : string
}

export const StInfoBars = styled.div`
    display: flex;
    line-height: 25px;
    min-height: 60px;
    background: ${COLOR.whiteColor};
    gap: 15px;
    margin-bottom: 8px;
`;

export const StInfoBar = styled.div<TProps>`
    display: flex;
    flex-direction: column;
    width: ${({width}) => width || 'auto' };
    border: 1px solid ${COLOR.black};
    border-radius: 3px;
    color: #000;
    padding: 10px 15px 10px;
`;