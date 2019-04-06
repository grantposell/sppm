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
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default LandingPage;