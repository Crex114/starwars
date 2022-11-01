import React from 'react';
import { gen, birthYear, parameteres } from '../utils/constants';
import peoplesinfo from '../styles/PeoplesInfo.module.scss'

const Peoples = ({ item }) => {

    const { name, height, mass, gender, birth_year } = item

    return (
        <>
            <h3>{name}</h3>
            {parameteres(height, mass)}
            <div className={peoplesinfo.cardboxTages}>
                {gen(gender)}
                {birthYear(birth_year)}
            </div>
        </>
    );
};

export default Peoples;