import Head from 'next/head'
// import { Inter } from '@next/font/google'
import Layout, { siteTitle } from "../components/layout"
import styles from '../styles/Home.module.css'
import stylesLayout from '../components/layout.module.css'
import utilStyles from "../styles/utils.module.css"



// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingLg} ${stylesLayout.containerMain}`}>
                <p>Hi, my name is Hamid, Developer Full Stack Node.js.</p>
                <p>
                    Je prend plaisir à concrétiser les projets avec passion.
                </p>
            </section>
            <section className={styles.headingMd}>
                <h2 className={utilStyles.headingXl}>Compétences</h2>
            </section>
        </Layout>
    )
}
