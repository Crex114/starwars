import React from 'react';
import styles from '../styles/ModalPeoples.module.scss'
import classNames from 'classnames';

const ModalPeoples = ({ active, setActive, item }) => {

    const { name, height, mass, gender, birth_year, hair_color, skin_color } = item

    return (
        <div className={active ?
            classNames(styles.wrapper, styles.active)
            :
            classNames(styles.wrapper, styles.hide)}
            onClick={() => setActive(false)}>
            <div className={styles.content} onClick={e => e.stopPropagation()}>
                {name}
                {height}
                {mass}
                {gender}
                {birth_year}
                {hair_color}
                {skin_color}
            </div>
        </div>
    );
};

export default ModalPeoples;