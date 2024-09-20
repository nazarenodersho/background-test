import styles from "./grid.module.css";

export function Grid() {
  const squares = Array.from({ length: 120 }, (_, i) => (
    <div key={i} className={styles.square}></div>
  ));

  const updateCursor = ({ x, y }) => {
    document.documentElement.style.setProperty("--x", x);
    document.documentElement.style.setProperty("--y", y);
  };

  document.body.addEventListener("pointermove", updateCursor);

  return <div className={styles.grid}>{squares}</div>;
}
