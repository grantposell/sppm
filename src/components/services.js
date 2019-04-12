import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Collapse from '@kunukn/react-collapse';



class Services extends Component {
    render() {
        return (
            <div>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <Collapse className='collapse-css-transition' isOpen={false || true}>
                            <p>Paragraph of text</p>
                            <p>Another paragraph is also OK</p>
                            <p>Images and any other content are ok too</p>
                            <img src="cutecat.gif" />
                        </Collapse>
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