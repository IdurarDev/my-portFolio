import Head from 'next/head'
// import { Inter } from '@next/font/google'
import Layout, { siteTitle } from "../components/layout"
import styles from '../styles/Home.module.css'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={styles.main}>
                <div className={styles.grid}>
                </div>
            </section>
        </Layout>
    )
}
