import React, { useEffect } from "react";
import CheckboxList from "./List";
import { connect } from "react-redux";
import { getUsersAction } from "../actions/todoActions";

const User = ({userList, pathname, getUsersActions}) => {

  useEffect(() => {
    // getUsersActions();
  });

  return (
    <>
      <CheckboxList list={userList}/>
    </>
  );
};

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
