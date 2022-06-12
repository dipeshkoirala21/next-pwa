import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Offline() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Oops! We are Offline right now!</a>
        </h1>
      </main>
    </div>
  );
}
