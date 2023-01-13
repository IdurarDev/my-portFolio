import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css"
import Link from "next/link";

export const siteTitle = "Hamid's portfolio";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            <Head>
                <meta name="description" content="Hamid's portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="og:title" content={siteTitle} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <nav className={styles.header}>
                    <Link href="/service">Services</Link>
                    <Link href="/competence">Compétences</Link>
                    <Image
                        src="/images/idurar.jpg"
                        height={100}
                        width={100}
                        alt="logo"
                    />
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    )
}