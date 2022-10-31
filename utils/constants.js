import classNames from 'classnames';
import Image from 'next/image';
import peoplesinfo from '../styles/PeoplesInfo.module.scss'
import male from '../images/icon/male.png'
import female from '../images/icon/female.png'
import hermaphrodite from '../images/icon/hermaphrodite.png'

export const gen = (gender) => {
    switch (gender) {
        case 'male':
            return <div className={classNames(peoplesinfo.tags, peoplesinfo.male)}>{gender}</div>
        case 'female':
            return <div className={classNames(peoplesinfo.tags, peoplesinfo.female)}>{gender}</div>
        case 'hermaphrodite':
            return <div className={classNames(peoplesinfo.tags, peoplesinfo.hermaphrodite)}>{gender}</div>
        default:
            null
    }
}

export const birthYear = (birth_year) => {
    if (birth_year !== 'unknown') {
        return <div className={classNames(peoplesinfo.tags, peoplesinfo.birth)}>{birth_year}</div>
    } else {
        return null
    }
}

export const parameteres = (height, mass) => {
    return (
        <div className={peoplesinfo.param_wrapper}>
            {(height !== 'unknown') ?
                <div className={peoplesinfo.param_body}>
                    <div className={peoplesinfo.num}><span>{height}</span></div>
                    <div className={peoplesinfo.var}>height</div>
                </div> : null}
            {(mass !== 'unknown') ?
                <div className={peoplesinfo.param_body}>
                    <div className={peoplesinfo.num}><span>{mass}</span></div>
                    <div className={peoplesinfo.var}>mass</div>
                </div> : null}
        </div>
    )
}

export const avatarPeople = (gender) => {
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