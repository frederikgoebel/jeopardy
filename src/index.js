import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import Game from './components/Game'
import './index.css';

const initstate = {
  questions: {
    active: null,
    byId: {
      "question1": {
        value: 200,
        isAnswered: false,
        text: "What x?"
      },
      "question2": {
        "value": 400,
        isAnswered: false,
        text: "What x?"
      },
      "question3": {
        value: 200,
        isAnswered: false,
        text: "What x?"
      },
      "question4": {
        "value": 400,
        isAnswered: false,
        text: "What x?"
      }
    },

    allIds: ["question1", "question2", "question3", "question4"]
  },
  categories: {
    byId: {
      "catergory1": {
        name: "Test Cat",
        questions: ["question1", "question2"]
      },
      "catergory2": {
        name: "Test Cat",
        questions: ["question3", "question4"]
      }
    },
    allIds: ["catergory1", "catergory2"]
  },
  players: {
    byId: {
      "player1": {
        name: "Fred",
        score: 200
      },
      "player2": {
        name: "Erik",
        score: 400
      }
    },
    allIds: ["player1", "player2"]
  },
  overlays: {
    question: {
      isActive: false
    },
    points: {
      isActive: false
    }
  }
}

const store = createStore(
  rootReducer,
  initstate,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
