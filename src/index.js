import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal.js';
import './index.css';

class QuestionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wasAnswered: false,
    }
  }
  render() {
    if (this.state.wasAnswered)
      return (<button className="card wasAnswered">{this.props.value}</button>)
    return (
      <button onClick={this.toggleModal} className="card">{this.props.value}
      <Modal show={this.state.isOpen} onClose={this.toggleModal}>
        <div dangerouslySetInnerHTML={{
        __html: this.props.question
      }} />

      </Modal>
      </button>
    )
  }
  toggleModal = () => {
    var isOpen = this.state.isOpen
    if (isOpen) {
      this.setState({
        isOpen: false,
        wasAnswered: true,
      });
    } else {
      this.setState({
        isOpen: true,
        wasAnswered: false,
      });
    }

  }
}

class Column extends React.Component {
  render() {
    const {questions} = this.props;
    const items = questions.map((question, i) => <QuestionCard key={i} value={(i + 1) * 200} question={question}/>);
    //const items = []
    return (
      <div className="column">
        <h2>{this.props.name}</h2>
        {items}
      </div>)
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    }
  }
  componentDidMount() {
    fetch("games/java/content.json")
      .then(response => response.json())
      .then(data => this.setState({
        categories: data.categories
      }));
  }
  render() {
    const {categories} = this.state;
    const items = categories.map((catergory) => <Column key={catergory.name} name={catergory.name} questions={catergory.questions}/>);
    return ( <div id="board">{items}</div>);
  }
}



class PlayerScore extends React.Component {
  render() {
    return (
      <div className="playerScore">
        <b>{this.props.playerName}</b><br />
        <span className="score">{this.props.score}</span>
      </div>
    )
  }
}

class GameInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.getPlayers()
    }
  }
  render() {
    const playerScores = this.state.players.map((player) => <PlayerScore key={player} playerName={player} score="200" />)
    return (
      <div id="gameInfo">
      {playerScores}
      <button onClick={this.toggleFullscreen}>Fullscreen</button>
      </div>
    )
  }

  getPlayers() {
    return ["Fred", "Max", "Erik"]
  }

  toggleFullscreen() {
    var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
      (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
      (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
      (document.msFullscreenElement && document.msFullscreenElement !== null);

    var docElm = document.documentElement;
    if (!isInFullScreen) {
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
          <Board />
        <GameInfo />
      </div>
      );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
