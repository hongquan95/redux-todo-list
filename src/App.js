import React from "react";
import { connect } from 'react-redux'
import "./App.css";
import Form from "./components/Form";
import Control from "./components/Control";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/js/dist/dropdown';


/*eslint-disable eqeqeq*/
function App(props) {

    return (
        <div className="App">
        <h1 className="m-5">Todo List</h1>
            <div className="container">
                <div className="row">
                    <div className={props.isDisplay ? "col-4" : ""}>
                        <Form />
                    </div>{" "}
                    <div className={props.isDisplay ? "col-8" : "col-12"}>
                        <Control/>
                        <TodoList/>
                    </div>{" "}
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    isDisplay: state.form.isDisplay
})

export default connect(mapStateToProps, null)(App);
