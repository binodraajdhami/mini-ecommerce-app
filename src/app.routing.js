import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import routes
import AuthRouting from './components/auth/auth.routing'
import PageRouting from './components/public/pages/pages.routing'

const AppRouting = () => {
    return (
        <Router>
            <Switch>
                <Route path="/auth" component={AuthRouting} />
                <Route path='/' component={PageRouting} />
            </Switch>
        </Router>
    );
}

export default AppRouting;