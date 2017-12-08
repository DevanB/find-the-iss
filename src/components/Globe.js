import React from 'react';
import { connect } from 'react-redux';

import ISS from 'assets/ISS.png';

const Globe = ({ small, x = -50, y }) => (
  <div className={`globe${small ? ' globe--small' : ''}`}>
    {small ||
      <div>
      <img
        alt="International Space Station"
        className="globe-iss"
        src={ISS}
      />
      <div
        className="globe-trace"
        style={{ height: `calc(${y + 50}% + 96px)` }}
      />
      </div>
    }
    <div className="globe-crop">
      <div
        className="globe-map"
        style={{ transform: `translateX(${x}%)` }}
      />
      <div
        className="globe-markercontainer"
        style={{ transform: `translateY(${y}%)` }}
      >
        <div className="globe-marker" />
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  x: state.mapTranslation.x,
  y: state.mapTranslation.y,
});

export default connect(
  mapStateToProps,
  dispatch => ({ dispatch }),
)(Globe);
