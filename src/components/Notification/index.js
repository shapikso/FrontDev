import {connect} from "react-redux";
import Notification from './Notification';
import {hiddeNotification} from "../../store/notify/action";
import {selectNotify} from "../../store/notify/selectors";

const mapStateToProps = state => ({
    notification: selectNotify(state)
});
const mapDispatchToProps = dispatch => ({
    hiddeNotification: () => dispatch(hiddeNotification())
});

export default connect(mapStateToProps,mapDispatchToProps)(Notification);
