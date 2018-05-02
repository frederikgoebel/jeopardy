import React from 'react'
import { connect } from "react-redux";
import { addPlayer, removePlayer } from '../actions/players'
import { switchGameState, GAME_STATE_LOADING } from '../actions/gameState'
import Overlay from './Overlay'
import "./NewGame.css"

class PlayerSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInputValue: ''
    };
  }
  render() {
    const {players, removePlayer, start} = this.props;
    const playerList = players.allIds.map((id) => {
      return (
        <div className="playerEntry" key={id}>
        <span>{players.byId[id].name}</span> <button onClick={(e) => removePlayer(id)} type="button">remove</button>
      </div>
      )
    })


    return (
      <Overlay>
      <div id="playerSelection">
      <div className="header">
        <h1>Jeopardy</h1>
        <h2>Player Selection</h2>
      </div>
        <div id="nameInput">
          <input type="text" value={this.state.nameInputValue} onChange={(e) => this.updateInputValue(e)}/>
          <button disabled={this.state.nameInputValue === ''} type="button" onClick={(e) => {
        this.onSubmit(e)
      }}>Add player</button>
        </div>

        <div id="playerList">
        {playerList}
        </div>

      <div className="footer">

      <button type="button" disabled={players.allIds.length < 2} onClick={(e) => {
        start()
      }}>Start</button>
      </div>
</div>
      </Overlay>
    )
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.nameInputValue === '')
      return
    this.resetInputValue();
    this.props.addPlayer(this.state.nameInputValue)
  }

  updateInputValue(e) {
    this.setState({
      nameInputValue: e.target.value
    });
  }
  resetInputValue() {
    this.setState({
      nameInputValue: ''
    });
  }
}

const mapStateToProps = state => {
  return {
    players: state.players
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addPlayer: (name) => {
      dispatch(addPlayer(name))
    },
    removePlayer: (id) => {
      dispatch(removePlayer(id))
    },
    start: () => {
      dispatch(switchGameState(GAME_STATE_LOADING))
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerSelection)
