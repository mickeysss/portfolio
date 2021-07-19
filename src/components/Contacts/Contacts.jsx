import React from 'react';
import styles from './Contacts.module.css';
import facebokIcon from '../../assets/svg/facebook-4.svg'
import instagramIcon from '../../assets/svg/instagram-8.svg'
import telegramIcon from '../../assets/svg/telegram-3.svg'
import whatsappIcon from '../../assets/svg/whatsapp-1.svg'
const Contacts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>Контакты</h1>
                <ul className={styles.contacts}>    
                    <li className={styles.contact}>
                        <a href="https://t.me/mickysaar">
                            <img src={telegramIcon} alt="telegram-link" />
                        </a>   
                        <h2>Telegram</h2>    
 
                    </li>
                    <li className={styles.contact}>
                        <a href="https://wa.me/89388851435">
                            <img src={whatsappIcon} alt="whatsapp-link" />
                        </a>
                        <h2>WhatsApp</h2>    
                    </li>
                    <li className={styles.contact}>
                        <a href="https://www.instagram.com/mickysaar">
                            <img src={instagramIcon} alt="instagram-link" />
                        </a>
                        <h2>Instagram</h2>        
                    </li>
                    <li className={styles.contact}>
                        <a href="https://www.facebok.com">
                            <img src={facebokIcon} alt="facebook-link"></img> 
                        </a>
                        <h2>Facebook</h2> 
                    </li>
                </ul>

                </div>
                <div className={styles.link}>
                        <div className={styles.arrows}></div>
                        <h3>Нажмите на значок иконки, чтобы перейти по ссылке</h3>
                    </div>
            </div>
    );
}

export default Contacts;
