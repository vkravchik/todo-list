import React from "react";
import CheckboxList from "./List";
import Form from "./Form";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
          <>
              <CheckboxList list={this.props.todoList}/>
              <Form />
          </>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoReducer,
  }
};

export default connect(
  mapStateToProps,
  null
)(App);

