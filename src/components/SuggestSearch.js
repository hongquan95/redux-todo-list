import React, { useState } from 'react';
import { filterTable } from '../actions/task';
import { connect } from 'react-redux';

const SuggestSearch = (props) => {
    const [filter, setFilter] = useState({
        state: "0",
        name: ""
    });
    const onChange = (e) => {
        var { name } = e.target;
        var params = {...filter, [name]: e.target.value};
        setFilter(params)
        props.filterTable(params);
    }
    return (
        <tr>
            <th scope="row"></th>
            <td>
                <input type="text" className="form-control" placeholder="" onChange={ onChange } name="name" value={filter.name} autoComplete="off" />
            </td>
            <td>
                <select className="custom-select" name="state" onChange={ onChange } value={filter.state}>
                    <option value="0">Select All</option>
                    <option value="1">Progess</option>
                    <option value="2">Pending</option>
                    <option value="3">Done</option>
                </select>
            </td>
            <td></td>
        </tr>
    );
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    filterTable: (params) => dispatch(filterTable(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(SuggestSearch);

