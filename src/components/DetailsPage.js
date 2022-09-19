import React from 'react';
import { useParams } from 'react-router-dom';
const DetailsPage = () => {
    const params = useParams();
    return (
        <div>
            <h1>
                Details Page for product number {params.id}
            </h1>
        </div>
    );
};

export default DetailsPage;