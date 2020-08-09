import React from 'react';
import { faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { removeTask, updateTask } from '../actions/task';
import { connect } from 'react-redux';
import { setTaskEdit, toggle } from '../actions/form';
/*eslint-disable eqeqeq*/
const Task = (props) => {
    const getStatus = (val) => {
        const params = [{
            state: 'Progress',
            val: 1,
            color: 'primary'
        },
        {
            state: 'Pending',
            val: 2,
            color: 'warning'
        },
        {
            state: 'Done',
            val: 3,
            color: 'success'
        }]
        return params.filter(e => e.val == val)[0] ? params.filter(e => e.val == val)[0] : {
            state: 'Unknow',
            val: 3,
            color: 'info'
        };
    }

    const onDelete = () => {
        props.removeTask(props.task.id)
    }
    const onEdit = () => {
        props.setTaskEdit(props.task)
        props.toggle('open')
    }
    return (
        <tr>
            <th scope="row">{props.index + 1}</th>
            <td>{props.task.name}</td>
            <td><span className={`badge same-width badge-${getStatus(props.task.state).color}`}>{getStatus(props.task.state).state}</span></td>
            <td><div className="text-center">
                <button type="button" className="btn btn-warning mr-2" onClick={onEdit}><FontAwesomeIcon icon={faPencilAlt} />{" "}</button>
                <button type="button" className="btn btn-danger" onClick={onDelete}><FontAwesomeIcon icon={faTrashAlt} />{" "}</button>
            </div></td>
        </tr>
    );
}
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    removeTask: (id) => dispatch(removeTask(id)),
    updateTask: (task) => dispatch(updateTask(task)),
    setTaskEdit: (task) => dispatch(setTaskEdit(task)),
    toggle: (status) => dispatch(toggle(status))
})
export default connect(mapStateToProps, mapDispatchToProps)(Task);
