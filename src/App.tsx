import React, { useEffect } from 'react';
import { StWrapper } from "./styles";
import { useDispatch } from "react-redux";
import { GlobalStyle } from "./GlobalStyles";
import InfoBars from "./components/InfoBars/index";
import { loadPeople, loadPosition } from "./store/ISS/action";
import ISSInfo from "./components/ISSInfo/ISSInfo";

const App = () =>{
    const [currentDate, setCurrentDate] = React.useState(new Date());
    const dispatch = useDispatch();
    useEffect(() => {
        setCurrentDate(new Date());
        dispatch(loadPosition());
        dispatch(loadPeople());
        setInterval(() => {
            setCurrentDate(new Date());
            dispatch(loadPosition());
        }, 5000);
    },[]);
    return (
        <>
            <GlobalStyle />
            <StWrapper >
                <InfoBars date={currentDate}/>
                <ISSInfo/>
            </StWrapper>
        </>
    );
};

export default App;
