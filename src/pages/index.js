import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          👋 Hi, I'm Shanthalingaiah S.M
        </Heading>
        <p className="hero__subtitle">
          Senior Informational Developer • 6+ Years Experience in Fintech, Medical, and Automotive Documentation
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            📂 View My Work
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/contact"
            style={{ marginLeft: '1rem' }}
          >
            📬 Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | Portfolio`}
      description="Portfolio of Shanthalingaiah S.M - Senior Informational Developer and Technical Writer"
    >
      <HomepageHeader />
      <main>
        <section style={{ textAlign: 'center', margin: '3rem 0' }}>
          <h2>🌟 Highlights</h2>
          <p>
            Explore my projects, documentation samples, and professional journey.
          </p>
        </section>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
