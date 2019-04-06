import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style ={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <div class="container">
                    <img 
                    src={require('../assets/images/planning.jpeg')}
                    alt="Our Services"
                    className="landing-img"
                    />
                    <div class="header-left"><em>Over 30 years of Project Management Excellence</em></div>
                    </div>
                    <h2><u>Introduction</u></h2>
                    <h2><u>What we do and how we do it.</u></h2>
                    <h2><u>Introduction</u></h2>

                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default LandingPage;