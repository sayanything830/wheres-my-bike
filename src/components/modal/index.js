import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div classname='complete'>
        <h3>You Finished!!</h3>
        Attempts: {this.props.attempts}
        <button type='button' onClick={this.props.reset}>Play Again</button>
      </div>
    );
  }
}

export default Modal;
