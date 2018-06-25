import React from 'react';
import {connect} from 'react-redux';
import {
  resetGame, 
  setAural
} from '../actions';

import './top-nav.css';

export class TopNav extends React.Component {
  restartGame() {
    this.props.dispatch(resetGame());
  }

  generateAuralUpdate() {
    const { guesses, feedback } = this.props;

    // If there's not exactly 1 guess, we want to
    // pluralize the nouns in this aural update.
    const pluralize = guesses.length !== 1;

    let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

    if (guesses.length > 0) {
      auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
    }

    this.props.dispatch(setAural(auralStatus));
  }

  render() {
    return (
      <nav>
        <ul className="clearfix">
          <li>
            <a 
              href="#what" 
              className="what"
              aria-label="How to play"
            >
              What?
            </a>
          </li>
          <li>
            <a
              href="#feedback"
              className="new"
              aria-label="Start a new game"
              onClick={() => this.restartGame()}
            >
              + New Game
            </a>
          </li>
          <li>
            <a
              href="#get-status"
              /* the `visuallyhidden` class hides an element 
              while leaving it available to screen reader users  */
              className="visuallyhidden focusable status-link"
              onClick={() => this.generateAuralUpdate()}
            >
              Hear state of game
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  feedback: state.feedback,
  guesses: state.guesses
});

export default connect(mapStateToProps)(TopNav);