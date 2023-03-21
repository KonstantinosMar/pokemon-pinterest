'use client'
import "./single-pokemon.scss"
import React, { useEffect, useState} from "react";
import Image from "next/image";
import {GiBodyHeight} from "react-icons/gi"
import {GiWeightScale} from "react-icons/gi"


export default function Page({params}) {
    const [pokemon, setPokemon] = useState({})
    const [errorMsg, setErrorMsg] = useState(false)

    useEffect(() => {
        const loadPokemon = async () => {
            try {
                await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}/`)
                    .then((response) => {
                        if (response.ok) {
                            return response.json()
                        }
                        throw response
                    })
                    .then((results) => {
                        setPokemon({
                            'name': results.name,
                            'image': results.sprites.other['official-artwork'].front_default,
                            'height': results.height * 10,
                            'weight': results.weight / 10,
                        })
                    })
            } catch
                (error) {
                setErrorMsg('Error fetching pokemon');
            }
        };
        loadPokemon();
    }, [])
    return (
        <div className="single-pokemon">
            <Image width={200} height={200} src={pokemon.image} alt={pokemon.name}/>
            <div className="single-pokemon__info">
                <h2>{pokemon.name}</h2>
                <div>
                    <GiBodyHeight />{pokemon.height}cm
                    <GiWeightScale />{pokemon.weight}kg
                </div>
            </div>
        </div>
    );
}