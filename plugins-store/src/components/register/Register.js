import React, { Component } from 'react';
//import fireBase from './../../fireBase';
import firebase from 'firebase';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newAccount: {
                username: '',
                password: ''
            }
        };
        this.createAccount = this.createAccount.bind(this);
    }

    componentWillMount() {
    }

    createAccount(event) {
        event.preventDefault();
        console.log("CREATE ACCOUNT...");
        if (!this.state.newAccount.username || !this.state.newAccount.password) {
            console.log("[WARNING] Champs required");
            return;
        }
        let form = {
            username: this.state.newAccount.username,
            password: this.state.newAccount.password
        };
        console.log("Account " + JSON.stringify(form) + " Created");
        const item = firebase.auth().createUserWithEmailAndPassword(form.username, form.password)
            .then(function (user) {
                console.log("[USER] "+JSON.stringify(user, null, 2));
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // auth/weak-password---Password should be at least 6 characters
                // auth/email-already-in-use---The email address is already in use by another account.
                console.log("[USER] "+errorCode+"---"+errorMessage);
            });
        //debugger;
        console.log("Account " + item + " Created");
    }

    updateFormName(event) {
        const username = event.target.value;
        this.setState(prevState => ({
            newAccount: {
                ...prevState.newAccount,
                username
            }
        }))
    }

    /*updateFormPassword(event) {
        console.log("[INPUT] password...");
        this.setState({
            password: event.target.value
        })
    }*/
    updateFormPassword(event) {
        const password = event.target.value;
        this.setState(prevState => ({
            newAccount: {
                ...prevState.newAccount,
                password
            }
        }))
    }

    render() {
        return (
            <div className="row align-self-center">
                <div className="col d-none d-sm-none d-md-none"/>
                <div className="col justify-content-center">
                    <form onSubmit={this.createAccount}>
                        <div className="form-group">
                            <label htmlFor="ieInputUsername">Username</label>
                            <input type="text" className="form-control" id="ieInputUsername"
                                   value={this.state.newAccount.username}
                                   onChange={this.updateFormName.bind(this)} required
                                   placeholder="Entrer un username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="ieInputPassword">Password</label>
                            <input type="password" className="form-control" id="ieInputPassword"
                                   value={this.state.newAccount.password}
                                   onChange={this.updateFormPassword.bind(this)} required
                                   placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
                <div className="col d-none d-sm-none d-md-none"/>
            </div>
        );
    }
}

export default Register;