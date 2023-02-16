import React, {useEffect, useState} from 'react';
import "./Masonry.scss"
import Item from "../Item/Item";

const Masonry = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const loadAllPokemon = async () => {
            try {
                setIsLoading(true);
                await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=25`)
                    .then((response) => {
                        if (response.ok) {
                            return response.json()
                        }
                        throw response
                    })
                    .then((results) => {
                        setData(results.results)
                    })
            } catch
                (error) {
                setErrorMsg('Error fetching articles');
            } finally {
                setIsLoading(false);
            }
        };
        loadAllPokemon()

    }, [])

    useEffect(() => {
        const maxColumns = parseInt(window.innerWidth / 250)
        const colHeights = Array.from({ length: maxColumns }).fill(0);
        const masonryItems = document.querySelectorAll('.pokemon-item');

        for(let i = 0; i < masonryItems.length; i++) {
            const height = masonryItems[i].getBoundingClientRect().height;
            const left = i % maxColumns * 232 + (16 * (i % maxColumns)) + 'px';
            const top = colHeights[i % maxColumns] + 'px';

            masonryItems[i].style.transform = `translateX(${left}) translateY(${top})`;

            colHeights[i % maxColumns] += height + 16;
        }

    },[data])

    return (
        <div className="masonry">
            {isLoading && <p>Loading</p>}
            {
                data.map((pokemon) => {
                    return (
                        <Item key={pokemon.name} pokemonUrl={pokemon.url} height={`${Math.floor(Math.random() * (500 - 300 + 1) + 200)}px`}/>
                    )
                })
            }
            {errorMsg && <p>{errorMsg}</p>}
        </div>
    );
};

export default Masonry;