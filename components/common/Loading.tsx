import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <FaSpinner className="animate-spin h-12 w-12 text-blue-500" />
        </div>
    );
};

export default Loading;
