import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterLinkList, FooterSection } from 'react-mdl';
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
          <Footer size="mini">
            <FooterSection type="left" logo="SPP&M © 2019">
              <FooterLinkList>
                <a href="#">Help</a>
                <a href="#">Privacy & Terms</a>
              </FooterLinkList>
            </FooterSection>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
