import { Outlet } from "react-router-dom";
import styles from "./styles/Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <img src="/profile.png" alt="Profile" className={styles.profileImage} />
        <div className={styles.bio}>
          <h1 className={styles.name}>Woojang Pyeon</h1>
          <p className={styles.jobTitle}>Software Engineer</p>
          <p className={styles.locationText}>📍 Hong Kong</p>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/wpyeon"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/woojang-pyeon-81600122b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume(PDF)
            </a>
          </div>
        </div>
      </aside>

      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
}
