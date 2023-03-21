import React from 'react';
import "./Button.scss"
import Link from "next/link";

const Button = ({target, content, classes}) => {
    return (
        <Link href={target} className={classes}>
            {content}
        </Link>
    );
};

export default Button;