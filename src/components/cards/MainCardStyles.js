import styled from 'styled-components'

const MainCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  border: 2px solid ${(props) => props.theme.h1};
  border-radius: 5px;
  height: 90%;
  width: 17rem;
  margin: 0.5rem;

  button {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.h1};
    max-width: 100%;
  }
`

export default MainCardStyles
