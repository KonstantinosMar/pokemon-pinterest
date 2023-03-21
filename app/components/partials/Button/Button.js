import React from 'react';
import "./Button.scss"

const Button = ({target, content, classes}) => {
    return (
        <a href={target} className={classes}>
            {content}
        </a>
    );
};

export default Button;