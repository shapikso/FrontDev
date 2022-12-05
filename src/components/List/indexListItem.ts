import {connect} from "react-redux";
import ListItem from './ListItem';
import {ApplicationState} from "../../store/types";
import {selectWeatherInCities} from "../../store/weather/selectors";

const mapStateToProps = (state: ApplicationState) => ({
    weather: selectWeatherInCities(state)
});


export default connect(mapStateToProps)(ListItem);
