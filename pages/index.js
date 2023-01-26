import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

// REQUIRED:
// has to be above it's useage
// like a normal function should
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>The founder, Jared Ledbetter, is a proud United States Marine Corps Veteran. He has worked in Supply & Logistics for well over 15 years during the Marine Corps, as a government contractor, and as a federal employee. Still today, Mr. Ledbetter works as a federal employee. Working in areas such as warehousing, purchasing, data entry, transportation, systems analysis, database management, integrations between systems, and so much more.<br></br>
        <br></br>
        In 2012, Mr. Ledbetter started teaching himself web development to support his own business ventures. Beginning with WordPress, shortly after the WooCommerce release, and eventually migrating to the Shopify platform. During these days, the Elementor / Divi / Oxygen type options for WordPress didn't exist. For example, you were basically forced to learn the HTML for contact forms just to be able to build one. Much has changed in today's ecosystem.<br></br>
        <br></br>
        By 2018, Mr. Ledbetter was hired as a part-time Junior Developer. Duties initially consisted of Squarespace web development. Employment retention was dependent on the requirement to learn how to code websites. Mr. Ledbetter completed the front-end web development required course in about four months and was hooked.<br></br>
        <br></br>
        Since then, a deep desire to learn more has always been a fire that lit the path forward. Mr. Ledbetter began learning about Search Engine Optimization, Conversion Rate Optimization, back-end web development, full stack javascript, Node.js, databases, web applications, testing methods, and so much more.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}