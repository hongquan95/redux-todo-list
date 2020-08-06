import React, {useState} from 'react';
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TaskSort from './TaskSort'
const Control = (props) => {
    const [search, setSearch] = useState('');
    const handleInput = (e) => {
        const val = e.target.value;
        setSearch(val);
    }
    const onSearch = () => {
        const test = search;
        console.log('xx', test);
        props.onSearch(test);
    }
    return (
        <div className="">
            <div className="text-left w-25">
                <button className="btn btn-primary w-100" onClick={() => props.onShowForm(true)}>
                    <FontAwesomeIcon icon={faPlus}/>{" "}Add Task
                </button>
            </div>
            <div className="form-row mt-2">
                <div className="form-group input-group col-md-6">
                    <input type="text" className="form-control" placeholder="Search" name='search' onChange={handleInput} value={search}/>
                    <div className="input-group-append">
                        <button className="input-group-text bg-primary text-white">{" "}<FontAwesomeIcon icon={faSearch} onClick={() => onSearch()}/></button>
                    </div>
                </div>
                <div className="form-group col-md-2">
                    <TaskSort onSort={props.onSort}/>
                </div>
            </div>
        </div>
    );
}

export default Control;

