import React from 'react'
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
    return (
        <div className={styles.content}>
            <h1>404</h1>
            <h2>UH OH! You're lost.</h2>
            <p>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</p>
            <button class="btn green">HOME</button>
        </div>
    )
}

export default ErrorPage;
