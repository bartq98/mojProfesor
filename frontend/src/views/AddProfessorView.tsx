import {notification} from 'antd';
import React, {useState} from 'react';
import * as dal from 'dal';

import 'assets/css/AddProfessorView.css';

const AddProfessorView: React.FC = () => {
    const [title, setTitle] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');

    const onProfessorSave = async () => {
        if (!title)
            return notification.warn({
                message: 'Nie dodano tytułu naukowego',
            });
        if (!lastName)
            return notification.warn({ message: 'Nie podano nazwiska' });
        if (!firstName)
            return notification.warn({ message: 'Nie podano imienia' });

        return dal.professor
            .addProfessor({
                academicTitle: title,
                firstName,
                lastName,
            })
            .then(res => res.data)
            .then((details: any) => {
                console.log(details);
                notification.success({ message: 'Pomyślnie dodano profesora' });
            })
            .catch(() =>
                notification.error({ message: 'Nie udało się dodać profesora' })
            );
    };

    return (
        <div className="AddProfessorView">
            <div className="content">
                <header>Dodaj profesora</header>
                <div className="rowbox">
                    <input
                        type="text"
                        className="name"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        placeholder="Imię"
                    />
                    <input
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        className="surname"
                        placeholder="Nazwisko"
                    />
                </div>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Tytuł naukowy"
                />
                {/* <input type="text" placeholder="Wydział" /> */}
                {/* <input type="text" placeholder="Nazwa uczelni" /> */}
                {/* <input type="text" placeholder="Miasto" /> */}
                {/* <input type="text" placeholder="Przedmiot" /> */}
                <button onClick={onProfessorSave} type="submit">
                    Dodaj profesora
                </button>
            </div>
        </div>
    );
};

export default AddProfessorView;
