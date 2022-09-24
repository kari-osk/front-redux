import BotaoFavorito from "../botoes/botao-favorito.componente";
import "./card-personagem.css";


import star from '../../images/star.png'
import starFilled from '../../images/star-filled.png'
import { addCharacter } from '../../redux/action'
import { useDispatch } from 'react-redux'
/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento JSX
 */
const CardPersonagem = ({ data }) => {

  // const src = isFavorito ? starFilled : star

  // const dispatch = useDispatch()

  return (
    <div className="card-personagem">
      <img
        src={data.image}
        alt={data.name}
      />
      <div className="card-personagem-body">
        <span>{data.name}</span>
        <BotaoFavorito isFavorito={false} />

        {/* <div className="botao-favorito">
          <button className="botao-favorito"
            onClick={() => dispatch(addCharacter(data))}>
            <img src={src} alt={"favorito"} />
          </button>
        </div> */}

      </div>
    </div>
  );
};

export default CardPersonagem;
