import '../../assets/css/Footer.css';
import React from 'react';

export default props =>
    <footer className="footer">
        <span>
            <i className={`fa fa-${props.icon} text-light`}> <span>Telefônica Educação Digital</span></i>
        </span>
    </footer>