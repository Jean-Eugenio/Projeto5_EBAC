import styled from 'styled-components'
import variables from '../../styles/variaveis'

export const Formulary = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`
export const Card = styled.div`
  max-width: 600px;
  width: 100%;
  background-color: ${variables.dark};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  margin-top: 40px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`
