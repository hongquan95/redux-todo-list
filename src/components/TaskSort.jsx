import React, {useState} from 'react'
import { faSort, faSortAlphaDown, faSortAlphaUp, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TaskSort(props) {
    const [sort, setSort] = useState(0);
    const handleSort = (val) => {
        setSort(val);
        props.onSort(val);
    }
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort {" "}
                <FontAwesomeIcon icon={faSort}/>
            </button>
            <div className="sort dropdown-menu">
                <a className="dropdown-item" onClick={() => handleSort(0)}>{ sort == 0 ? <FontAwesomeIcon icon={faCheck} className="active"/> : ''}{" "}None{" "}</a>
                <a className="dropdown-item" onClick={() => handleSort(1)}>{ sort == 1 ? <FontAwesomeIcon icon={faCheck} className="active"/> : ''}{" "}Name{" "}<FontAwesomeIcon icon={faSortAlphaDown}/></a>
                <a className="dropdown-item" onClick={() => handleSort(2)}>{ sort == 2 ? <FontAwesomeIcon icon={faCheck} className="active"/> : ''}{" "}Name{" "}<FontAwesomeIcon icon={faSortAlphaUp}/></a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" onClick={() => handleSort(3)}>{ sort == 3 ? <FontAwesomeIcon icon={faCheck} className="active"/> : ''}{" "}State{" "}</a>
            </div>
        </div>
    )
}

