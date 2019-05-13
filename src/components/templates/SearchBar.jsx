import '../../assets/css/SearchBar.css';
import React from 'react';

export default props => 
    <form action="" className="searchBar">
        <input type="search" className="search-input form-control mr-sm-1" placeholder="Pesquisar" />
        <button type="submit" className="btn-search btn btn-primary my-2 my-sm-0">
            <i className={`fa fa-${props.icon}`}></i>
        </button>
    </form>
