import React from 'react';
import Memory from '../memory-game';
import { renderIf } from '../../lib/utils';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      play: false,
      class: 'show',
    };

    this.playGame = this.playGame.bind(this);
  }

  playGame() {
    this.setState({
      play: true,
      class: 'hide',
    });
  }

  render() {

    return(
      <div>
        <h1>Welcome to Where's My Bike</h1>
        <h2>a memory card game</h2>
        <button type='button' className={this.state.class} onClick={this.playGame}>Click to Play</button>

        {renderIf(this.state.play, <Memory />)}
      </div>
    );
  }
}

export default Landing;
