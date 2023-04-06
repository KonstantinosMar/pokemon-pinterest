import "./single-pokemon.scss"
import React from "react";
import Image from "next/image";
import {GiWeightScale, GiBodyHeight} from "react-icons/gi"

async function getPokemon(name) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}


export default async function Page({params}) {
    const pokemonData = await getPokemon(params.name);
    const pokemon = await pokemonData;

    return (
        <div className="single-pokemon">
            <Image width={200} height={200} src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name}/>
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