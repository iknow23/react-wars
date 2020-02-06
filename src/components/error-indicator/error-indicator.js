import React from 'react';
import './error-indicator.css';
import icon from './star.png';

const ErrorIndicator = () => {
    return (
        <div className='error-indicator'>
            <img style={{'width': '100px'}} src={icon} alt='error icon' />
            <div>
                <span className='boom'>
                    BOOM!
                </span>
                <span>
                    something has gone terribly wrong
                </span>
                <span>
                    (but we already sent droids to fix it)
                </span>
            </div>
        </div>
    );
};

export default ErrorIndicator;