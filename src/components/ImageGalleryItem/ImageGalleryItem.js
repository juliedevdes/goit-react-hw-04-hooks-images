import "./ImageGalleryItem.scss";
import PropTypes from "prop-types";

export default function ImageGalleryItem({ img, onClick }) {
  return (
    <li className="ImageGalleryItem" key={img.id}>
      <img
        src={img.webformatURL}
        alt={img.tags}
        onClick={() => {
          onClick(img);
        }}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  img: PropTypes.shape({ id: PropTypes.number.isRequired }),
  onClick: PropTypes.func,
};
