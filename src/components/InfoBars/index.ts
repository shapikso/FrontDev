import {connect} from "react-redux";
import InfoBars from './InfoBars';
import {ApplicationState} from "../../store/types";
import {selectISSPosition} from "../../store/ISS/selectors";

const mapStateToProps = (state: ApplicationState) => ({
    position: selectISSPosition(state)
});

export default connect(mapStateToProps)(InfoBars);