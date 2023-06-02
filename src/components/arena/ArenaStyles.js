import styled from 'styled-components'

const ArenaStyles = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => (props.textColor ? props.textColor : props.theme.text)};

  height: 90vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .player-1-cards {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.text};
    height: 35vh;
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border: 1px dashed black;
  }

  .player-2-cards {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.text};
    height: 35vh;
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border: 1px dashed black;
  }
`

export default ArenaStyles
