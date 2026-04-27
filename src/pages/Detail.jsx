import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useCatalog } from '../hooks/useCatalog';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Tag, Package, Star } from 'lucide-react';

const Detail = () => {
  const { name } = useParams();
  const { getItemByName } = useCatalog();
  const navigate = useNavigate();
  const item = getItemByName(name);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!item) {
      navigate('/');
    }
  }, [item, navigate]);

  if (!item) return null;

  return (
    <Layout showBack title={item.itemname}>
      <div style={{ padding: '2rem 0' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', 
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Image section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass"
            style={{ 
              borderRadius: '24px', 
              overflow: 'hidden', 
              position: 'relative',
              aspectRatio: '4/3',
              boxShadow: 'var(--card-shadow)'
            }}
          >
            <img 
              src={item.image} 
              alt={item.itemname} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              padding: '0.8rem 1.2rem',
              background: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <Star size={18} fill="#ffc107" color="#ffc107" />
              <span style={{ fontWeight: 600 }}>4.9</span>
            </div>
          </motion.div>

          {/* Details section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--accent-color)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.2em', fontWeight: 600, marginBottom: '1rem' }}>
              <Tag size={16} />
              {item.category}
            </div>
            
            <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '2rem', lineHeight: 1.1 }}>{item.itemname}</h1>
            
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                <Info size={18} />
                <span style={{ fontWeight: 500 }}>Specifications</span>
              </div>
              
              <div style={{ display: 'grid', gap: '1rem' }}>
                {/* Category specific props */}
                {item.itemprops.map((prop, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (idx * 0.1) }}
                    className="glass" 
                    style={{ 
                      padding: '1.2rem 1.5rem', 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'rgba(255,255,255,0.03)'
                    }}
                  >
                    <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{prop.label}</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.1rem' }}>{prop.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%',
                padding: '1.2rem',
                borderRadius: '16px',
                border: 'none',
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                color: 'white',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.8rem',
                boxShadow: '0 10px 20px -10px rgba(59, 130, 246, 0.5)'
              }}
            >
              <Package size={20} />
              Inquire Now
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile overrides */}
      <style>{`
        @media (max-width: 1024px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          h1[style*="font-size: 3.5rem"] {
            font-size: 2.5rem !important;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Detail;
