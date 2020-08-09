import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TaskSort from './TaskSort'
import {toggle, setTaskEdit} from '../actions/form'
import { connect } from 'react-redux'
import { filterTable } from '../actions/task';
const Control = (props) => {
    const [search, setSearch] = useState('');
    const handleInput = (e) => {
        const val = e.target.value;
        setSearch(val);
    }
    const onSearch = () => {
        props.setFilter({
            name: search,
            state: "0"
        });
    }
    const handleAdd = () => {
        props.setTaskEdit({})
        props.toggleForm('open')
    }
    return (
        <div className="">
            <div className="text-left w-25">
                <button className="btn btn-primary w-100" onClick={handleAdd}>
                    <FontAwesomeIcon icon={faPlus}/>{" "}Add Task
                </button>
            </div>
            <div className="form-row mt-2">
                <div className="form-group input-group col-md-6">
                    <input type="text" className="form-control" placeholder="Search" name='search' onChange={handleInput} value={search}/>
                    <div className="input-group-append">
                        <button className="input-group-text bg-primary text-white" onClick={onSearch}>{" "}<FontAwesomeIcon icon={faSearch}/></button>
                    </div>
                </div>
                <div className="form-group col-md-2">
                    <TaskSort/>
                </div>
            </div>
        </div>
    );
}

Control.propTypes = {
    setFilter: PropTypes.func,
    setTaskEdit: PropTypes.func,
    toggleForm: PropTypes.func,
}

const mapStateToProps = (state) => ({
    filter: state.filterTask,
})
const mapDispatchToProps = (dispatch) => ({
    toggleForm: (val) => dispatch(toggle(val)),
    setTaskEdit: (task) => dispatch(setTaskEdit(task)),
    setFilter: (params) => dispatch(filterTable(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(Control);

