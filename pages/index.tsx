import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from 'next/router';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Showcase</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/lotus.jpeg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to a Frontend Showcase
        </h1>

        <p className={styles.description}>
          Using the power of Next.js to create solid frontend pages
        </p>

        <div className={styles.grid}>

            <button className={styles.card} onClick={() => router.push('/ahStudio')}>
              <h2>Ah Studio &rarr;</h2>
              <p>Welcome to a mockup portfolio with minimalist and elegant design</p>
            </button>

          <button className={styles.card} onClick={() => router.push('/monsterMouse')}>
            <h2>Monster Mouse &rarr;</h2>
            <p>Here is a landing page for a music player, with promotional design patterns</p>
          </button>

          <button className={`${styles.card} ${styles.inProgress}`}>
            <h2>Under construction &rarr;</h2>
            <p>In the future, this will become really nice eye candy</p>
          </button>

          <button className={`${styles.card} ${styles.inProgress}`}>
            <h2>Under construction &rarr;</h2>
            <p>In the future, this will become really nice eye candy</p>
          </button>

        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.contact}>
            <a href="https://www.linkedin.com/in/blum-joshua/">LinkedIn</a>
            <a href="http://github.com/joshua-blum">Github</a>
            <a href="mailto:blum.r.joshua@gmail.com">Email</a>
        </div>
        <div className={styles.copyright}>
          © 2023 Joshua Blum
        </div>
      </footer>
    </div>
  )
}
