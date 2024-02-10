import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
// import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Cleaning Service</title>
      </Head>
      <Header />
      <main>
        <h1>Welcome to Cleaning Service</h1>
        <ServiceCard title="Residential Cleaning" description="Cleaning services for homes and apartments." />
        <ServiceCard title="Commercial Cleaning" description="Cleaning services for offices and commercial spaces." />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
