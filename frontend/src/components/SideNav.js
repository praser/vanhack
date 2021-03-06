import React, { Component } from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import If from './If';
import backgroundImage from '../assets/images/sidenav-background.jpg';
import avatar from '../assets/images/avatar.png';

class SideNav extends Component {
  componentDidMount() {
    this.initComponent();
  }

  componentDidUpdate() {
    this.initComponent();
  }

  getAvatar() {
    if (!this.props.user.avatar) {
      return avatar;
    }

    return this.props.user.avatar;
  }

  initComponent() {
    $('.button-collapse').sideNav({
      menuWidth: this.props.menuWidth,
      edge: this.props.edge,
      closeOnClick: this.props.closeOnClick,
      draggable: this.props.draggable,
      onOpen: this.props.onOpen,
      onClose: this.props.onClose,
    });
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="side-nav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src={backgroundImage} width={this.props.menuWidth} alt="Material Background" />
              </div>
              <a href="#!user"><img
                className="circle"
                src={this.getAvatar()}
                alt="User avatar"
              />
              </a>
              <a href="#!name">
                <span className="white-text name">{this.props.user.name}</span>
              </a>
              <a href="#!email">
                <span className="white-text email">{this.props.user.email}</span>
              </a>
            </div>
          </li>
          <li>
            <NavLink to="/logout" className="waves-effect">
              <i className="material-icons">directions_run</i>
              Logout
            </NavLink>
          </li>
          
          <li><div className="divider" /></li>
          
          <li>
            <NavLink to="/dashboard" className="waves-effect">
              <i className="material-icons">dashboard</i>
              Dashboard
            </NavLink>
          </li>
        </ul>
        <If test={Object.keys(this.props.user).length !== 0}>
          <button href="#" data-activates="slide-out" className="button-collapse right">
            <i className="material-icons">account_circle</i>
          </button>
        </If>
      </div>
    );
  }
}

SideNav.propTypes = {
  closeOnClick: PropTypes.bool,
  draggable: PropTypes.bool,
  edge: PropTypes.string,
  menuWidth: PropTypes.number,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  user: PropTypes.object.isRequired,
};

SideNav.defaultProps = {
  menuWidth: 300,
  edge: 'left',
  closeOnClick: true,
  draggable: true,
  onOpen: PropTypes.undefined,
  onClose: PropTypes.undefined,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(SideNav);
