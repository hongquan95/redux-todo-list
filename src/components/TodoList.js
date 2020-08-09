/* eslint-disable eqeqeq */
import React from 'react';
import Task from './Task'
import SuggestSearch from './SuggestSearch'
import { connect } from 'react-redux'
import _ from 'lodash'

const TodoList = (props) => {
    const showList = () => {
        var list = _.filter(props.tasks, (ele) => {
            let check = props.filterTask;
            return ele.name.toLocaleLowerCase().indexOf(check.name.toLocaleLowerCase()) != -1 && (ele.state == check.state || check.state == "0");
        });
        switch (props.sortTable) {
                case 1:
                    list = [..._.orderBy(list, ['name'], ['asc'])];
                    break;
                case 2:
                    list = [..._.orderBy(list, ['name'], ['desc'])];
                    break;
                case 3:
                    list = [..._.orderBy(list, ['state'])];
                    break;
                default:
                    break;
                }
        return list.map((ele, index) =>
            <Task key={ele.id} task={ele} index={index}/>
    )};
    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col" style={{width: 60}}>#</th>
                        <th scope="col">Name</th>
                        <th scope="col">State</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <SuggestSearch onFilter={ props.onFilter } isCreateOrUpdate={props.isCreateOrUpdate}/>
                    {showList()}
                </tbody>
            </table>
        </div>
    );
}
const mapStateToProps = (state) => ({
    tasks: state.task.tasks,
    filterTask: state.task.filterTask,
    sortTable: state.task.sortTable,
})

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps, null)(TodoList);
