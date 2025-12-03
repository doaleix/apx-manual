import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="APX-GIS Manual" description="APX-GIS Documentation">
      <main style={{padding: '2rem'}}>
        <h1>APX-GIS Manuals</h1>
        <ul>
          <li><a href="/user-manual/5.3/">Version 5.3</a></li>
          <li><a href="/user-manual/5.4/">Version 5.4</a></li>
          <li><a href="/user-manual/5.5/">Version 5.5</a></li>
        </ul>
      </main>
    </Layout>
  );
}
