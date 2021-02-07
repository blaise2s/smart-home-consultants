import React, { FC } from 'react';
import { Typography, Button } from '@material-ui/core';

import styles from './Landing.module.scss';
import Parallax from '../parallax/Parallax';
import home1 from '../../assets/images/home-1.jpg';
import alexa1 from '../../assets/images/alexa-1.jpg';
import homePod1 from '../../assets/images/home-pod-1.jpg';
import googleHome1 from '../../assets/images/google-home-1.jpg';
import livingRoom1 from '../../assets/images/living-room-1.jpg';
import door1 from '../../assets/images/door-1.jpg';

const Landing: FC = () => {
  return (
    <div className={styles.landing}>
      <section className={styles.section}>
        <Parallax height="100vh" imgSrc={home1}>
          <div className={styles.messageContainer}>
            <div className={styles.message}>
              <Typography variant="h1">Smart</Typography>
              <Typography variant="h1">Home</Typography>
              <Typography variant="h1">Consultants</Typography>
            </div>
            <div>
              <Button
                size="large"
                variant="outlined"
                className={styles.contactUs}
                href="mailto:schaeffer.studio@gmail.com"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Parallax>
      </section>
      <section className={styles.section}>
        <Parallax height="100vh" imgSrc={alexa1}>
          <div className={styles.messageContainer}>
            <div className={styles.message}>
              <Typography variant="h2">Amazon Echo</Typography>
            </div>
          </div>
        </Parallax>
      </section>
      <section className={styles.section}>
        <Parallax height="100vh" imgSrc={homePod1}>
          <div className={styles.messageContainer}>
            <div className={styles.message}>
              <Typography variant="h2">Apple Home</Typography>
            </div>
          </div>
        </Parallax>
      </section>
      <section className={styles.section}>
        <Parallax height="100vh" imgSrc={googleHome1}>
          <div className={styles.messageContainer}>
            <div className={styles.message}>
              <Typography variant="h2">Nest Home</Typography>
            </div>
          </div>
        </Parallax>
      </section>
      <section className={styles.section}>
        <Parallax height="100vh" imgSrc={door1}>
          <div className={styles.messageContainer}>
            <div className={styles.message}>
              <Typography variant="h2">And more!</Typography>
            </div>
          </div>
        </Parallax>
      </section>
      <section className={styles.section}>
        <Parallax height="100vh" imgSrc={livingRoom1}>
          <div className={styles.messageContainer}>
            <Button
              size="large"
              variant="outlined"
              className={styles.contactUs}
              href="mailto:schaeffer.studio@gmail.com"
            >
              Contact Us
            </Button>
            {/* </div> */}
          </div>
        </Parallax>
      </section>
    </div>
  );
};

export default Landing;
