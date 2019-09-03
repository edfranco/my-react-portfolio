import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
// internal components
import Home from '../components/Home/Home';
import Resume from '../components/Resume/Resume';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import PortfolioContainer from '../containers/PortfolioContainer/PortfolioContainer';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={PortfolioContainer} />
            <Route path="/project/:name" render={(props) => <PortfolioContainer {...props} projectName={props.match.params.name} />} />
        </Switch>
    );
};

export default withRouter(Routes);
