import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/css/Loading.css';
import If from './If';

const Loading = props => (
  <If test={props.loading} >
    <div className="loading">
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-blue">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>

        <div className="spinner-layer spinner-red">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>

        <div className="spinner-layer spinner-yellow">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>

        <div className="spinner-layer spinner-green">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
      </div>
    </div>
  </If>
);

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const MapStateToProps = state => ({
  loading: state.loading,
});

export default connect(MapStateToProps)(Loading);
