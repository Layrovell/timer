import React from 'react';
import PropTypes from "prop-types";

export const Buttons = ({ onStartStop, onWait, onReset }) => {
  return (
    <div className="buttons">
      <button
        onClick={onStartStop}
        className="button is-link is-outlined is-small"
      >
        Start/Stop
      </button>
      <button
        onDoubleClick={onWait}
        className="button is-link is-outlined is-small"
      >
        Wait
      </button>
      <button
        onClick={onReset}
        className="button is-link is-outlined is-small"
      >
        Reset
      </button>
    </div>
  );
};

Buttons.propTypes = {
  onStartStop: PropTypes.func.isRequired,
  onWait: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
}
