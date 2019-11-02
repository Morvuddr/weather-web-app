import React from 'react';
import './Loader.css';

export function Loader(){
    return(
        <div className="Loader">
            <h1>Подождите, данные загружаются</h1>
            <div className="Spinner">

            </div>
        </div>
    );
}