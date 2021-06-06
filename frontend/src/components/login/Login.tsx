import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import login from 'assets/img/login.png';
import logo from 'assets/img/logo.png';
import * as dal from 'dal';
import {notification} from 'antd';
import {authSlice} from 'store/slices/authSlice';
import {useDispatch} from 'react-redux';

export const Login: React.VFC = () => {
    const [state, setState] = useState({
        email: '',
        password: '',
    });
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmitClick = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        await dal.auth
            .login({ email: state.email, password: state.password })
            .then(res => res.data)
            .then(() => {
                notification.success({ message: 'Pomyślnie zalogowano' });
                dispatch(authSlice.actions.setUser({ email: state.email }));
                history.push('/');
            })
            .catch(() =>
                notification.error({ message: 'Nie udało się zalogować' })
            );
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
                    <Link to="/register">
                        <button type="button" className="btn-txt btn">
                            Zarejestruj się
                        </button>
                    </Link>
                </form>
                <div className="image">
                    <img src={login} alt="" />
                </div>
            </div>
        </div>
    );
};
