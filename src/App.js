import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from "./components/main";
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">SPP&M</Link>} scroll>
            <Navigation>
              <a href="/ourprocess">Our Process</a>
              <a href="/contact">Contact Us</a>
              <a href="/about">About Us</a>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">SPP&M</Link>}>
            <Navigation>
              <a href="/ourprocess">Our Process</a>
              <a href="/contact">Contact Us</a>
              <a href="/about">About Us</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main></Main>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
