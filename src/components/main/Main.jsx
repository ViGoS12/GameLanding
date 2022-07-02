import React from 'react'
import styles from './Main.module.scss'
import Header from '../UI/header'

import scroll from '../../assets/svg/scroll down.svg'

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__gradient}>
        <Header />
        <h1 className={styles.main__title}>Survive at all costs</h1>
        <h3 className={styles.main__text}>
          Experience new social battle royale game
        </h3>
        <button className={styles.main__button}>
          <div className={styles.flex}>
            Buy now on Steam
            <div className={styles.line} />
            $14.99
          </div>
        </button>
        <div>
          <button className={styles.main__bottom_btn}>
            The story
            <img src={scroll} alt='' className={styles.scroll} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Main
