import {connect} from "react-redux";
import List from './List';
import { selectWeatherInCities } from "../../store/weather/selectors";
import {ApplicationState} from "../../store/types";

const mapStateToProps = (state: ApplicationState) => ({
    weather: selectWeatherInCities(state)
});

export default connect(mapStateToProps)(List);
