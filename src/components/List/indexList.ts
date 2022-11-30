import {connect} from "react-redux";
import List from './List';
import { selectTodos } from "../../store/todos/selectors";
import {ApplicationState} from "../../store/types";
import weatherRedux from "../../store/todos/reducer";

const mapStateToProps = (state: ApplicationState) => ({
    weather: selectTodos(state)
});

export default connect(mapStateToProps)(List);
