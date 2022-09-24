import "./filtros.css";
import {useDispatch, useSelector} from 'react-redux';
// import { searchCharacter } from '../../redux/characterSaga' 

import { characterSearch  } from '../../redux/actionCharacter';

const Filtros = () => {
  // const search = useSelector()
  const dispatch = useDispatch()
  
  return (
    <div className="filtros">
      <label for="nome">Filtrar por nome:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nome"
        onChange={(event) => dispatch(characterSearch(event.target.value))}
      />
      
    </div>
  );
};

export default Filtros;
