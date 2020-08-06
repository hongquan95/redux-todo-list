import React, {useState, useEffect} from "react";
import "./App.css";
import Form from "./components/Form";
import Control from "./components/Control";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/js/dist/dropdown';
import { v4 as uuidv4 } from 'uuid';
var _ = require('lodash');
/*eslint-disable eqeqeq*/
function App() {
    const [listTasks, setListTasks] = useState([]);
    const [isShowForm, setIsShowForm] = useState(false);
    const [editTask, setEditTask] = useState({});
    const [filter, setFilter] = useState({name: '', state: "0"});
    const [isCreateOrUpdate, setIsCreateOrUpdate] = useState(false);
    const [sort, setSort] = useState(0);
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (localStorage.getItem('tasks')) {
            setListTasks(JSON.parse(localStorage.getItem('tasks')));
        }
    }, []);
    const handleToggleForm = (val) => {
        setIsShowForm(val)
        setEditTask({})
    }
    const handleFormSubmit = (data) => {
        var ar = [];
        //Update
        if (data.id) {
            let index = _.findIndex(listTasks, {'id': data.id});
            ar = [...listTasks.slice(0, index), data, ...listTasks.slice(index + 1,listTasks.length)];
        }
        //create
        else {
            ar = [...listTasks, {...data, id: uuidv4()}];
        }
        setListTasks(ar);
        setFilter({name: '', state: "0"});
        setSort(0);
        setIsCreateOrUpdate(true);
        localStorage.setItem('tasks', JSON.stringify(ar));

    }
    const handleRemoveTask = (id) => {
        let ar = listTasks;
        var idd = _.findIndex(ar, {'id': id});
        if (editTask.id == id) {
            setEditTask({});
        }
        const newAr = [...ar.slice(0,idd),
            ...ar.slice(idd+1,ar.length)];
            setListTasks(newAr);
        localStorage.setItem('tasks', JSON.stringify(newAr));

    }

    const handleEdit = (id) => {
        if (!isShowForm) {
            setIsShowForm(true);
        }
        setEditTask(listTasks[_.findIndex(listTasks, {'id': id})])
    }
    const onFilter = (params) => {
        setFilter(params);
        setSort(0);
        setIsCreateOrUpdate(false);
    }
    const onSort = (param) => {
        setFilter({name: '', state: "0"});
        setIsCreateOrUpdate(true);
        setSort(param);
    }
    const onSearch = (val) => {
        console.log(val);
        setSearch(val);
    }
    const eleForm = isShowForm ? <Form onShowForm={handleToggleForm} handleFormSubmit={handleFormSubmit} editTask={editTask}/> : '';
    var taksList = _.filter(listTasks, (ele) => {
        let check = filter;
        return ele.name.toLocaleLowerCase().indexOf(check.name) != -1 && (ele.state == check.state || check.state == "0");
    });
    if (sort > 0) {
        switch (sort) {
            case 1:
                taksList = _.orderBy(taksList, ['name'], ['asc']);
                break;
            case 2:
                taksList = _.orderBy(taksList, ['name'], ['desc']);
                break;
            case 3:
                taksList = _.orderBy(taksList, ['state']);
                break;
            default:
                break;
        }
    }
    if (search != '') {
        taksList = _.filter(taksList, (ele) => {
            let check = search;
            return ele.name.toLocaleLowerCase().indexOf(check.name) != -1;
        });
    }
    return (
        <div className="App">
        <h1 className="m-5">Todo List</h1>
            <div className="container">
                <div className="row">
                    <div className={isShowForm ? "col-4" : ""}>
                        { eleForm }
                    </div>{" "}
                    <div className={isShowForm ? "col-8" : "col-12"}>
                        <Control onShowForm={handleToggleForm} onSort={onSort} onSearch={onSearch}/>
                        <TodoList
                            list={taksList}
                            onRemove={handleRemoveTask}
                            onEdit={handleEdit}
                            onFilter={onFilter}
                            isCreateOrUpdate={isCreateOrUpdate}
                        />
                    </div>{" "}
                </div>
            </div>
        </div>
    );
}

export default App;
