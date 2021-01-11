import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AdminDashboard from './admin-dashboard/AdminDashboard';

const AdminRouting = () => {
    return (
        <Switch>
            <Route exact path="/admin/dashboard" component={AdminDashboard} />
            <Redirect path="/admin" to="/home" />
        </Switch>
    );
};

export default AdminRouting;