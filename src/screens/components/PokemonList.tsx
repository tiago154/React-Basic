import React from 'react'

import { Pokemon } from '../../types/pokemon'
import Loading, { LoadingEnum } from '../../components/Loading'
import PokemonRow from '../../components/PokemonRow'

interface IProps {
  pokemons: Pokemon[],
  inProgress: boolean,
  onNext: () => void
  onPrevious: () => void
}

const PokemonList = ({ pokemons, inProgress, onNext, onPrevious }: IProps) => {
  // @TODO Temporário
  if (!pokemons.length && inProgress) { return <div><Loading width={200} /></div> }

  return (
    <div>
      <div>
        {
          pokemons.map(({ id, name, image }) => <PokemonRow
            key={id}
            id={id}
            name={name}
            spriteUrl={image}
          />)
        }
      </div>
      {
        !!pokemons.length &&
        <div>
          <button onClick={onPrevious}>Anterior</button>
          <button onClick={onNext}>Proximo</button>
        </div>
      }
      {inProgress && <div><Loading width={200} loadingType={LoadingEnum.pikachu} /></div>}
    </div>
  )
}

export default PokemonList
