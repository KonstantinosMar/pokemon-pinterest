import React from 'react';
import "./Search.scss"
import {FaSearch} from "react-icons/fa"

const Search = () => {
    return (
        <div className="search">
            <input type="text" placeholder="Search"/>
            <FaSearch style={{color: "#5F5F5F"}}/>
        </div>
    );
};

export default Search;