import React from 'react';
import {StCountry, StList, StDegree, StImg, ButtonWrapper, StButton} from "./styled";
import {useDispatch} from "react-redux";
import {deleteCityInfoRequest, updateCityInList} from "../../store/weather/thunks";
import {Link} from "react-router-dom";

type TProps = {
    name : string,
    icon: string,
    temperature: number,
    id: number
}

const ListItem = ({name, icon, temperature, id }: TProps) => {
    const dispatch = useDispatch();
    const handleUpdateCity = () => {
        dispatch(updateCityInList(name));
    };
    const handleDeleteCity = () => {
        dispatch(deleteCityInfoRequest(id));
    };

    const getIcon = () => `http://openweathermap.org/img/wn/${icon}@2x.png`;
    return(
        <StList>
            <Link to={`/${id}`} target="_blank">
                <StImg src={getIcon()}/>
                <StDegree>{temperature.toFixed(0)}°</StDegree>
                <StCountry>{name}</StCountry>
            </Link>
            <ButtonWrapper>
                <StButton onClick={handleUpdateCity}><i className="fas fa-refresh"/></StButton>
                <StButton onClick={handleDeleteCity}><i className="fas fa-trash"/></StButton>
            </ButtonWrapper>
        </StList>
    );
};

export default ListItem;
