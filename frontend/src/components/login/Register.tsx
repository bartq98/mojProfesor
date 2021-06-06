import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import login from 'assets/img/login.png';
import logo from 'assets/img/logo.png';
import * as dal from 'dal';

export const Register = () => {
    const [state, setState] = useState<IRegisterModel>({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const history = useHistory();

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
        if (state.password === state.confirmPassword) {
            dal.user
                .addUser({
                    email: state.email,
                    password: state.password,
                    role: 'ROLE_USER',
                })
                .then(() => history.push('/'));
        } else {
            console.log('err');
        }
    };

    return (
        <div className="base-container">
            <div className="content register-content">
                <div className="image">
                    <img src={login} alt="" />
                </div>
                <form className="register-form">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <h1>Zarejestruj się</h1>
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
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Potwierdź hasło"
                        value={state.confirmPassword}
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        className="btn"
                        onClick={handleSubmitClick}
                    >
                        Zarejestruj się
                    </button>
                    <p>Posiadasz już konto?</p>
                    <Link to="/login">
                        <button type="button" className="btn-txt btn">
                            Zaloguj się
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
};
