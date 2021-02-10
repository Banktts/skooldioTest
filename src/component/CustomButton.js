import styled from 'styled-components'
import {H6} from '../App'
const ButtonSt = styled.button`
  width: 127px;
  height: 35px;
  margin: auto;
  border-radius: 17.5px;
  border: solid 1px #ff5a5a;
  background:transparent;
  :hover {
    background-color: #ff5a5a; 
    color: white;
    .text{
        color:white;
    }
  }
  
`

export const Button = (props)=> {
  return (
    <ButtonSt>
        <H6 red align="center" className="text" size="14px" >
        {props.text}
        </H6>
    </ButtonSt>
  )
}


