import React, {FC} from 'react';

import styles from './character.module.css'

// interface в компонентах зазвичай називають IProps або ICharacterProps
// також Props можна робити через type!!! - без різниці
// стилізацію модулів css модулів можна робити як через styles & classes!!! без різниці!
interface IProps {
    name: string,
    image: string,
    // children можна в Інтерфейсі прописати чи як через type (тобто 2 варіанта запису)
    children?: React.ReactNode
}

// пропишемо типи для подвійного компонента та протипізуємо його children. Можна називати ITypeProps
type PropsWithChildren<T> = T & { children?: React.ReactNode }

const Character: FC<PropsWithChildren<IProps>> = ({name, image, children}) => {
    return (
        <div className={styles.characterBox}>
            <h2>{name}</h2>
            <img className={styles.imageSize} src={image}
                 alt={name}/>
            <p>{children}</p>
        </div>
    );
};

export default Character;