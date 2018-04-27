import React from 'react'
import { connect } from "react-redux";
import { addPlayer, removePlayer } from '../actions/players'
import { switchGameState, GAME_STATE_LOADING } from '../actions/gameState'

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
        <div key={id}>
        {players.byId[id].name} <button onClick={(e) => removePlayer(id)} type="button">X</button>
      </div>
      )
    })


    return (
      <div className="overlay">
      <form className="playerSelection" onSubmit={(e) => {
        this.onSubmit(e)
      }}>
        <h1> Jeopardy </h1>
        <h1> Player Selection </h1>
        {playerList}
        <input type="text" value={this.state.nameInputValue} onChange={(e) => this.updateInputValue(e)}/>
        <button disabled={this.state.nameInputValue === ''} type="button" onClick={(e) => {
        this.onSubmit(e)
      }}>Add player</button>
      </form>
      <button disabled={players.allIds.length < 2} onClick={(e) => {
        start()
      }}>Start</button>
      </div>
    )
  }

  onSubmit(e) {
    e.preventDefault();
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
