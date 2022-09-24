
import { useDispatch, useSelector } from 'react-redux'
import { clearFavorite } from '../redux/action';


/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns Página de favoritos
 */
const PaginaFavoritos = () => {

  const dispatch = useDispatch()


  const favoriteData = useSelector((state) => state.favoriteData)


  return (
    <div className="container">
      <div className="actions">
        <h3>Personagens Favoritos</h3>
        <button
          onClick={() => dispatch(clearFavorite())} className="danger">Limpar favoritos</button>
      </div>
      <div>

          {
            favoriteData.map((favorite) =>
                <div key={favorite.id}>
                  <h3>{favorite.name}</h3>
                  <img src={favorite.image} alt={favorite.name}/>
                </div>
            )
          }

      </div>
    </div>
  );
};

export default PaginaFavoritos;
