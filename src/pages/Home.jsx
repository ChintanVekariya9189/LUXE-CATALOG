import React from 'react';
import Layout from '../components/Layout';
import CategorySection from '../components/CategorySection';
import { useCatalog } from '../hooks/useCatalog';
import { motion } from 'framer-motion';

const Home = () => {
  const { categories, groupByCategory } = useCatalog();

  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ padding: '4rem 0' }}
      >
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
          fontWeight: 800, 
          lineHeight: 1.1,
          marginBottom: '1rem',
          letterSpacing: '-0.05em'
        }}>
          Explore the <br /> 
          <span style={{ color: 'var(--accent-color)' }}>Future of Living.</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px' }}>
          Discover a curated collection of world-class engineering and innovative technology across multiple categories.
        </p>
      </motion.div>

      {categories.map((category) => (
        <CategorySection 
          key={category} 
          title={category} 
          items={groupByCategory[category]} 
        />
      ))}
    </Layout>
  );
};

export default Home;
