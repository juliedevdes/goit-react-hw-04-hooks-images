import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";
import "./ImageGallery.scss";
import PropTypes from "prop-types";

export default class ImageGallery extends React.Component {
  static propTypes = {
    imagesArray: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number.isRequired })
    ),
    onBtnClick: PropTypes.func.isRequired,
    onImgClick: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <ul className="ImageGallery">
          {this.props.imagesArray.map((img) => (
            <ImageGalleryItem
              img={img}
              key={img.id}
              onClick={this.props.onImgClick}
            />
          ))}
        </ul>
        {this.props.imagesArray.length !== 0 && (
          <Button onBtnClick={this.props.onBtnClick} />
        )}
      </div>
    );
  }
}
