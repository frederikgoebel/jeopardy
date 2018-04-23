import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {


  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    const modalRoot = document.getElementById('modal-root');
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    const modalRoot = document.getElementById('modal-root');
    modalRoot.removeChild(this.el);
  }
  render() {
    if (this.props.show) {
      return (ReactDOM.createPortal(
        <div className="backdrop">
          <div className="modal">
            {this.props.children}
          </div>
        </div>,
        this.el
      ))
    }
    else
      return null
  }
}

export default Modal;
