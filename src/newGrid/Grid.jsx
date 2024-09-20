import { useEffect, useRef } from "react";
import styles from "./grid.module.css";

export function Grid() {
  const gridRef = useRef(null);

  useEffect(() => {
    const gridElement = gridRef.current;

    const squares = gridElement.querySelectorAll(`.${styles.square}`);

    const handleMove = (e) => {
      const pageX = e.touches ? e.touches[0].pageX : e.pageX;
      const pageY = e.touches ? e.touches[0].pageY : e.pageY;

      squares.forEach((square) => {
        const rect = square.getBoundingClientRect();
        const isWithinBounds =
          pageX >= rect.left &&
          pageX <= rect.right &&
          pageY >= rect.top &&
          pageY <= rect.bottom;

        if (isWithinBounds) {
          const x = pageX - rect.left;
          const y = pageY - rect.top;

          square.style.setProperty("--x", `${x}px`);
          square.style.setProperty("--y", `${y}px`);
        }
      });
    };

    gridElement.addEventListener("mousemove", handleMove);
    gridElement.addEventListener("touchmove", handleMove);

    return () => {
      gridElement.removeEventListener("mousemove", handleMove);
      gridElement.removeEventListener("touchmove", handleMove);
    };
  }, []);

  const squares = Array.from({ length: 120 }, (_, i) => (
    <div key={i} className={styles.square}></div>
  ));

  return (
    <div className={styles.grid} ref={gridRef}>
      {squares}
    </div>
  );
}
