import React from 'react';

import gif from './loading_spinner.gif';
import './loadingSpinner.css';

export default () => (
    <div className="loading-spinner">
        <img src={gif} className="loading-spinner__img loading-spinner__img_centered"/>
    </div>
);
