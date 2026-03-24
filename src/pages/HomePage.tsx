import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* 固定导航栏 */}
      <Header />

      {/* 主要内容区域 */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* 页脚 */}
      <Footer />
    </div>
  );
};

export default HomePage;
