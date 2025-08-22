import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Banner from '../components/Banner';
import ContentSection from '../components/ContentSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      {/* <SubHeader />
      <Banner /> */}
      <ContentSection />
      <Footer />
    </div>
  );
}

export default Home;
