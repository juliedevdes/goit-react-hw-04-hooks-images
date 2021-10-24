import { useEffect } from "react";

import "./Modal.scss";
import PropTypes from "prop-types";

export default function Modal({ img, toggleModal }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    console.log("handleKeyDown");
    if (e.code === "Escape") {
      toggleModal();
    }
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={img.largeImageURL} alt={img.tags} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  img: PropTypes.shape({ id: PropTypes.number.isRequired }),
  toggleModal: PropTypes.func.isRequired,
};
