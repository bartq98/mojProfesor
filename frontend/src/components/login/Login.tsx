import React, { useState } from 'react';
import login from 'assets/img/login.png';
import logo from 'assets/img/logo.png';

export const Login: React.VFC = () => {
    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmitClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        console.log(state.email);
    };

    return (
        <div className="base-container">
            <div className="content login-content">
                <form className="login-form">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <h1>Zaloguj się</h1>
                    <input
                        type="text"
                        id="email"
                        placeholder="Email"
                        value={state.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Hasło"
                        value={state.password}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="btn"
                        onClick={handleSubmitClick}
                    >
                        Zaloguj się
                    </button>
                    <p>Nie masz jeszcze konta?</p>
                    <button type="button" className="btn-txt btn">
                        Zarejestruj się
                    </button>
                </form>
                <div className="image">
                    <img src={login} alt="" />
                </div>
            </div>
        </div>
    );
};
