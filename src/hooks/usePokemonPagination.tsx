import React from 'react'
import { pokemonApi } from '../apis/pokemonApi';
import { PokemonPaginateResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';


export const usePokemonPagination = ()=> {
  const [isLoading, setIsLoading] = React.useState(true)
  const [simplePokemonList, setSimplePokemonList] = React.useState<SimplePokemon[]>([])

  const nextPageUrl = React.useRef('https://pokeapi.co/api/v2/pokemon?limit=40')

  const loadPokemons = async()=>{
    setIsLoading(true)
    const resp = await pokemonApi.get<PokemonPaginateResponse>(nextPageUrl.current)
    console.log(resp.data.next);
    
    nextPageUrl.current = resp.data.next
    mapPokemonList(resp.data.results)
  }

  const mapPokemonList=(pokemonList:Result[])=>{
    const newPokemonList:SimplePokemon[] = pokemonList.map(({name,url},index)=>{
      const urlParts = url.split('/')
      const id = urlParts[urlParts.length -2]
      const picture =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      return{
        id,
        picture,
        name,
        url
      }
    })
    setSimplePokemonList([...simplePokemonList,...newPokemonList])
    setIsLoading(false)

  }

  React.useEffect(() => {
    loadPokemons()
  }, [])

  return{
    isLoading,
    simplePokemonList,
    loadPokemons
  }
}