import React from 'react';
import styles from './About.module.css';
const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <div className={styles.titleBlock}>
                <div className={styles.greeting}>
                        <h1>Привет, меня зовут Майкл</h1>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Emoji_u1f44b.svg/1200px-Emoji_u1f44b.svg.png" alt="hand" />
                </div>
                <div className={styles.avatarWrapper}>
                        <img src="https://sun9-19.userapi.com/impg/YXsKe_3YMEVxS3hR0RYz0HnZ86c8_fJkzp5_uw/-17Q8TGcMnY.jpg?size=1172x1378&quality=96&sign=48b8ac4095a0bab8a1234f99c583437d&type=album" alt="avatar" />
                </div>
            </div>
                <h1>Обо мне</h1>
                <p>
                    <h2>Образование:</h2> 
                    Бакалавр. РГЭУ(РИНХ) Факультет Менеджмента и Предпринимательства. Менеджменты организации
                    Магистр. ЮФУ (бывш. РГУ) Факультет Управления. Управление Финансами
                    <h2>Достижения:</h2>
                    1) Прошел курс "Базовый HTML и СSS" от HTML ACADEMY
                    2) "Полный курс по JavaScript + React - с нуля до результата" от Udemy;
                    3) Курс "Практический JavaScript (Продвинутый уровень)" от Udemy;
                    4) Курс "React JS - путь самурая 1.0", 100 уроков + практика" от IT-KAMASUTRA; 
                    
                    Основы HTML и CSS
                    <dl className={styles.skillsList}>
                        <dt className={styles.skillHtml}>HTML</dt>
                        <dd className={styles.level}>
                            <div className={styles.levelHTMLPercents}>99%</div>
                        </dd>
                        <dt className={styles.skillCss}>CSS</dt>

                        <dd className={styles.level}>
                            <div className={styles.levelCSSPercents}>90%</div>
                        </dd>
                        <dt className={styles.skillJs}>JavaScript(React,Redux)</dt>
                        <dd className={styles.level}>
                         <div className={styles.levelJSPercents}>80%</div>
                        </dd>
                    </dl>
                </p>
            </div>
        </div>
    );
}

export default About;
