import React, { useEffect } from 'react';

import styles from '../styles/Characters.module.scss'
import service from '../services/service';


const CharactersWrapper = () => {
    const { getCharacters } = service()



    return (
        <>
            {getCharacters(<View characters={characters} />)}

        </>
    )
}

const View = ({ characters }) => {

    const cardboxTages = (gender) => {
        switch (gender) {
            case 'male':
                return <div className={classNames(styles.tags, styles.male)}>{gender}</div>
            case 'female':
                return <div className={classNames(styles.tags, styles.female)}>{gender}</div>
            case 'hermaphrodite':
                return <div className={classNames(styles.tags, styles.hermaphrodite)}>{gender}</div>
            default:
                null
        }
    }

    return (
        <div className={styles.wrapper} >
            {characters.map(({ name, height, mass, gender, birth_year }) => (
                <div className={styles.card} key={name} onClick={() => setInfo(true)}>
                    <div>{name}</div>
                    <div>{height}</div>
                    <div>{mass}</div>
                    <div className={styles.cardboxTages}>
                        {cardboxTages(gender)}

                        {(birth_year !== 'unknown') ? <div className={classNames(styles.tags, styles.birth)}>{birth_year}</div> : null}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CharactersWrapper;