import React from 'react';

class Modal extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    console.log('__MODAL_PROPS__', this.props);
    return(
      <div classname='complete'>
        <h3>{this.props.message}</h3>
        Attempts: {this.props.attempts}
        <button onClick={this.props.replay}>Play Again</button>
      </div>
    );
  }
}

export default Modal;
