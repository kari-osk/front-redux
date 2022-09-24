import "./botao-favorito.css";
import star from '../../images/star.png'
import starFilled from '../../images/star-filled.png'
import { addFavorite} from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'
/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 *
 * @returns Elemento JSX
 */
const BotaoFavorito = ({ isFavorito }) => {

  const src = isFavorito ? starFilled : star

  const dispatch = useDispatch()
  let data = useSelector((state) => state.characterData)

  return (
    <div className="botao-favorito">
      <button className="botao-favorito"
        onClick={() => dispatch(addFavorite(data))}>
        <img src={src} alt={"favorito"} />
      </button>
    </div>
  );
};

export default BotaoFavorito;
