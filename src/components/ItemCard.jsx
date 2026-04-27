import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const ItemCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="glass"
      style={{
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--card-shadow)'
      }}
    >
      <Link to={`/item/${encodeURIComponent(item.itemname)}`} style={{ display: 'block', height: '100%' }}>
        <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/10' }}>
          <img 
            src={item.image} 
            alt={item.itemname} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transition: 'transform 0.5s ease'
            }}
            loading="lazy"
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            padding: '0.5rem 1rem',
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
            fontSize: '0.7rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            borderTopRightRadius: '12px'
          }}>
            {item.category}
          </div>
        </div>
        
        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 600 }}>{item.itemname}</h3>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              {item.itemprops[0]?.label}: {item.itemprops[0]?.value}
            </div>
          </div>
          
          <div style={{ 
            marginTop: '1.5rem', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            color: 'var(--accent-light)',
            fontWeight: 500,
            fontSize: '0.9rem'
          }}>
            View Details
            <ChevronRight size={18} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ItemCard;
