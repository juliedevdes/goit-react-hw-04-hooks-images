import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";

import "./ImageGallery.scss";

import PropTypes from "prop-types";

export default function ImageGallery({ imagesArray, onBtnClick, onImgClick }) {
  return (
    <div>
      <ul className="ImageGallery">
        {imagesArray.map((img) => (
          <ImageGalleryItem img={img} key={img.id} onClick={onImgClick} />
        ))}
      </ul>
      {imagesArray.length !== 0 && <Button onBtnClick={onBtnClick} />}
    </div>
  );
}

ImageGallery.propTypes = {
  imagesArray: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
  onBtnClick: PropTypes.func.isRequired,
  onImgClick: PropTypes.func.isRequired,
};
