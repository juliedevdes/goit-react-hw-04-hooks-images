import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";

export default class Button extends React.Component {
  static propTypes = {
    onBtnClick: PropTypes.func.isRequired,
  };

  render() {
    return (
      <button className="Button" type="button" onClick={this.props.onBtnClick}>
        Load More
      </button>
    );
  }
}
