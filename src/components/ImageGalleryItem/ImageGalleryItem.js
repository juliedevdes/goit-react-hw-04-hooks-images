import React from "react";
import "./ImageGalleryItem.scss";
import PropTypes from "prop-types";

export default class ImageGalleryItem extends React.Component {
  static propTypes = {
    img: PropTypes.shape({ id: PropTypes.number.isRequired }),
  };

  onClick = () => {
    this.props.onClick(this.props.img);
  };

  render() {
    return (
      <li className="ImageGalleryItem" key={this.props.img.id}>
        <img
          src={this.props.img.webformatURL}
          alt={this.props.img.tags}
          onClick={this.onClick}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}
