import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import cx from "classnames";
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
            <img
              className="image"
              alt="random"
              src="https://source.unsplash.com/user/erondu/500x200"
            />
            <button onClick={() => this.toggle(1)} className="app__button">
              close
            </button>
          </div>
        </Collapse>

        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen2
          })}
          onClick={() => this.toggle(2)}
        >
          toggle
        </button>

        <Collapse
          isOpen={this.state.isOpen2}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen2 ? "app__collapse--active" : "")
          }
          transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
          aria-hidden={this.state.isOpen2 ? "false" : "true"}
          elementType="article"
          render={collapseState => (
            <React.Fragment>
              <div className="app__content">
                <div>{collapseState}</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <img
                  className="image"
                  alt="random"
                  src="https://source.unsplash.com/user/erondu/500x200"
                />
                <button onClick={() => this.toggle(2)} className="app__button">
                  close
                </button>
              </div>
            </React.Fragment>
          )}
        />
        <Grid className="landing-grid">
          <Cell col={12}>
            <Collapse className='collapse-css-transition' isOpen={false || true}>
              <p>Paragraph of text</p>
              <p>Another paragraph is also OK</p>
              <p>Images and any other content are ok too</p>
              <img src="cutecat.gif" />
            </Collapse>
            <h2><u></u></h2>

            <h2><u>Project Initiation and Readiness</u></h2>
            <h2><u>Project Planning</u></h2>

            <h2><u> Project Scheduling</u></h2>

            <h2><u> Project Execution</u></h2>
            <h2><u>Project Completion and Documentation</u></h2>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Services;