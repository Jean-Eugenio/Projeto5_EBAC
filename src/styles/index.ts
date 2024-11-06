import styled, { createGlobalStyle } from 'styled-components'
import variables from './variaveis'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  background-color: ${variables.white};

  @media (max-width: 600px) {
    grid-template-columns: 150px auto;
  }

  @media (max-width: 400px) {
    grid-template-columns: 120px auto;
  }

  @media (max-width: 333px) {
    grid-template-columns: 100px auto;
  }
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;

  @media (max-width: 600px) {
    padding-right: 0;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`

export const Name = styled.h2`
  display: block;
  margin: 6px 0 40px 6px;
  font-size: 18px;
  font-weight: bold;
  color: ${variables.white};
`

export const Field = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
  margin-bottom: 8px;
`

export const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variables.darkBlue};
  border-radius: 8px;
  margin-right: 8px;
`

export const ButtonSave = styled(Button)`
  background-color: ${variables.green};
`

export default GlobalStyle
