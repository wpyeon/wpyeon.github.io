import MediaGridItem from '../components/MediaGridItem';
import styles from '../styles/App.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className={styles.subsection}>
        <h2>Hi there!</h2>
        <p>
          I'm a passionate software engineer with expertise in web
          development, particularly in React and TypeScript...
        </p>
      </section>

      <section className={styles.subsection}>
        <h2>Projects</h2>
        <div className={styles.mediaGrid}>
          <Link to="/binance-trader">
            <MediaGridItem
              imgSrc="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
              title="Binance Trader Desktop App"
              chipTypes={["react", "electron", "sqlite"]}
            />
          </Link>
          <Link to="/binance-trader">
            <MediaGridItem
              imgSrc="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
              title="Binance Trader Desktop App"
              chipTypes={["react", "electron", "sqlite"]}
            />
          </Link>
          <Link to="/binance-trader">
            <MediaGridItem
              imgSrc="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
              title="Binance Trader Desktop App"
              chipTypes={["react", "electron", "sqlite"]}
            />
          </Link>
        </div>
      </section>
    </>
  );
}