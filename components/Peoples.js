import React from 'react';
import Link from 'next/link';
import { gen, birthYear, parameteres } from '../utils/constants';
import peoplesinfo from '../styles/PeoplesInfo.module.scss'

const Peoples = ({ item }) => {

    const { name, height, mass, gender, birth_year } = item

    return (
        // <Link href={`/people/${i.url.split('people/')[1]}`}> // оставил ссылку для перехода на полноценную страницу
        <>
            <h3>{name}</h3>
            {parameteres(height, mass)}
            <div className={peoplesinfo.cardboxTages}>
                {gen(gender)}
                {birthYear(birth_year)}
            </div>
        </>
        // </Link>
    );
};

export default Peoples;