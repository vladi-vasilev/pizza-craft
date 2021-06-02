import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer;
