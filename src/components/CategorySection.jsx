import React from 'react';
import ItemCard from './ItemCard';

const CategorySection = ({ title, items }) => {
  return (
    <section style={{ margin: '4rem 0' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'baseline',
        marginBottom: '2rem',
        borderBottom: '1px solid var(--glass-border)',
        paddingBottom: '1rem'
      }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.03em' }}>{title}</h2>
        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{items.length} items</span>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {items.map((item, index) => (
          <ItemCard key={item.itemname} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
