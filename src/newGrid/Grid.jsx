import { useEffect, useRef } from "react";
import styles from "./grid.module.css";

export function Grid() {
  const gridRef = useRef(null);

  useEffect(() => {
    const squares = gridRef.current.querySelectorAll(`.${styles.square}`);

    squares.forEach((square) => {
      const handleMove = (e) => {
        const x =
          (e.touches ? e.touches[0].pageX : e.pageX) - square.offsetLeft;
        const y = (e.touches ? e.touches[0].pageY : e.pageY) - square.offsetTop;

        square.style.setProperty("--x", `${x}px`);
        square.style.setProperty("--y", `${y}px`);
      };

      square.addEventListener("mousemove", handleMove);
      square.addEventListener("touchmove", handleMove);

      return () => {
        square.removeEventListener("mousemove", handleMove);
        square.removeEventListener("touchmove", handleMove);
      };
    });
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
