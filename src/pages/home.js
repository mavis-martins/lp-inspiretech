import styles from './home.module.css';
import React from 'react';
import { logoTop, calendar, clock, arrow} from '../assets/images';
import Button from '../components/button/button';

function Home() {


    return (
        <div className={styles.inspireTechLp}>
            <section className={styles.firstFold}>
                <div className={styles.waveBg} />
                <img className={styles.logo} src={logoTop} alt='Inspire Tech logo.' />
                <div className={styles.dateTime}>
                    <img className={styles.calendar} src={calendar} alt='Imagem de um calendário.' />
                    <span className={styles.dtText}>01 DE JANEIRO</span>
                    <img className={styles.clock} src={clock} alt="Imagem de um relógio."/>
                    <span className={styles.dtText}>ÀS 20H</span>
                </div>
                <p className={styles.textOne}>
                    <span>Experimente o Futuro{' '} da Inovação</span> no Evento{' '} InspireTech!
                </p>
                <p   className={styles.textTwo}>
                    É com grande satisfação que convidamos{' '} 
                    você para o evento <span>InspireTech</span>, uma experiência{' '}
                    única e inovadora que reunirá profissionais, <span>entusiastas{' '}
                    e visionários da engenharia de software</span> e práticas ágeis.
                </p>
                
            </section>
        </div>
    );
}

export default Home;