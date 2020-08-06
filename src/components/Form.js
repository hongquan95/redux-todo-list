import React, { useState, useEffect} from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Form as FormLib} from 'react-bootstrap';
import _ from 'lodash';

const Form = (props) => {
    const [params, setParams] = useState({
        name: '',
        state: '1',
    });

    useEffect(() => {
        !_.isEmpty(props.editTask) ?
            setParams(props.editTask) :
            setParams({
                name: '',
                state: '1',
            })

    }, [props.editTask])
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
        } else {
            setValidated(false);
            props.handleFormSubmit(params);
            setParams({
                name: '',
                state: '1',
            }) 
        }
        event.preventDefault();
        event.stopPropagation();
    }
    const handleInput = (e) => {
        const name = e.target.name;
        setParams({ ...params, [name]: e.target.value });
    }
    return (
        <div className="border rounded">
            <h4 className="bg-warning p-2">{ !params.id ? 'Add Task' : 'Update Task' }</h4>
            <div onClick={() => props.onShowForm(false)}>
                <FontAwesomeIcon icon={faTimes} style={{ position: 'absolute', top: 16, right: 29, cursor: 'pointer' }} />
            </div>
            <FormLib noValidate className=" p-2 text-left" onSubmit={handleSubmit} validated={validated}>
                <div className="form-group">
                    <label>Task</label>
                    <FormLib.Control type="text" className="form-control" value={params.name} name="name" placeholder="Add task" required onChange={handleInput} />
                    <FormLib.Control.Feedback type="invalid">
                        Please input task.
                    </FormLib.Control.Feedback>
                </div>
                <div className="form-group">
                    <label>State</label>
                    <select className="custom-select" name="state" value={params.state} onChange={handleInput}>
                        <option value="1">Progress</option>
                        <option value="2">Pending</option>
                        <option value="3">Done</option>
                    </select>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary mr-2">Save</button>
                    <button type="button" className="btn btn-danger">Cancel</button>
                </div>
            </FormLib>
        </div>
    );
}

export default Form;

