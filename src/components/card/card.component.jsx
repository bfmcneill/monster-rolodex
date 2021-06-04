import styled from 'styled-components'

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #95dada;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  &:hover{
    transform: scale(1.05); 
  }
`
export function Card(props){
    const {monster} = props
    const url = `https://robohash.org/${monster.id}?set=set2&size=180x180`
    return (
        <StyledCard>
            <img src={url} alt={monster.name} />
            <h1>{monster.name}</h1>      
            <p>{monster.email}</p>      
        </StyledCard>
    )
}
