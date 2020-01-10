import React, { useEffect } from "react";
import CheckboxList from "./List";
import { connect } from "react-redux";
import { getUsersAction } from "../actions/userActions";

const User = ({userList, pathname, getUsersAction}) => {

  useEffect(() => {
    getUsersAction();
  }, []);

  return (
    <>
      <CheckboxList list={userList} path={pathname}/>
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
    getUsersAction: () => dispatch(getUsersAction()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
