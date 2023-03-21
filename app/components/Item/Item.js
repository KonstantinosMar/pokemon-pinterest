import React, {Fragment, useEffect, useState} from 'react';
import {BsThreeDots} from 'react-icons/bs'
import {RxShare2} from 'react-icons/rx'
import "./Item.scss"
import Button from "../partials/Button/Button";
import {FiArrowUpRight} from "react-icons/fi";
import Image from "next/image"

const Item = ({pokemonUrl, height}) => {

    const [pokemon, setPokemon] = useState({})
    const [errorMsg, setErrorMsg] = useState(false)


    useEffect(() => {
        const loadPokemon = async () => {
            try {
                await fetch(pokemonUrl)
                    .then((response) => {
                        if (response.ok) {
                            return response.json()
                        }
                        throw response
                    })
                    .then((results) => {
                        setPokemon({'name': results.name, 'image': results.sprites.other['official-artwork'].front_default})
                    })
            } catch
                (error) {
                setErrorMsg('Error fetching pokemon');
            }
        };
        loadPokemon();
    }, [])


    return (

        <div className="pokemon-item" style={{height: height}}>
            <Image fill={true} src={pokemon.image} alt=""/>
            <div className="overlay" style={{height: height}}>
                <h2>{pokemon.name}</h2>
                <div className="button">
                    <Button target='/' content={<Fragment><FiArrowUpRight/>{pokemon.name}</Fragment>} classes="bgBlack"/>
                    <RxShare2/>
                    <BsThreeDots/>
                </div>
            </div>
        </div>
    );
};


export default Item;