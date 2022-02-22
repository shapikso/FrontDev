import React from 'react';
import {StButton} from "../commonStyles/commonStyles";
import {StThemeWrapper} from "../../styles";

const Theme = ({theme, switchToLight, switchToDark}) => {
    const onclickHandler = () => {
        if ( theme.primary === '#000') {
            switchToLight();
        } else  {
            switchToDark();
        }
    };
    return (
        <StThemeWrapper>
            <StButton width="200px" fontSize="20px" theme={theme} onClick={onclickHandler}>Change Theme</StButton>
        </StThemeWrapper>
    );
};

export default Theme;
