import React, { useState } from "react";
import styles from "../styles/Rate.module.css";
import cn from 'classnames';


function Rate(props) {

    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
    }

    const titleClass = cn(styles.title,
        {
			[styles.title__blue]: props.blue,
            [styles.title__green]: props.green,
            [styles.title__red]: props.red,
            [styles.title__black]: props.black,
            [styles.title__hover]: props.hover,
		});

    const descClass = cn(styles.desc,
        {
            [styles.desc__blue]: props.blue,
            [styles.desc__green]: props.green,
            [styles.desc__red]: props.red,
            [styles.desc__black]: props.black,
        });

    const cardClass = cn(styles.card, styles.active);

    return (
        <div 
            className = {checked ? cardClass : styles.card}
            onClick={handleChange}
        >
            <div className={titleClass}>Безлимитный {props.desc}</div>
            <div className={descClass}>
                <p className={styles.currency}>руб</p>
                <p className={styles.price}>{props.desc}</p>
                <p className={styles.period}>/ мес</p>
            </div>
            <div className={styles.speed}>до {props.speed} Мбит/сек</div>
            <div className={styles.limit}>Объем включенного трафика не ограничен</div>
        </div>
    )
}

export default Rate;