import React, {FC} from 'react';
import styles from './AnimatedContent.module.scss'
import cn from "classnames";

const AnimatedContent : FC = (props) =>
  <div>
    <h5>Reveal animations</h5>
    <div className={cn(styles.revealContainer)}>
      <h4 className={cn(styles.text, styles.revealRight)}>Reveal right</h4>
    </div>
    <div className={cn(styles.revealContainer)}>
      <h4 className={cn(styles.text, styles.revealDown)}>Reveal down</h4>
    </div>

    <h3>Contenus animés</h3>
    <h5>Slide animations</h5>
    <div className={styles.slideContainer}>
      <h4 className={cn(styles.text, styles.slideUp)}>Slide up</h4>
    </div>
    <div className={styles.slideContainer}>
      <h4 className={cn(styles.text, styles.slideRight)}>Slide right</h4>
    </div>
    <div className={styles.slideContainer}>
      <h4 className={cn(styles.text, styles.slideDown)}>Slide down</h4>
    </div>
    <div className={styles.slideContainer}>
      <h4 className={cn(styles.text, styles.slideLeft)}>Slide left</h4>
    </div>

    <h5>Rotate animations</h5>
    <div className={cn(styles.rotateContainer)}>
      <h4 className={cn(styles.text, styles.rotateUp)}>Rotate Up</h4>
    </div>
    <div className={cn(styles.rotateContainer)}>
      <h4 className={cn(styles.text, styles.rotateRight)}>Rotate right</h4>
    </div>
    <div className={cn(styles.rotateContainer)}>
      <h4 className={cn(styles.text, styles.rotateDown)}>Rotate down</h4>
    </div>
    <div className={cn(styles.rotateContainer)}>
      <h4 className={cn(styles.text, styles.rotateLeft)}>Rotate left</h4>
    </div>

  </div>

export default AnimatedContent;
