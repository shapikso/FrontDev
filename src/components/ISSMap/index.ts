import {connect} from "react-redux";
import {ApplicationState} from "../../store/types";
import {selectISSPosition} from "../../store/ISS/selectors";
import ISSMap from "./ISSMap";
const mapStateToProps = (state: ApplicationState) => ({
    position: selectISSPosition(state)
});

export default connect(mapStateToProps)(ISSMap);