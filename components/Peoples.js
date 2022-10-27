import React from 'react';
import Link from 'next/link';

import classNames from 'classnames';

import styles from '../styles/Peoples.module.scss'

const Peoples = (props) => {

    const i = props.repo

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
        <Link href={`/people/${i.url.split('people/')[1]}`}>
            <div className={styles.card}>
                <div className={styles.name}><h3>{i.name}</h3></div>
                <div className={styles.parambody}>
                    <div className={styles.num}><span>{i.height}</span></div>
                    <div className={styles.num}><span>{i.mass}</span></div>
                    <div className={styles.var}>height</div>
                    <div className={styles.var}>mass</div>
                </div>

                <div className={styles.cardboxTages}>
                    {cardboxTages(i.gender)}
                    {(i.birth_year !== 'unknown') ? <div className={classNames(styles.tags, styles.birth)}>{i.birth_year}</div> : null}
                </div>
            </div>
        </Link>
    );
};

export default Peoples;