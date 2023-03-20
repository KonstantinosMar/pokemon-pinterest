import {Fragment} from 'react';
import {BiChevronDown} from 'react-icons/bi'
import {IoNotifications} from 'react-icons/io5'

import {ReactComponent as Logo} from '../../assets/svg/logo.svg'
import {ReactComponent as Comments} from '../../assets/svg/comments.svg'
import './Header.scss'
import Button from "../partials/Button/Button";
import Search from "../partials/Search/Search";
import Pikachu from "../../assets/images/pikachu.png"

const Header = () => {

    return (
        <header>
            <Button target='/' content={<Logo/>} classes="round hoverGray"/>
            <Button target='/' content="Home" classes="bgBlack"/>
            <Button target='/' content={<Fragment>Create <BiChevronDown/></Fragment>} classes="bgWhite"/>
            <Search/>
            <Button target='/' content={<IoNotifications style={{width: '24px', height: '24px', color: '#5F5F5F'}}/>}
                    classes="round round__big hoverGray"/>
            <Button target='/' content={<Comments style={{width: '24px', height: '24px', color: '#5F5F5F'}}/>}
                    classes="round round__big hoverGray"/>
            <Button target='/' content={<img alt="User IMage" src={Pikachu} style={{width: '24px', height: '24px'}}/>}
                    classes="round round__big hoverGray"/>
            <Button target='/' content={<BiChevronDown/>} classes="round round__small hoverGray"/>
        </header>
    );
};

export default Header;