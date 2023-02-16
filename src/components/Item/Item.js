import React, {useEffect, useState} from 'react';
import {BsThreeDots} from 'react-icons/bs'
import {RxShare2} from 'react-icons/rx'
import "./Item.scss"
import Button from "../partials/Button/Button";

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
                        setPokemon({'name': results.name, 'image': results.sprites.other.dream_world.front_default})
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
            <img width="100%" height="100%" src={pokemon.image} alt=""/>
            <div className="overlay" style={{height: height}}>
                <h2>{pokemon.name}</h2>
                <div className="button">
                    <Button target='/' content={pokemon.name} classes="bgBlack"/>
                    <RxShare2/>
                    <BsThreeDots/>
                </div>
            </div>
        </div>
    );
};


export default Item;