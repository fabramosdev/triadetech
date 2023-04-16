import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Triade Tech Sistemas</title>
        <meta
          name="description"
          content="Criação de sites, aplicativos e sistemas Web"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Desenvolvimento de&nbsp;
            <code className={styles.code}>Apps | Sistemas | Sites</code>
          </p>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/triade.svg"
            alt="Logo Triade Tech"
            width={720}
            height={148}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Apps <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Apps mobile - Android e iOS - com React Native & Flutter
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Sistemas <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Sistemas personalizados para atender suas demandas
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Sites <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Sites institucionais, Landing Pages
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              E-Commerce <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Implantação de E-commerce em geral
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
