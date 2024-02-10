import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Our Services</title>
      </Head>
      <Header />
      <main>
        <h1>Our Services</h1>
        <ServiceCard title="Residential Cleaning" description="Cleaning services for homes and apartments." />
        <ServiceCard title="Commercial Cleaning" description="Cleaning services for offices and commercial spaces." />
        <ServiceCard title="Carpet Cleaning" description="Professional carpet cleaning services." />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
