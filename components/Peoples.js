import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from '../styles/Peoples.module.scss'

const Peoples = ({item}) => {

    const { name, height, mass, gender, birth_year } = item

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
        // <Link href={`/people/${i.url.split('people/')[1]}`}> // оставил ссылку для перехода на полноценную страницу
        <>						
            <div className={styles.name}><h3>{name}</h3></div>
            <div className={styles.wrapperparam}>
                <div className={styles.parambody}>
                    {(height !== 'unknown') ?
                        <>
                            <div className={styles.num}><span>{height}</span></div>
                            <div className={styles.var}>height</div>
                        </>
                        :
                        null}
                </div>
                <div className={styles.parambody}>
                    {(mass !== 'unknown') ?
                        <>
                            <div className={styles.num}><span>{mass}</span></div>
                            <div className={styles.var}>mass</div>
                        </>
                        :
                        null}
                </div>
            </div>
            <div className={styles.cardboxTages}>
                {cardboxTages(gender)}
                {(birth_year !== 'unknown') ? <div className={classNames(styles.tags, styles.birth)}>{birth_year}</div> : null}
            </div>
        </>
        // </Link>
    );
};

export default Peoples;