import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'

import * as S from './styles'
import { Button, Field } from '../../styles'

type Props = {
  showSearch: boolean
}

const SideBar = ({ showSearch }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {showSearch ? (
          <>
            <Field
              type="text"
              placeholder="pesquisar"
              value={term}
              onChange={(evento) => dispatch(changeTerm(evento.target.value))}
            />
          </>
        ) : (
          <Button onClick={() => navigate('/')}>Voltar para a lista</Button>
        )}
      </div>
    </S.Aside>
  )
}

export default SideBar
