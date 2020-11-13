import React, { Component } from 'react';
import './Register.css'

export class Register extends Component {

    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            username: null,
            password: null,
        }
    }

    render() {
        return (
            <div className="register-form">
                <h2>Register</h2>
                <p>Please provide your details to register</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" id="fullname" name="fullname" className="form-control" />
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" className="form-control" />
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" className="form-control" />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" className="form-control" />
                        <button>Register Now</button>
                    </div>
                </form>
            </div>
        )
    }
}