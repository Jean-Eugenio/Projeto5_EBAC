import styled from 'styled-components'
import variables from '../../styles/variaveis'

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${variables.dark};
  height: 100vh;

  @media (max-width: 600px) {
    width: 27vw;
  }
`
