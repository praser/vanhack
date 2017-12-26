import PropTypes from 'prop-types';
import React from 'react';

const Container = props => (
  <div className="row">
    <div className={`col z-depth-5 ${props.grid}`}>
      <div className="row">
        <div className="col s12">
          <h5 className="center">{ props.title }</h5>
          { props.children }
        </div>
      </div>
    </div>
  </div>
);

Container.propTypes = {
  grid: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

Container.defaultProps = {
  grid: 's12',
};

export default Container;
