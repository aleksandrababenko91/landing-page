"use client";

import styles from '../InvestCard/InvestCard.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Icon } from '../../Icon/Icon';


export default function InvestCard({ item = {}, i, progress, range, targetScale }) {
  const { text_1, text_2, text_3, title, icon, image, baloon } = item;
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const isMobile = useMediaQuery({ maxWidth: 1365 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const svgScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div style={{ scale: isClient ? (isMobile ? 1 : scale) : 1, top: `calc(-10% + ${i * 50}px)` }} className={styles.card}>
        <motion.div style={{ scale: isClient ? (isMobile ? 1 : svgScale) : 1 }} className={styles.svgWrapper}>
          <img
            className={styles.iconNumber}
            src={icon}>
          </img>
        </motion.div>
        <div className={styles.textCard}>
          <div className={styles.titleWrapper}>
            {(title)}
            <img
              className={styles.iconTitle}
              src={image}>
            </img>
          </div>
          <div className={styles.text}>
            <div >
            <img
              className={styles.iconTitle}
              src={baloon}>
            </img>
            </div>
            {(text_1)}
          </div>
          <div className={styles.text}>
            <div >
            <img
              className={styles.iconTitle}
              src={baloon}>
            </img>
            </div>
            {(text_2)}
          </div>
          <div className={styles.text}>
            <div >
            <img
              className={styles.iconTitle}
              src={baloon}>
            </img>
            </div>
            {(text_3)}
          </div>
        </div>
      </motion.div>
    </div>
  );
}