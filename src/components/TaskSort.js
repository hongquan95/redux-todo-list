/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable eqeqeq */
import React from 'react'
import { faSort, faSortAlphaDown, faSortAlphaUp, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';
import { sortTable } from '../actions/task';

function TaskSort(props) {
    console.log('sortVal', props.sortVal);
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort {" "}
                <FontAwesomeIcon icon={faSort}/>
            </button>
            <div className="sort dropdown-menu">
                <a className="dropdown-item" onClick={() => props.setSortTable(0)}>{ props.sortVal == 0 ? <FontAwesomeIcon icon={faCheck} className="active"/> : ''}{" "}None{" "}</a>
                <a className="dropdown-item" onClick={() => props.setSortTable(1)}>{ props.sortVal == 1 ? <FontAwesomeIcon icon={faCheck} className="active"/> : ''}{" "}Name{" "}<FontAwesomeIcon icon={faSortAlphaDown}/></a>
                <a className="dropdown-item" onClick={() => props.setSortTable(2)}>{ props.sortVal == 2 ? <FontAwesomeIcon icon={faCheck} className="active"/> : ''}{" "}Name{" "}<FontAwesomeIcon icon={faSortAlphaUp}/></a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" onClick={() => props.setSortTable(3)}>{ props.sortVal == 3 ? <FontAwesomeIcon icon={faCheck} className="active"/> : ''}{" "}State{" "}</a>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    sortVal: state.task.sortTable
})

const mapDispatchToProps = (dispatch) => ({
    setSortTable: (val) => dispatch(sortTable(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskSort)
