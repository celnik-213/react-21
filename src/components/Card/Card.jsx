import styles from './button.module.css';

function Card() {
  return (
    <div>
      <h2>Karta</h2>

      <button className={styles.button}>Otwórz</button>
    </div>
  );
}

export default Card;
