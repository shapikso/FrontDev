import {connect} from "react-redux";
import Theme from './Theme';
import {selectTheme} from "../../store/theme/selectors";
import {switchToDrak, switchToLight} from "../../store/theme/action";
import {ApplicationState} from "../../store/types";
import {Dispatch} from "redux";

const mapStateToProps = (state: ApplicationState) => ({
    theme: selectTheme(state)
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    switchToDark: () => dispatch(switchToDrak()),
    switchToLight: () => dispatch(switchToLight())
});

export default connect(mapStateToProps,mapDispatchToProps)(Theme);
