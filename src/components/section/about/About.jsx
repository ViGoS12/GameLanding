import React from 'react'

import styles from './About.module.scss'
import classNames from 'classnames'

const About = () => {
  return (
    <div className={styles.about}>
      <div
        className={classNames(
          styles.about__gradient,
          styles.about__blackScreen
        )}>
        <div className={styles.about__container}>
          <div className={styles.about__leftside}>
            <h3 className={styles.about__subtitle}>What is SOS?</h3>
            <h1 className={styles.about__title}>social battle royale game</h1>
            <div className={styles.separator} />
            <p className={styles.about__text}>
              Each round, you and 15 other contestants compete to escape a
              deadly island filled with monsters. The trick is:
              <span className={styles.bold}> three</span> people can survive.
              Will you run solo or form friendships with others to escape?
              <br />
              <br />
              Making the right decisions could be the difference between
              <span className={styles.underline}> life and death.</span>
            </p>
          </div>
          <div className={styles.about__rightside}>
            <div className={styles.about__slider}>
              <div>Image1</div>
              <div>Image2</div>
              <div>Image3</div>
              <img src='' alt='' />
              <img src='' alt='' />
              <img src='' alt='' />
              <img src='' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
