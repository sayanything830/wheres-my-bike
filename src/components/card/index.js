import React from 'react';
import { connect } from 'react-redux';
import { isSelected } from '../../actions/game-action';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if(!this.props.matched && !this.props.isSelected) {
      this.props.onSelect(this.props.id);
    }
  }

  handleClick(event) {
    this.onClick();
    this.props.flipcard();
  }

  render() {

    return(
      <li
        matched={this.props.matched ? 'true' : undefined}
        selected={this.props.isSelected ? 'true' : undefined}
        className={this.props.className}
        id={this.props.id}
        value={this.props.value}
        onClick={this.handleClick}>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSelect: cardId => dispatch(isSelected(cardId)),
});

export default connect(null, mapDispatchToProps)(Card);
