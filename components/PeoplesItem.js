import React from 'react';
import classNames from 'classnames';
import styles from '../styles/PeoplesItem.module.scss'
import { gen, avatarPeople, birthYear, parameteres } from '../utils/constants'

const ModalPeoples = ({ active, setActive, item }) => {

    const { name, height, mass, gender, birth_year, hair_color, skin_color } = item

    return (
        <div className={active ? classNames(styles.wrapper, styles.active)
            : classNames(styles.wrapper, styles.hide)} onClick={() => setActive(false)}>
            <div className={styles.content} onClick={e => e.stopPropagation()}>
                <div className={styles.avatar}>
                    <div className={styles.img}>
                        {avatarPeople(gender)}
                    </div>
                    <div className={styles.cardboxTages}>
                        {gen(gender)}
                        {birthYear(birth_year)}
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.color}>
                        {hair_color !== 'n/a' ?
                            <div>hair color: {hair_color}</div>
                            : null}
                        <div>skin color: {skin_color}</div>
                    </div>

                    {parameteres(height, mass)}

                </div>
            </div>
        </div>
    );
};

export default ModalPeoples;