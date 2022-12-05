import React from 'react';
import WeatherPageInfo from "../WeatherPageInfo";
import {mountSmart, mockStore} from "../../../helpers/testhelper";
import * as redux from "react-redux";

describe('WeatherPageInfo', () => {
    const props = {
        sys: {
            country: "UA",
        },
        weather: [
            { description: "clear sky", icon: "01n", id: 800, main: "123"}
        ],
        main: {
            temp: -4.21,
            feels_like: -10.44,
            pressure: 1036,
            humidity: 51
        },
        visibility: 10000,
        wind: {
            speed: 5.41,
        },
        clouds: {
            all: 10
        },
        name: "Dnipro"
    };
    const store = mockStore({
        weather: {
            weather: []
        }
    });
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatchFn = jest.fn();
    // @ts-ignore
    const setStateMock = jest.fn();
    beforeEach(() => {
        useDispatchSpy.mockReturnValue(mockDispatchFn);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should render correctly', () => {
        const component = mountSmart(<WeatherPageInfo {...props} />, store);
        expect(component).toMatchSnapshot();
    });

    it('should render temperature', () => {
        const component = mountSmart(<WeatherPageInfo {...props} />, store);
        //console.log(component.debug());
        console.log(component.find('div').at(2).getElement().props.children[0]);
        expect(component.find('div').at(2).getElement().props.children[0]).toEqual(props.main.temp.toFixed(0).toString());
    });

    it('should render city name', () => {
        const component = mountSmart(<WeatherPageInfo {...props} />, store);
        expect(component.find('h1').getElement().props.children[0]).toEqual(props.name);
    });
    it('should render country name', () => {
        const component = mountSmart(<WeatherPageInfo {...props} />, store);
        expect(component.find('h1').getElement().props.children[2]).toEqual(props.sys.country);
    });

    it('should render icon', () => {
        const component = mountSmart(<WeatherPageInfo {...props} />, store);
        //console.log(component.debug());span
        expect(component.find('img').getElement().props.src).toEqual(`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`);
    });

    it('should render feels like temperature', () => {
        const component = mountSmart(<WeatherPageInfo {...props} />, store);
        expect(component.find('span').at(0).getElement().props.children[0]).toEqual(Math.round(props.main.feels_like));
    });
    it('should render wind speed', () => {
        const component = mountSmart(<WeatherPageInfo {...props} />, store);
        expect(component.find('span').at(1).getElement().props.children[1]).toEqual(Math.round(props.wind.speed));
    });
    it('should render humidity', () => {
        const component = mountSmart(<WeatherPageInfo {...props} />, store);
        expect(component.find('span').at(2).getElement().props.children[0]).toEqual(props.main.humidity);
    });
    it('should render pressure', () => {
        const component = mountSmart(<WeatherPageInfo {...props} />, store);
        expect(component.find('span').at(3).getElement().props.children[0]).toEqual(props.main.pressure);
    });
    it('should render cloud cover', () => {
        const component = mountSmart(<WeatherPageInfo {...props} />, store);
        expect(component.find('span').at(4).getElement().props.children[0]).toEqual(props.clouds.all);
    });
    it('should render cloud visibility', () => {
        const component = mountSmart(<WeatherPageInfo {...props} />, store);
        expect(component.find('span').at(5).getElement().props.children[0]).toEqual(props.visibility/1000);
    });
    it('should render cloud visibility', () => {
        const component = mountSmart(<WeatherPageInfo {...props} />, store);
        expect(component.find('span').at(6).getElement().props.children).toEqual(props.weather[0].description);
    });

});