import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Register extends Component {

    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            phone: null,
            username: null,
            password: null,
            confirmPssword: null,
            gender: null,
            dob: null,
            nameError: null,
            emailError: null,
            phoneError: null,
            usernameError: null,
            passwordError: null,
            confirmPsswordError: null,
            genderError: null,
            dobError: null
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleError = () => {
        let nameError;
        nameError = this.state.name ? null : 'Name is required';
        this.setState({ nameError });

        let usernameError;
        usernameError = this.state.username ? null : 'Username is required';
        this.setState({ usernameError });

        let emailError;
        emailError = this.state.email
            ? this.state.email.includes('@')
                ? null
                : 'Invalid Email format'
            : 'Email is required'
        this.setState({ emailError });

        let phoneError;
        phoneError = this.state.phone ? null : 'Phone is required';
        this.setState({ phoneError });

        let genderError;
        genderError = this.state.gender ? null : 'Gender is required';
        this.setState({ genderError });

        let dobError
        dobError = this.state.dob ? null : 'Date of birth is required';
        this.setState({ dobError });

        let passwordError;
        passwordError = this.state.password ? null : 'Password is required';
        this.setState({ passwordError });

        let confirmPsswordError;
        confirmPsswordError = this.state.confirmPssword ? null : 'Confirm Password is required';
        this.setState({ confirmPsswordError });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.handleError();
    }

    render() {
        return (
            <div className="auth-content-block register-content-block">
                <h2 className="form-title">Register as a Customer</h2>
                <form className="form" method="POST" onSubmit={this.handleSubmit} noValidate>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-6">
                                <input type="text" name="name" placeholder="Full Name *" className="form-control" onChange={this.handleChange} />
                                {
                                    this.state.nameError !== null
                                        ? <div className="alert alert-danger">{this.state.nameError}</div>
                                        : ''
                                }
                                <input type="text" name="username" placeholder="Username *" className="form-control" onChange={this.handleChange} />
                                {
                                    this.state.usernameError !== null
                                        ? <div className="alert alert-danger">{this.state.usernameError}</div>
                                        : ''
                                }
                                <input type="email" name="email" placeholder="Email *" className="form-control" onChange={this.handleChange} />
                                {
                                    this.state.emailError !== null
                                        ? <div className="alert alert-danger">{this.state.emailError}</div>
                                        : ''
                                }
                                <input type="number" name="phone" placeholder="Phone *" className="form-control" onChange={this.handleChange} />
                                {
                                    this.state.phoneError !== null
                                        ? <div className="alert alert-danger">{this.state.phoneError}</div>
                                        : ''
                                }
                            </div>
                            <div className="col-sm-6">
                                <select name="gender" className="form-control" onChange={this.handleChange} >
                                    <option>Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                {
                                    this.state.genderError !== null
                                        ? <div className="alert alert-danger">{this.state.genderError}</div>
                                        : ''
                                }
                                <input type="date" name="dob" className="form-control" onChange={this.handleChange} />
                                {
                                    this.state.dobError !== null
                                        ? <div className="alert alert-danger">{this.state.dobError}</div>
                                        : ''
                                }
                                <input type="password" name="password" placeholder="Password" className="form-control" onChange={this.handleChange} />
                                {
                                    this.state.passwordError !== null
                                        ? <div className="alert alert-danger">{this.state.passwordError}</div>
                                        : ''
                                }
                                <input type="password" name="confirmPssword" placeholder="Confirm Password" className="form-control" onChange={this.handleChange} />
                                {
                                    this.state.confirmPsswordError !== null
                                        ? <div className="alert alert-danger">{this.state.confirmPsswordError}</div>
                                        : ''
                                }
                            </div>
                            <div className="col-sm-12">
                                <p>Already have an account? <Link to="/auth/login">Login</Link></p>
                            </div>
                            <div className="col-sm-12">
                                <button type="submit" className="btn btn-info">Register Now</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}