import React from 'react';

const GlassCard = ({ children }) => {
    return (
        <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-lg p-4 shadow-lg">
            {children}
        </div>
    );
};

export default GlassCard;