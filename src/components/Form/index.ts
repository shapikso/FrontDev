import {connect} from "react-redux";
import Form from './Form';
import {selectTheme} from "../../store/theme/selectors";
import {showNotification} from "../../store/notify/action";
import {addTodoSaga} from "../../store/todos/action";
import {ApplicationState} from "../../store/types";
import {Dispatch} from "redux";
import {TTodos} from "../../store/todos/types";

const mapStateToProps = (state: ApplicationState) => ({
    theme: selectTheme(state)
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    showNotification: (type: string, message: string) => dispatch(showNotification(type,message)),
    addTodo: (todo: TTodos) => dispatch(addTodoSaga(todo))
});

export default connect(mapStateToProps,mapDispatchToProps)(Form);
