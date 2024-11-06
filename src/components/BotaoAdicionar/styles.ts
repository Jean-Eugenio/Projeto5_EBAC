import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variables from '../../styles/variaveis'

export const Circle = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: ${variables.green};
  color: #fff;
  position: fixed;
  bottom: 40px;
  left: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;

  @media (max-width: 400px) {
    left: 6vw;
  }

  @media (max-width: 350px) {
    left: 5vw;
  }

  @media (max-width: 300px) {
    left: 3vw;
  }
`
