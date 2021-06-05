import React from 'react';
// import StarRating from "../components/common/StarRating";

require('../assets/css/AddProfessorView.css')

const AddProfessorView: React.FC = () => (
    <div className="AddProfessorView">
        <div className="pseudo-navbar">MojProfesor</div>
        <div className="content">
            <header>Dodaj profesora</header>
            <div className="rowbox">
                <input type="text" className="name" placeholder="Imię"/>
                <input type="text" className="surname" placeholder="Nazwisko"/>
            </div>
            <input type="text" placeholder="Wydział"/>
            <input type="text" placeholder="Nazwa uczelni"/>
            <input type="text" placeholder="Miasto"/>
            <input type="text" placeholder="Przedmiot"/>
            <button type="submit">Dodaj profesora</button>
        </div>
    </div>
);

export default AddProfessorView;
