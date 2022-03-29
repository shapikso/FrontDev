import {connect} from "react-redux";
import List from './List';
import { selectTodos } from "../../store/todos/selectors";
import {ApplicationState} from "../../store/types";

const mapStateToProps = (state: ApplicationState) => ({
    todos: selectTodos(state)
});

export default connect(mapStateToProps)(List);
