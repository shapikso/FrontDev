import {connect} from "react-redux";
import ListItem from './ListItem';
import {checkTodo, deleteTodoAction} from "../../store/todos/action";
import {showNotification} from "../../store/notify/action";
import {selectTheme} from "../../store/theme/selectors";

const mapStateToProps = state => ({
    theme: selectTheme(state)
});
const mapDispatchToProps = dispatch => ({
    checkTodo: (id) => dispatch(checkTodo(id)),
    deleteTodoAction: (id) => dispatch(deleteTodoAction(id)),
    showNotification: (type, message) =>  dispatch(showNotification(type ,message))
});

export default connect(mapStateToProps,mapDispatchToProps)(ListItem);
