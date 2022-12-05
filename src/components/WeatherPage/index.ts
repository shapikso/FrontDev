import {connect} from "react-redux";
import WeatherPage from './WeatherPage';
import {selectWeatherInSingleCity} from "../../store/weather/selectors";
import {ApplicationState} from "../../store/types";

const mapStateToProps = (state: ApplicationState) => ({
    weather: selectWeatherInSingleCity(state)
});

export default connect(mapStateToProps)(WeatherPage);
