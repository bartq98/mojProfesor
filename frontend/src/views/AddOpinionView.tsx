import React from 'react';
import StarRating from "../components/common/StarRating";

require('../assets/css/AddOpinionView.css')

const AddOpinionView: React.FC = () => (
    <div className="AddOpinionView">
        <div className="pseudo-navbar">
            MojProfesor
        </div>
        <div className="content">
            <header>Zgłoś opinię</header>
            <StarRating scale={5} text="Atrakcyjność zajęć"/>
            <StarRating scale={5} text="Kompetentność"/>
            <StarRating scale={5} text="Łatwość zaliczenia"/>
            <StarRating scale={5} text="Przyjazność"/>
            <button type="submit">Dodaj opinię</button>
        </div>
    </div>
);

export default AddOpinionView;
