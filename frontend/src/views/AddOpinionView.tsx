import React from 'react';
import StarRating from 'components/common/StarRating';
import { Card } from 'antd';
import 'assets/css/AddOpinionView.css';

const AddOpinionView: React.FC = () => (
    <div className="add-opinion-view">
        <Card style={{ width: '600px' }}>
            <div className="add-opinion-content">
                <header>Zgłoś opinię</header>
                <StarRating scale={5} text="Atrakcyjność zajęć" />
                <StarRating scale={5} text="Kompetentność" />
                <StarRating scale={5} text="Łatwość zaliczenia" />
                <StarRating scale={5} text="Przyjazność" />
                <button type="submit">Dodaj opinię</button>
            </div>
        </Card>
    </div>
);

export default AddOpinionView;
