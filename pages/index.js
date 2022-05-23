import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Move through information
        </h1>

        <p className={styles.description}>
          How can we experience information rich websites in 3d?
        </p>


      </main>

      <footer className={styles.footer}>
        <a
          href="https://powersimple.com"
                  target="_blank"
                  rel="noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/img/powersimple-logo-white.jpg" alt="Powersimple Logo" width={72} height={72} />
          </span>
        </a>
      </footer>
    </div>
  )
}
