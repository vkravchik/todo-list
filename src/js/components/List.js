import React from "react";
import { connect } from "react-redux";
import { getUsersAction, removeTodo, updateTodoStatus } from "../actions/todoActions";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeUserAction } from "../actions/userActions";

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

  onToggleStatus = item => {
    this.props.updateTodoStatus(this.createToggleObject(item));
  };

  onClickItem = item => {
      console.log(item);
  };

  onDeleteClick = item => {
    if (this.props.path === '/user') {
      this.props.removeUserAction(item);
    } else {
      this.props.removeTodo(item);
    }
  };

  render() {
    return (
      <List className={useStyles.root}>
        {this.props.list && this.props.list.map(el => {

          return (
            <ListItem key={el.id} role={undefined} dense button
                      onChange={() => this.onToggleStatus(el)}
                      onClick={() => this.onClickItem(el)}
            >
              {
                el.hasOwnProperty('done') &&
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={el.done}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
              }

              <ListItemText primary={!el.done ? el.name : <s>{el.name}</s>}/>
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments" key={el.id}
                            onClick={() => this.onDeleteClick(el)}
                >
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

const mapStateToProps = (state, ownProps) => {
  return {
    list: ownProps.list
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTodoStatus: item => dispatch(updateTodoStatus(item)),
    removeTodo: item => dispatch(removeTodo(item)),
    removeUserAction: item => dispatch(removeUserAction(item)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckboxList);
