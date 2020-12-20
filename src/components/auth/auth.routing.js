import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';

import { Login } from './login/Login';
import { Register } from './register/Register';
import { ForgotPassword } from './forgotpassword/ForgotPassword';
import { ResetPassword } from './resetpassword/ResetPassword';

const authRouting = () => {
    return (
        <div className="auth">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="auth-info">
                            <Link to="/home">
                                <img src={process.env.PUBLIC_URL + '/assets/images/rocket.png'} alt="lunch" />
                            </Link>
                            <h2>Welcome</h2>
                            <p>This Ecommerce App is available in multi platform JavaScript framework Angular, React and Vue.</p>
                            <ul>
                                <li>
                                    <a href="http://mini-ecommerce-react-app.herokuapp.com">
                                        <i className="fab fa-angular"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://mini-ecommerce-angular-app.herokuapp.com">
                                        <i className="fab fa-react"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://mini-ecommerce-vue-app.herokuapp.com">
                                        <i className="fab fa-vuejs"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <Switch>
                            <Route exact path="/auth/login" component={Login} />
                            <Route exact path="/auth/register" component={Register} />
                            <Route exact path="/auth/forgot-password" component={ForgotPassword} />
                            <Route exact path="/auth/reset-password" component={ResetPassword} />
                            <Redirect path="/auth/" to="/auth/login" />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default authRouting;