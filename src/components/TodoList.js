import React from 'react';
import Task from './Task'
import SuggestSearch from './SuggestSearch'

const TodoList = (props) => {
    const showList = () => {
        var list = props.list;
        return list.map((ele, index) =>
            <Task key={ele.id} task={ele} index={index} onRemove={props.onRemove} onEdit={props.onEdit}/>
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

export default TodoList;
