import React, {useState} from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div `
      border: 1px groove;
      border-radius: 10px;
      padding: 1rem;
      margin: 1rem auto 1rem auto;
      max-width: 335px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

      cursor: pointer;

      &:hover{
        transform: scale(1.05);
        box-shadow:  0 8px 16px rgba(0, 0, 0, 0.3);
      }

      h3{
        color: darkred;
        font-size: 20px;
        transition: text-decoration 0.3s ease;
      }

      h3:hover {
       text-decoration: underline;
      }

      p{
        color: gray;
        font-size: 18px;
      }

      .homeworld{
         color: black; 
         font-size: 18px;
      }
`


function Character({name, homeworld}) { // ❗ Add the propss
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld

  const [isHomeWorldVisible, setHomeWorldVisible] = useState(false)

  const handleClick = () => {
    setHomeWorldVisible(!isHomeWorldVisible)
  }

  return (
    <StyledDiv className='character-card' onClick={handleClick}>
      <h3 className='character-name'>{name}</h3>
      {/* Use the same markup with the same attributes as in the mock */
        isHomeWorldVisible  && <p> Planet: 
        <span className='character-planet'> {homeworld} </span></p>
      }
    </StyledDiv>
  )
}

export default Character
