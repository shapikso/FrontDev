import {connect} from "react-redux";
import Theme from './Theme';
import {selectTheme} from "../../store/theme/selectors";
import {switchToDrak, switchToLight} from "../../store/theme/action";

const mapStateToProps = state => ({
    theme: selectTheme(state)
});
const mapDispatchToProps = dispatch => ({
    switchToDark: () => dispatch(switchToDrak()),
    switchToLight: () => dispatch(switchToLight())
});

export default connect(mapStateToProps,mapDispatchToProps)(Theme);
