"use client";
import { useState, useEffect } from "react";
import styles from "./Page.module.css";
import { apps } from "./config";

export default function Home() {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [deHoverIndex, setDeHoverIndex] = useState(-1);

  useEffect(() => {
    setTimeout(() => {
      setDeHoverIndex(hoverIndex);
    }, 100);
  }, [hoverIndex]);

  return (
    <main className={styles.container}>
      <h1 className={styles.app_title}>App Bar</h1>
      <div className={styles.bar_container}>
        {apps.map((app, index) => {
          const isHovered = hoverIndex === index;
          const isDeHovered = deHoverIndex === index;
          return (
            <div
              key={index}
              className={styles.bar_item}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(-1)}
            >
              <img
                src={isDeHovered ? `/img_hover/${app}.png` : `/img/${app}.png`}
                style={{
                  marginTop: isHovered ? "-10px" : "0px",
                  color: isHovered ? "#fff" : "#000",
                }}
              ></img>
            </div>
          );
        })}
      </div>
    </main>
  );
}
