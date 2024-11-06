import styled from 'styled-components'
import { Button } from '../../styles'
import variables from '../../styles/variaveis'

const textareaStyles = `
  font-size: 14px;
  font-weight: bold;
  margin-left: 8px;
  resize: none;
  border: none;
  background-color: ${variables.dark};
  color: ${variables.white};
  width: 100%;
`
export const Card = styled.div`
  background-color: ${variables.dark};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.33);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  @media (max-width: 600px) {
    max-width: 90%;
  }
`
export const Name = styled.textarea`
  ${textareaStyles};
  font-size: 22px;
  font-weight: bolder;
`

export const Phone = styled.textarea`
  ${textareaStyles}
`

export const Email = styled.textarea`
  ${textareaStyles};
  margin-top: 18px;
`

export const PhoneList = styled.ul`
  list-style-type: none;
`

export const PhoneContainer = styled.li`
  display: flex;
  margin-bottom: 1px;
`

export const DeleteButton = styled.button`
  margin-left: 8px;
  background-color: ${variables.red};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 4px 8px;
  cursor: pointer;
`
export const AddButton = styled.button`
  margin-left: 8px;
  background-color: ${variables.green};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 4px 8px;
  cursor: pointer;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const ButtonCancelRemove = styled(Button)`
  background-color: ${variables.red};
`
export const ErrorMessage = styled.span`
  background-color: ${variables.red};
  color: ${variables.white};
  display: block;
  margin: 8px;
  max-width: 300px;
  padding: 5px;
`
