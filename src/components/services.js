import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Services extends Component {
    render() {
        return (
            <div>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <h2><u>How’s Your PMO?</u></h2>

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