import { useEffect } from "react";

import styles from "./grid.module.css";

export function Grid() {
  const squares = Array.from({ length: 120 }, (_, i) => (
    <div key={i} className={styles.square}></div>
  ));

  useEffect(() => {
    const updateCursor = (event) => {
      const x = event.touches ? event.touches[0].clientX : event.clientX;
      const y = event.touches ? event.touches[0].clientY : event.clientY;

      document.documentElement.style.setProperty("--x", x);
      document.documentElement.style.setProperty("--y", y);
    };

    document.addEventListener("pointermove", updateCursor);
    document.addEventListener("touchmove", updateCursor);

    return () => {
      document.removeEventListener("pointermove", updateCursor);
      document.removeEventListener("touchmove", updateCursor);
    };
  }, []);

  return <div className={styles.grid}>{squares}</div>;
}
