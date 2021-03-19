import React from "react";
import PropTypes from 'prop-types';

export const Countdown = ({ time }) => {
  return (
    <div className="content">
      <div>
        <p className="count">{('0' + Math.floor(time / 3600)).slice(-2)}</p>
        <span className="hor">hours</span>
      </div>
      <p className="count">:</p>
      <div>
        <p className="count">{('0' + Math.floor(time / 60) % 60).slice(-2)}</p>
        <span className="min">minutes</span>
      </div>
      <p className="count">:</p>
      <div>
        <p className="count">{('0' + (time % 60)).slice(-2)}</p>
        <span className="sec">seconds</span>
      </div>
    </div>
  );
};

Countdown.propTypes = {
  time: PropTypes.number.isRequired,
}
