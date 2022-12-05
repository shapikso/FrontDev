import {connect} from "react-redux";
import Form from './Form';
import {showNotification} from "../../store/notify/action";
import {ApplicationState} from "../../store/types";
import {Dispatch} from "redux";

const mapStateToProps = (state: ApplicationState) => ({
    //theme: selectTheme(state)
});
// @ts-ignore
const mapDispatchToProps = (dispatch: Dispatch) => ({
    showNotification: (type: string, message: string) => dispatch(showNotification(type,message)),
    //addCity: (city: string) => dispatch(addCityToList(city)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Form);
