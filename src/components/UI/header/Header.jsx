import React from 'react'
import logo from '../../../assets/png/logo.png'
import xbox from '../../../assets/svg/xbox_icon.svg'
import steam from '../../../assets/svg/steam_icon.svg'
import daw from '../../../assets/svg/daw.svg'

import styles from '../scss/Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <img style={{ wight: '55px', height: '55px' }} src={logo} alt='' />
        <nav>
          <ul className={styles.header__list}>
            <li className={styles.header__item}>Main</li>
            <li className={styles.header__item}>about</li>
            <li className={styles.header__item}>game features</li>
            <li className={styles.header__item}>System requirements</li>
            <li className={styles.header__item}>quotes</li>
          </ul>
        </nav>
        <div className={styles.header__rightside}>
          <div className={styles.header__language}>
            <button className={styles.select}>
              ENG
              <img src={daw} alt='' className={styles.select__btn} />
            </button>
          </div>
          <div className={styles.header__line} />
          <img src={xbox} alt='' className={styles.header__gamestore} />
          <img src={steam} alt='' className={styles.header__gamestore} />
          <div />
        </div>
      </div>
    </div>
  )
}

export default Header
