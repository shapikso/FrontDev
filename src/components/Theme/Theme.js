import React from 'react';
import {StButton} from "../commonStyles/commonStyles";
import {StThemeWrapper} from "../../styles";
import {useDispatch, useSelector} from "react-redux";
import {selectTheme} from "../../store/theme/selectors";
import {switchToDrak, switchToLight} from "../../store/theme/action";

const Theme = () => {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);
    const onclickHandler = () => {
        if ( theme.primary === '#000') {
            dispatch(switchToLight());
        } else  {
            dispatch(switchToDrak());
        }
    };
    return (
        <StThemeWrapper>
            <StButton width="200px" fontSize="20px" theme={theme} onClick={onclickHandler}>Change Theme</StButton>
        </StThemeWrapper>
    );
};

export default Theme;
