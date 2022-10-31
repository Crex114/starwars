import React from 'react';
import styles from '../styles/ModalPeoples.module.scss'
import stylesparam from '../styles/Peoples.module.scss'
import classNames from 'classnames';
import { cardboxTages } from './Peoples'
import male from '../images/icon/male.png'
import female from '../images/icon/female.png'
import hermaphrodite from '../images/icon/hermaphrodite.png'
import Image from 'next/image';

const ModalPeoples = ({ active, setActive, item }) => {

    const { name, height, mass, gender, birth_year, hair_color, skin_color } = item

    const cardboxTages = (gender) => {
        switch (gender) {
            case 'male':
                return <div className={classNames(stylesparam.tags, stylesparam.male)}>{gender}</div>
            case 'female':
                return <div className={classNames(stylesparam.tags, stylesparam.female)}>{gender}</div>
            case 'hermaphrodite':
                return <div className={classNames(stylesparam.tags, stylesparam.hermaphrodite)}>{gender}</div>
            default:
                null
        }
    }

    const avatarPeople = (gender) => {
        switch (gender) {
            case 'male':
                return <Image src={male} alt='male' />
            case 'female':
                return <Image src={female} alt='female' />
            case 'hermaphrodite':
                return <Image src={hermaphrodite} alt='hermaphrodite' />
            default:
                null
        }
    }

    return (
        <div className={active ?
            classNames(styles.wrapper, styles.active)
            :
            classNames(styles.wrapper, styles.hide)}
            onClick={() => setActive(false)}>
            <div className={styles.content} onClick={e => e.stopPropagation()}>
                <div className={styles.avatar}>
                    <div className={styles.img}>
                        {avatarPeople(gender)}
                    </div>
                    <div className={classNames(stylesparam.cardboxTages, styles.cardboxTages)}>
                        {cardboxTages(gender)}
                        {(birth_year !== 'unknown') ? <div className={classNames(stylesparam.tags, stylesparam.birth)}>{birth_year}</div> : null}
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.color}>

                        {hair_color !== 'n/a' ? <div>hair color: {hair_color}</div> : null}

                        <div>skin color: {skin_color}</div>
                    </div>
                    <div className={stylesparam.wrapperparam}>
                        {(height !== 'unknown') ?
                            <div className={classNames(stylesparam.parambody, styles.parambody)}>
                                <div className={stylesparam.num}><span>{height}</span></div>
                                <div className={stylesparam.var}>height</div>
                            </div> : null}
                        {(mass !== 'unknown') ?
                            <div className={classNames(stylesparam.parambody, styles.parambody)}>
                                <div className={stylesparam.num}><span>{mass}</span></div>
                                <div className={stylesparam.var}>mass</div>
                            </div> : null}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ModalPeoples;