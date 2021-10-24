import "./Button.scss";
import PropTypes from "prop-types";

export default function Button({ onBtnClick }) {
  return (
    <button className="Button" type="button" onClick={onBtnClick}>
      Load More
    </button>
  );
}

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};
