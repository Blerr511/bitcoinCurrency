import React from 'react';
import './Pagination.css';

const Pagination = props=>{
    return (
        <div className="Pagination" >
            <button disabled={props.currentPage===1} className="Pagination-button" onClick={()=>props.switchPage(-1)} >Prev</button>
            <span className = "Pagination-info" >{props.currentPage +"/"+ props.totalPage}</span>
        <button disabled={props.currentPage===props.totalPage} className="Pagination-button" onClick={()=>props.switchPage(1)} >Next</button>
        </div>
    )
}

export default Pagination;