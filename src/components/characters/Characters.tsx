import React from 'react';
import Character from '../character/Character'; // Використовуйте правильний шлях до компонента Character

import styles from '../character/character.module.css'

const Characters = () => {
    return (
        <div>
            {/*функція Character має аргументи name, image i якщо подвійний тег функції, то і children*/}
            <Character
                name={'Homer'}
                image={'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'}/>

            <Character
                name={'Marge'}
                image={'https://kartinki.pics/uploads/posts/2021-07/1625890689_30-kartinkin-com-p-mardzh-simpson-art-art-krasivo-35.jpg'}/>

            <Character
                name={'Bart'}
                image={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>


            {/*використання подвійного тегу на останньому персонажу*/}
            <Character
                name={'Lisa'}
                image={'https://upload.wikimedia.org/wikipedia/uk/a/ae/Lisasmiling.png'}>

                У Лізи ми використовуємо подвійний компонент, і до нього в інтерфейсі прописуємо його тип - children.
                В children можна вставляти текст, різні теги розмітки, інші компоненти.
                <img className={styles.imageSizeMouse} src="https://habrastorage.org/files/13d/826/fb1/13d826fb14d449f8a2ae2c1e71ff8455.png" alt="children"/>
            </Character>
        </div>
    );
};

export default Characters;