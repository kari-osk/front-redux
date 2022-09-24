import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./grade-personagem.css";
import CardPersonagem from "./card-personagem.componente";

import { characterList } from '../../redux/actionCharacter';

/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns Elemento JSX
 */
const GradePersonagem = () => {

  const dispatch = useDispatch()

  let data = useSelector((state) => state.characterData)
  // console.log('character data in gradePersonagem', data)

  useEffect(() => {
    dispatch(characterList())
  }, [])


  return (
    <div className="grade-personagens">
      {
        data.map((data) =>
          <div key={data.id} >
            <CardPersonagem data={data} />
          </div>
        )
      }
    </div>
  );
};

export default GradePersonagem;
