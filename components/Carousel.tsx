'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from '@/styles/Carousel.module.scss';

export default function Carousel() {
  // 실제 슬라이드 데이터
  const items = [1, 2, 3, 4];
  // 마지막에 첫 슬라이드를 복제
  const slides = [...items, items[0]];
  
  const [index, setIndex] = useState(0);
  const [isTransition, setIsTransition] = useState(true);
  // 브라우저 setInterval 반환값은 number
  const intervalRef = useRef<number | null>(null);

  // 3초마다 인덱스 증가
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setIndex(prev => prev + 1);
      setIsTransition(true);
    }, 3000);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // transition 끝나면, 복제 슬라이드 위치에서 원본으로 순식간에 되돌리기
  const onTransitionEnd = () => {
    if (index === slides.length - 1) {
      setIsTransition(false);
      setIndex(0);
    }
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <div
        className={styles.carouselContainer}
        style={{
          width: `${slides.length * 100}vw`,
          transform: `translateX(-${index * 100}vw)`,
          transition: isTransition ? 'transform 0.5s ease-in-out' : 'none'
        }}
        onTransitionEnd={onTransitionEnd}
      >
        {slides.map((num, i) => (
          <div key={i} className={styles.carouselItem}>
            <h1>텍스트 {num}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
