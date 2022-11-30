import {connect} from "react-redux";
import ListItem from './ListItem';
//import {checkTodoSaga, deleteTodoActionSaga} from "../../store/todos/action";
import {selectTheme} from "../../store/theme/selectors";
import {ApplicationState} from "../../store/types";
import {Dispatch} from "redux";
import {updateCitySaga} from "../../store/todos/action";
import {selectTodos} from "../../store/todos/selectors";

const mapStateToProps = (state: ApplicationState) => ({
    theme: selectTheme(state),
    weather: selectTodos(state)
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateCity: (name: string) => dispatch(updateCitySaga(name)),
});

export default connect(mapStateToProps,mapDispatchToProps)(ListItem);
