import { useEffect } from "react";

import styles from "./grid.module.css";

export function Grid() {
  const squares = Array.from({ length: 120 }, (_, i) => (
    <div key={i} className={styles.square}></div>
  ));

  // useEffect(() => {
  //   const updateCursor = ({ clientX, clientY }) => {
  //     document.documentElement.style.setProperty("--x", clientX);
  //     document.documentElement.style.setProperty("--y", clientY);
  //   };

  //   const activateEffect = () => {
  //     document.documentElement.style.setProperty("--active", 0);
  //   };

  //   const deactivateEffect = () => {
  //     document.documentElement.style.setProperty("--active", 0);
  //   };

  //   document.body.addEventListener("pointermove", updateCursor);
  //   document.body.addEventListener("pointerover", activateEffect);
  //   document.body.addEventListener("pointerout", deactivateEffect);

  //   const handleTouchStart = (e) => {
  //     const touch = e.touches[0];
  //     if (touch) {
  //       updateCursor(touch);
  //       activateEffect();
  //     }
  //   };

  //   const handleTouchMove = (e) => {
  //     const touch = e.touches[0];
  //     if (touch) {
  //       updateCursor(touch);
  //     }
  //   };

  //   const handleTouchEnd = () => {
  //     deactivateEffect();
  //   };

  //   document.body.addEventListener("touchstart", handleTouchStart);
  //   document.body.addEventListener("touchmove", handleTouchMove);
  //   document.body.addEventListener("touchend", handleTouchEnd);
  //   document.body.addEventListener("touchcancel", handleTouchEnd);

  //   return () => {
  //     document.body.removeEventListener("pointermove", updateCursor);
  //     document.body.removeEventListener("pointerover", activateEffect);
  //     document.body.removeEventListener("pointerout", deactivateEffect);

  //     document.body.removeEventListener("touchstart", handleTouchStart);
  //     document.body.removeEventListener("touchmove", handleTouchMove);
  //     document.body.removeEventListener("touchend", handleTouchEnd);
  //     document.body.removeEventListener("touchcancel", handleTouchEnd);
  //   };
  // }, []);

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
