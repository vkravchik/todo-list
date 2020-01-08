import React from "react";
import {connect} from "react-redux";
import {addTodo} from "../actions/todoActions";
import TextField from "@material-ui/core/TextField";

const mapStateToProps = state => {
    return {
        todoList: state.todoReducer
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: todo => dispatch(addTodo(todo))
    }
};

class Form extends React.Component {
    onAddTodo = event => {
        if (event.key === 'Enter') {
            const todo = this.createTodoObject(event.target.value);
            this.props.addTodo(todo);
            event.target.value = '';
        }
    };

    createTodoObject = title => {
        return {
            id: this.props.todoList.length + 1,
            title,
            done: false
        }
    };

    render() {
        return (
            <div>
                <TextField id="standard-basic" label="Standard" onKeyDown={this.onAddTodo} />
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);
