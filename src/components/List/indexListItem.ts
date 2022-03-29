import {connect} from "react-redux";
import ListItem from './ListItem';
import {checkTodoSaga, deleteTodoActionSaga} from "../../store/todos/action";
import {selectTheme} from "../../store/theme/selectors";
import {ApplicationState} from "../../store/types";
import {Dispatch} from "redux";

const mapStateToProps = (state: ApplicationState) => ({
    theme: selectTheme(state)
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    checkTodo: (id: number) => dispatch(checkTodoSaga(id)),
    deleteTodoAction: (id: number) => dispatch(deleteTodoActionSaga(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(ListItem);
