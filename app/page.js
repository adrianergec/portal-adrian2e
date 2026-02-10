"use client";

import React, { useState, useEffect } from 'react';

export default function Adrian2ePortal() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  // Proteção para a "vaca não dormir" na Vercel (Erro de Window)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff', minHeight: '100vh', margin: 0 }}>
      
      {/* ========== O BANNER (A Fachada da Mansão) ========== */}
      <div style={{ width: '100%', backgroundColor: 'white', borderBottom: '1px solid #eee' }}>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {/* Espaço para a Foto do Adrian (Raw Talent) */}
          <div style={{
            width: isMobile ? '100%' : '500px',
            height: isMobile ? '400px' : '700px',
            backgroundColor: '#f9f9f9'
          }}>
            <img 
              src="https://cdn.sanity.io/images/8k2p3ky1/production/dcbae6479811c83b5ce8afb80a2551c7fba7ec34-1200x1200.png" 
              alt="Raw Talent - Adrian"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Texto de Boas-Vindas */}
          <div style={{ padding: isMobile ? '40px 20px' : '80px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 style={{ fontSize: isMobile ? '48px' : '82px', fontWeight: '800', margin: '0 0 20px 0', letterSpacing: '-2px' }}>
              RAW TALENT
            </h1>
            <p style={{ fontSize: '24px', fontStyle: 'italic', color: '#666', marginBottom: '40px' }}>
              The Journey of Adrian
            </p>
            <div style={{ height: '2px', backgroundColor: '#e53e3e', width: '60px', marginBottom: '40px' }}></div>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#333', maxWidth: '600px' }}>
              Documenting the natural emergence of structured language and engineering design 
              in a neurodivergent mind.
            </p>
          </div>
        </div>
      </div>

      {/* ========== ÁREA DOS MÓVEIS (Onde os cards vão aparecer) ========== */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '300' }}>Documentation Archive</h2>
          <p style={{ color: '#888' }}>Waiting for Sanity data to be furnished...</p>
        </div>

        {/* Aqui é onde a mágica vai acontecer quando conectarmos o Sanity */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1 row' : 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '30px' 
        }}>
          {/* Placeholder de um card vazio (A mobília que vai chegar) */}
          <div style={{ padding: '40px', border: '1px dashed #ccc', borderRadius: '12px', textAlign: 'center' }}>
            <span style={{ fontSize: '40px' }}>📦</span>
            <p style={{ color: '#ccc' }}>Project data will load here</p>
          </div>
        </div>
      </div>

    </div>
  );
}
