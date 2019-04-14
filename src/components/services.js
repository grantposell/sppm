import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import cx from 'classnames';
import Collapse from '@kunukn/react-collapse';


class Services extends Component {
  state = {
    isOpen1: false,
    isOpen2: false,
    isOpen3: false,
    isOpen4: false,
    isOpen5: false,
    isOpen6: false,
  }
  render() {
    return (
      <div className="app">
        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen1
          })}
          onClick={() => this.toggle(1)}
        >
          <span className="app__toggle-text">How’s Your PMO?</span>
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen1 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>
        <Collapse
          isOpen={this.state.isOpen1}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen1 ? "app__collapse--active" : "")
          }
        >
          <div className="app__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </Collapse>
        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen2
          })}
          onClick={() => this.toggle(2)}
        >
          <span className="app__toggle-text">Project Initiation and Readiness</span>
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen1 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>
        <Collapse
          isOpen={this.state.isOpen2}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen2 ? "app__collapse--active" : "")
          }
        >
          <div className="app__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </Collapse>
        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen3
          })}
          onClick={() => this.toggle(3)}
        >
          <span className="app__toggle-text">Project Planning</span>
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen3 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>
        <Collapse
          isOpen={this.state.isOpen3}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen3 ? "app__collapse--active" : "")
          }
        >
          <div className="app__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </Collapse>
        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen4
          })}
          onClick={() => this.toggle(4)}
        >
          <span className="app__toggle-text">Project Scheduling</span>
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen4 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>
        <Collapse
          isOpen={this.state.isOpen4}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen4 ? "app__collapse--active" : "")
          }
        >
          <div className="app__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </Collapse>
        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen5
          })}
          onClick={() => this.toggle(5)}
        >
          <span className="app__toggle-text">Project Execution</span>
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen4 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>
        <Collapse
          isOpen={this.state.isOpen5}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen5 ? "app__collapse--active" : "")
          }
        >
          <div className="app__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </Collapse>
        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen6
          })}
          onClick={() => this.toggle(6)}
        >
          <span className="app__toggle-text">Project Completion and Documentation</span>
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen4 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>
        <Collapse
          isOpen={this.state.isOpen6}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen6 ? "app__collapse--active" : "")
          }
        >
          <div className="app__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </Collapse>
      </div>
    );
  }
  toggle = index => {
    let collapse = "isOpen" + index;

    this.setState(prevState => ({ [collapse]: !prevState[collapse] }));
  };
}
export default Services;