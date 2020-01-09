import React from "react";
import CheckboxList from "./List";
import { connect } from "react-redux";
import { getUsersAction } from "../actions/todoActions";

class User extends React.Component {

  componentDidMount() {
    this.props.getUsersActions();
  }

  render() {
    return (
      <>
        <CheckboxList list={this.props.userList}/>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userList: state.userReducer,
    pathname: ownProps.location.pathname
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersActions: () => dispatch(getUsersAction()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
