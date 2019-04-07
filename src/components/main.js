import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Services from './services';
import OurProcess from './ourprocess';
import Contact from './contact';
const Main = () => (
    <Switch>
        <Route exact path="/" component = {LandingPage} />
        <Route exact path="/services" component = {Services} />
        <Route exact path="/ourprocess" component = {OurProcess} />
        <Route exact path="/contact" component = {Contact} />

    </Switch>
)
export default Main;