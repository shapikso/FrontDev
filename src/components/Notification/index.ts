import {connect} from "react-redux";
import Notification from './Notification';
import {hiddeNotification} from "../../store/notify/action";
import {selectNotify} from "../../store/notify/selectors";
import { ApplicationState } from "../../store/types";
import { Dispatch } from "redux";

const mapStateToProps = (state: ApplicationState) => ({
    notification: selectNotify(state)
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    hiddeNotification: () => dispatch(hiddeNotification())
});

export default connect(mapStateToProps,mapDispatchToProps)(Notification);
