import {connect} from "react-redux";
import List from './List';
import {ApplicationState} from "../../store/types";
import {selectISSPeople} from "../../store/ISS/selectors";

const mapStateToProps = (state: ApplicationState) => ({
    people: selectISSPeople(state)
});

export default connect(mapStateToProps)(List);
