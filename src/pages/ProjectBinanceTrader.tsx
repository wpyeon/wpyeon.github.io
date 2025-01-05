import { useParams } from 'react-router-dom';
import styles from './styles/MainPage.module.css';
import { useEffect } from 'react';

export default function ProjectDetail() {
  const { projectId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  return (
    <section className={styles.subsection}>
      <h2>Binance Trader Desktop App</h2>
      <h3>Project ID: {projectId}</h3>
      <p>
        This is a desktop app for Binance Trader. It is built with React and Electron.
      </p>
    </section>
  );
}