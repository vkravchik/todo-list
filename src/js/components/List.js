import React from "react";
import {connect} from "react-redux";
import {removeTodo, updateTodoStatus} from "../actions/todoActions";
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const mapStateToProps = state => {
    return {
        todoList: state.todoReducer
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateTodoStatus: todo => dispatch(updateTodoStatus(todo)),
        removeTodo: todo => dispatch(removeTodo(todo)),
    }
};

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

class CheckboxList extends React.Component {

    createToggleObject = todo => {
        return {
            id: todo.id,
            title: todo.title,
            done: !todo.done
        }
    };

    onToggleStatus = todo => {
        this.props.updateTodoStatus(this.createToggleObject(todo));
    };

    onDeleteClick = todo => {
        this.props.removeTodo(todo);
    };


    render() {

        return (
            <List className={useStyles.root}>
                {this.props.todoList.map(el => {

                    return (
                        <ListItem key={el.id} role={undefined} dense button onChange={() => this.onToggleStatus(el)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={el.done}
                                    tabIndex={-1}
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemText primary={!el.done ? el.title : <s>{el.title}</s>}/>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="comments" key={el.id} onClick={() => this.onDeleteClick(el)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckboxList);
