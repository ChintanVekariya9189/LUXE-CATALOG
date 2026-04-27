import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ChevronLeft } from 'lucide-react';

const Layout = ({ children, title, showBack }) => {
  return (
    <div className="layout">
      <header className="glass" style={{
        position: 'sticky',
        top: '1rem',
        zIndex: 100,
        margin: '1rem',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {showBack && (
            <Link to="/" style={{ display: 'flex', alignItems: 'center', color: 'var(--text-secondary)' }}>
              <ChevronLeft size={24} />
            </Link>
          )}
          <Link to="/">
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', background: 'linear-gradient(to right, #fff, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              LUXE CATALOG
            </h1>
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <ShoppingBag size={20} style={{ color: 'var(--text-secondary)' }} />
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifySelf: 'center', cursor: 'pointer' }}></div>
        </div>
      </header>
      
      <main className="container" style={{ paddingBottom: '4rem' }}>
        {children}
      </main>

      <footer style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        &copy; 2026 Luxe Catalog. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
