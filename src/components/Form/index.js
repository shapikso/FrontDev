import {connect} from "react-redux";
import Form from './Form';
import {selectTheme} from "../../store/theme/selectors";
import {showNotification} from "../../store/notify/action";
import {addTodo} from "../../store/todos/action";

const mapStateToProps = state => ({
    theme: selectTheme(state)
});
const mapDispatchToProps = dispatch => ({
    showNotification: (type,message) => dispatch(showNotification(type,message)),
    addTodo: (todo) => dispatch(addTodo(todo))
});

export default connect(mapStateToProps,mapDispatchToProps)(Form);
