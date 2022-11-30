import {connect} from "react-redux";
import Form from './Form';
import {selectTheme} from "../../store/theme/selectors";
import {showNotification} from "../../store/notify/action";
//
import {ApplicationState} from "../../store/types";
import {Dispatch} from "redux";
import {TTodos} from "../../store/todos/types";
import {addCitySaga} from "../../store/todos/action";

const mapStateToProps = (state: ApplicationState) => ({
    theme: selectTheme(state)
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    showNotification: (type: string, message: string) => dispatch(showNotification(type,message)),
    addCity: (city: string) => dispatch(addCitySaga(city))
});

export default connect(mapStateToProps,mapDispatchToProps)(Form);
