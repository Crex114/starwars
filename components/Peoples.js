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
        <div>
            <Link href={`/people/${i.url.split('people/')[1]}`}>
                <div className={styles.card}>
                    <div>{i.name}</div>
                    <div>{i.height}</div>
                    <div>{i.mass}</div>
                    <div className={styles.cardboxTages}>
                        {cardboxTages(i.gender)}
                        {(i.birth_year !== 'unknown') ? <div className={classNames(styles.tags, styles.birth)}>{i.birth_year}</div> : null}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Peoples;