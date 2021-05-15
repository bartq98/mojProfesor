import React from 'react';
import logo from 'assets/img/logo.svg';
import 'assets/css/App.css';
import { Register } from '../components/login';

const RegisterView: React.FC = () => (
    <div className="App">
        <Register />
        {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit 
                <code> src/App.tsx </code>
                and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer">
                Learn Reaaaaaact
            </a>
        </header> */}
    </div>
);

export default RegisterView;
