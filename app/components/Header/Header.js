import {Fragment} from 'react';
import {BiChevronDown} from 'react-icons/bi'
import {IoNotifications} from 'react-icons/io5'
import {BsPinterest} from 'react-icons/bs'
import {FaCommentDots} from 'react-icons/fa'

import './Header.scss'
import Button from "../partials/Button/Button";
import Search from "../partials/Search/Search";
import Image from "next/image";

const Header = () => {

    return (
        <header>
            <Button target='/' content={<Image alt="Logo" src="/pokemon_logo.png" width={30} height={30} />} classes="round hoverGray"/>
            <Button target='/' content="Home" classes="bgBlack"/>
            <Button target='/' content={<Fragment>Create <BiChevronDown/></Fragment>} classes="bgWhite"/>
            <Search/>
            <Button target='/' content={<IoNotifications style={{width: '24px', height: '24px', color: '#5F5F5F'}}/>}
                    classes="round round__big hoverGray"/>
            <Button target='/' content={<FaCommentDots size={24} color="5F5F5F" />}
                    classes="round round__big hoverGray"/>
            <Button target='/' content={<Image alt="User IMage" src="/pikachu.png" width={24} height={24} />}
                    classes="round round__big hoverGray"/>
            <Button target='/' content={<BiChevronDown/>} classes="round round__small hoverGray"/>
        </header>
    );
};

export default Header;