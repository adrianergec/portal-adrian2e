"use client";

import React, { useState, useEffect } from 'react';
import { createClient } from '@sanity/client';

// CONEXÃO COM A SUA OFICINA (SANITY)
const client = createClient({
  projectId: '8k2p3ky1',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

export default function VitrineRawTalent() {
  const [tesouros, setTesouros] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [filtro, setFiltro] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarDados() {
      try {
        const query = `*[_type in ["category", "documentoAdrian"]] | order(_createdAt desc) {
          ...,
          "categoriaNome": categoria->title,
          "fotos": imagens[].asset->url
        }`;
        const data = await client.fetch(query);
        setCategorias(data.filter(i => i._type === 'category'));
        setTesouros(data.filter(i => i._type === 'documentoAdrian'));
        setLoading(false);
      } catch (e) {
        console.error("Erro na conexão:", e);
        setLoading(false);
      }
    }
    buscarDados();
  }, []);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', margin: 0 }}>
      
      {/* 1. BANNER CINEMATOGRÁFICO (PARA PATROCINADORES) */}
      <section style={{ 
        minHeight: '80vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center',
        background: 'linear-gradient(to bottom, #000 0%, #111 100%)',
        color: '#fff',
        padding: '40px 20px'
      }}>
        <div style={{ fontSize: '14px', fontWeight: 'bold', letterSpacing: '4px', color: '#e53e3e', marginBottom: '20px', textTransform: 'uppercase' }}>
          Exclusive Longitudinal Study
        </div>
        
        <h1 style={{ fontSize: 'clamp(50px, 10vw, 110px)', fontWeight: '900', margin: 0, letterSpacing: '-4px', lineHeight: '0.9' }}>
          RAW <br/> TALENT
        </h1>

        <p style={{ fontSize: 'clamp(18px, 3vw, 26px)', maxWidth: '850px', opacity: 0.9, marginTop: '30px', fontWeight: '300', lineHeight: '1.5' }}>
          Documenting the natural emergence of structured language and engineering design in <strong style={{color: '#fff', fontWeight: '700'}}>2e + gifted mind</strong>.
        </p>

        <div style={{ display: 'flex', gap: '20px', marginTop: '50px' }}>
          <button style={{ padding: '18px 45px', fontSize: '14px', fontWeight: 'bold', borderRadius: '4px', border: 'none', backgroundColor: '#e53e3e', color: '#fff', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Become a Partner
          </button>
        </div>
      </section>

      {/* 2. NAVEGAÇÃO / MENU DROP-DOWN */}
      <nav style={{ padding: '20px 50px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', zIndex: 10 }}>
        <div style={{ fontWeight: '900', fontSize: '20px', letterSpacing: '-1px' }}>ADRIAN2E <span style={{fontWeight: '300', color: '#999'}}>PORTAL</span></div>
        
        <select 
          onChange={(e) => setFiltro(e.target.value)}
          style={{ padding: '10px 20px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: '#fff', cursor: 'pointer', outline: 'none' }}
        >
          <option value="all">Archive: All Categories</option>
          {categorias.map(cat => (
            <option key={cat._id} value={cat.title}>{cat.title}</option>
          ))}
        </select>
      </nav>

      {/* 3. VITRINE DE ARQUIVOS (O CLASSICADO) */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
        {loading ? (
          <p style={{ textAlign: 'center', color: '#999' }}>Opening the Archive...</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '100px' }}>
            {tesouros
              .filter(t => filtro === 'all' || t.categoriaNome === filtro)
              .map(item => (
                <section key={item._id} style={{ borderBottom: '1px solid #eee', paddingBottom: '60px' }}>
                  
                  <div style={{ marginBottom: '10px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '800', color: '#e53e3e', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {item.categoriaNome || 'General Record'}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px', letterSpacing: '-1px' }}>{item.title}</h2>
                  <p style={{ fontSize: '20px', color: '#555', marginBottom: '40px', lineHeight: '1.8', maxWidth: '900px' }}>{item.descricao}</p>

                  {/* GALERIA DE FOTOS */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                    {item.fotos && item.fotos.map((url, index) => (
                      <img key={index} src={url} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '4px', filter: 'grayscale(20%)' }} alt="Archive Entry" />
                    ))}
                  </div>

                  {/* VÍDEOS DO YOUTUBE */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
                    {item.videosYoutube && item.videosYoutube.map((url, idx) => (
                      <div key={idx} style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '4px', backgroundColor: '#000' }}>
                        <iframe 
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          src={url.replace("watch?v=", "embed/")} 
                          frameBorder="0" 
                          allowFullScreen
                        ></iframe>
                      </div>
                    ))}
                  </div>
                </section>
            ))}
          </div>
        )}
      </main>

      <footer style={{ padding: '80px 20px', textAlign: 'center', borderTop: '1px solid #eee', color: '#999', fontSize: '13px' }}>
        RAW TALENT • A DOCUMENTARY BY ROSANI • 2026
      </footer>
    </div>
  );
}
