import React from 'react';
import { connect } from 'react-redux';
import { renderIf } from '../../lib/utils';
import { checkForMatch, replay } from '../../actions/game-action';
import Card from '../card';
import Modal from '../modal';

class Memory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
    };

    this.handleFlip = this.handleFlip.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }


  handleFlip() {
    let clicks = this.state.clicks;
    clicks ++;
    this.setState({
      clicks: clicks,
    });
    if(clicks % 2 === 0) {
      setTimeout(() => this.props.checkForMatch(), 1000);
    }
  }

  handleReset() {
    this.setState({
      clicks: 0,
    });
    return this.props.replayGame();
  }


  render() {
    // console.log('__MEMORY_PROPS__', this.props);
    return(
      <div>
        <ul>
          {renderIf(this.props.game.cards, this.props.game.cards.map(card =>
            <Card
              flipcard={this.handleFlip}
              key={card.id}
              id={card.id}
              matched={card.matched}
              selected={card.isSelected}
              value={card.value}
              className={card.className}/>))}
        </ul>
        {renderIf(this.props.game.totalMatches === 8,
          <Modal
            message='You Finished!!'
            replay={this.handleReset}
            attempts={this.props.game.totalAttempts} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  game: state.game,
});

const mapDispatchToProps = dispatch => ({
  onSelect: cardId => dispatch(isSelected(cardId)),
  checkForMatch: () => dispatch(checkForMatch()),
  replayGame: () => dispatch(replay()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Memory);
