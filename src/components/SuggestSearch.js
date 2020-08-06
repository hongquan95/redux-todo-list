import React, { useState, useEffect } from 'react';

const SuggestSearch = (props) => {
    const [filter, setFilter] = useState({
        state: "0",
        name: ""
    });
    const onChange = (e) => {
        var { name } = e.target;
        var params = {...filter, [name]: e.target.value};
        setFilter(params)
        props.onFilter(params);
    }
    useEffect(() => {
        if (props.isCreateOrUpdate) {
            setFilter({
                state: "0",
                name: ""
            })
        }
    }, [props.isCreateOrUpdate]);
    return (
        <tr>
            <th scope="row"></th>
            <td>
                <input type="text" className="form-control" placeholder="" onChange={ onChange } name="name" value={filter.name}/>
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

export default SuggestSearch;

