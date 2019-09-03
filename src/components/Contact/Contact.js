import React, { Component } from 'react';
import axios from 'axios';
// internal components
import ContactErrors from './ContactErrors';

import './Contact.css';

import { MY_SERVER } from '../../constants/constants';

class Contact extends Component {
    state = {
        email: '',
        subject: '',
        message: '',
        name: '',
        hasMessageSent: false,
        emailSubmitted: '',
        errors: []
    };

    resetForm = () => {
        this.setState({ hasMessageSent: false });
    };

    sendEmail = () => {
        axios.post(`${MY_SERVER}/contact`, {
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message,
            name: this.state.name,
        }, { withCredentials: true }
        )
            .then(response => console.log(response))
            .catch(error => console.log(error.response));
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        this.setState({ errors: [] })
        event.preventDefault();
        if (this.state.email === '' || !this.state.email.includes('@')) {
            this.setState({ errors: [...this.state.errors, { id: 0, message: 'please enter a valid email' }] });
        };
        if (this.state.subject === '') {
            this.setState({ errors: [...this.state.errors, { id: 1, message: 'please enter a subject' }] });
        };
        if (this.state.message === '') {
            this.setState({ errors: [...this.state.errors, { id: 2, message: 'please enter a message' }] });
        };
        if (this.state.errors.length) {
            return this.setState({ hasMessageSent: false });
        } else {
            this.sendEmail();
            this.setState({ hasMessageSent: true, emailSubmitted: this.state.email });
        };
    };

    render() {
        return (
            <div className="contact">
                {this.state.errors.length !== 0 && <ContactErrors errors={this.state.errors} />}
                {this.state.hasMessageSent
                    ? <div>
                        <h1>Message has been sent with email {this.state.emailSubmitted}</h1>
                        <p>If this email is incorrect click
                            <span
                                style={{ cursor: 'pointer', color: 'blue' }}
                                onClick={this.resetForm} > here</span> to reset</p>
                    </div>
                    : <form>
                        <label>Name</label>
                        <input id="name" onChange={this.handleChange} name="name" type="text" value={this.state.name} placeholder="Your name..." />

                        <label>Email</label>
                        <input id="email" onChange={this.handleChange} name="email" type="text" value={this.state.email} />

                        <label>Subject</label>
                        <input id="subject" onChange={this.handleChange} name="subject" type="text" value={this.state.subject} />

                        <label>Message</label>
                        <input id="message" onChange={this.handleChange} name="message" type="text" value={this.state.message} />
                        <button onClick={this.handleSubmit}>Send</button>
                    </form>
                }
            </div>
        );
    };
};

export default Contact;