import React from 'react'
import styles from './HomeScreen.module.scss'
import Header from './../UI/header'

import scroll from '../../assets/svg/scroll down.svg'

const HomeScreen = () => {
  return (
    <div className={styles.homeScreen}>
      <div className={styles.homeScreen__gradient}>
        <Header />
        <h1 className={styles.homeScreen__title}>Survive at all costs</h1>
        <h3 className={styles.homeScreen__text}>
          Experience new social battle royale game
        </h3>
        <button className={styles.homeScreen__button}>
          <div className={styles.flex}>
            Buy now on Steam
            <div className={styles.line} />
            $14.99
          </div>
        </button>
        <div>
          <button className={styles.homeScreen__bottom_btn}>
            The story
            <img src={scroll} alt='' className={styles.scroll} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
