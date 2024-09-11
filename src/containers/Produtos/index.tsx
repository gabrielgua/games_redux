import { Game } from '../../App'
import Produto from '../../components/Produto'
import { useGetJogosQuery } from '../../services/api'

import * as S from './styles'

const Produtos = () => {
  const { isLoading, data: jogos } = useGetJogosQuery()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {jogos?.map((game) => (
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
