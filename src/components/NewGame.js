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
      [<button key={id} button onClick={(e) => removePlayer(id)} type="button">{players.byId[id].name}</button>, <span className="highlight">/</span>]
      )
    })


    return (
      <Overlay>
      <div id="playerSelection" >
      <div className="header">
        <h1>JEOPARDY</h1>
        <h2>PLAYERS<span className="highlight">*</span></h2>
        <hr />
      </div>
<form onSubmit={(e) => this.onSubmit(e)} id="nameInput">
        <div id="playerList">
        {playerList}
        </div>

          <input type="text" value={this.state.nameInputValue} onChange={(e) => this.updateInputValue(e)}/>

        </form>
</div>
      <div id="footer">

      <button type="button" disabled={players.allIds.length < 2} onClick={(e) => {
        start()
      }}>Start</button>
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
