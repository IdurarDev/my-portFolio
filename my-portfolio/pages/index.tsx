import Head from 'next/head'
// import { Inter } from '@next/font/google'
import Layout, { siteTitle } from "../components/layout"
import styles from '../styles/Home.module.css'
import utilStyles from "../styles/utils.module.css"



// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hi, my name is Hamid, Developer Full Stack Node.js.</p>
                <p>
                    Fan de ce que je conçoit, Je prend plaisir à concrétiser les projet avec passion.
                </p>
            </section>
            <section className={styles.headingMd}>
                <h2 className={utilStyles.headingLg}>Compétences</h2>
            </section>
        </Layout>
    )
}
