"use client";
import { useState } from "react";
import styles from "./Page.module.css";
import { apps } from "./config";

export default function Home() {
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <main className={styles.container}>
      <h1 className={styles.app_title}>App Bar</h1>
      <div className={styles.bar_container}>
        {apps.map((app, index) => {
          const isHovered = hoverIndex === index;
          return (
            <div
              key={index}
              className={styles.bar_item}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(-1)}
            >
              <i
                className={app}
                style={{
                  marginTop: isHovered ? "-10px" : "0px",
                  color: isHovered ? "#fff" : "#000",
                }}
              ></i>
            </div>
          );
        })}
      </div>
    </main>
  );
}
