import React from 'react';

const contactErrors = ({ errors }) => {
    const errorsList = errors.map(error => {
        return (
            <div key={error.id} style={{ backgroundColor: 'red' }}>{error.message}</div>
        );
    });
    return (
        <div>
            {errorsList}
        </div>
    );
};

export default contactErrors;
