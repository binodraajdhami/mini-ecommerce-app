import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import routes
import ScrollToTop from './components/reuseable-component/ScrollToTop';
import AuthRouting from './components/auth/auth.routing';
import AdminRouting from './components/admin/admin.routing';
import PageRouting from './components/public/pages/pages.routing';
import ShoppingRouting from './components/shopping/shopping.routing';

const AppRouting = () => {
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route path="/admin" component={AdminRouting} />
                <Route path="/auth" component={AuthRouting} />
                <Route path="/shopping" component={ShoppingRouting} />
                <Route path='/' component={PageRouting} />
            </Switch>
        </Router>
    );
}

export default AppRouting;