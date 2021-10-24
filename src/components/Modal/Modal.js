import React from "react";
import "./Modal.scss";
import PropTypes from "prop-types";

export default class Modal extends React.Component {
  static propTypes = {
    img: PropTypes.shape({ id: PropTypes.number.isRequired }),
    toggleModal: PropTypes.func.isRequired,
  };

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.toggleModal();
    }
  };

  closeModal = (e) => {
    if (e.target === e.currentTarget) {
      this.props.toggleModal();
    }
  };
  render() {
    return (
      <div className="Overlay" onClick={this.closeModal}>
        <div className="Modal">
          <img src={this.props.img.largeImageURL} alt={this.props.img.tags} />
        </div>
      </div>
    );
  }
}
