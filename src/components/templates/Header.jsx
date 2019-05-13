import '../../assets/css/Header.css';
import React from 'react';

export default props =>
    <header className="header d-none d-sm-flex flex-column">
        <h2 className="mt-3">
            { props.title }
        </h2> 
    </header>