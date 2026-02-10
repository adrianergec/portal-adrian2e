// app/page.js - VERSÃO FINAL COM SANITY FUNCIONANDO
"use client";

import React, { useState, useEffect } from 'react';
import { createClient } from '@sanity/client';

// CONEXÃO SANITY (DIRETA NO ARQUIVO)
const client = createClient({
  projectId: '8k2p3ky1',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-02-10',
});

export default function Adrian2ePortal() {
  const [tesouros, setTesouros] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [filtro, setFiltro] = useState('all');
  const [loading, setLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  // Carregar dados do Sanity
  useEffect(() => {
    async function buscarDados() {
      try {
        const query = `*[_type in ["category", "documentoAdrian", "teclado"]] | order(_createdAt desc) {
          ...,
          "categoriaNome": categoria->title,
          "fotos": imagens[].asset->url
        }`;
        const data = await client.fetch(query);
        
        setCategorias(data.filter(i => i._type === 'category'));
        setTesouros(data.filter(i => i._type === 'documentoAdrian' || i._type === 'teclado'));
        setLoading(false);
      } catch (e) {
        console.error("Erro ao conectar com Sanity:", e);
        setLoading(false);
      }
    }
    buscarDados();
  }, []);

  const translations = {
    en: {
      title: 'The Journey of Adrian',
      subtitle: 'Documenting natural cognitive development',
      archive: 'Archive: All Categories',
      loading: 'Opening the Archive...',
      partner: 'Become a Partner'
    },
    pt: {
      title: 'A Jornada de Adrian',
      subtitle: 'Documentando desenvolvimento cognitivo natural',
      archive: 'Arquivo: Todas as Categorias',
      loading: 'Abrindo o Arquivo...',
      partner: 'Seja um Parceiro'
    }
  };

  const t = translations[selectedLanguage];

  return (
    <div style={{ 
      backgroundColor: '#ffffff', 
      minHeight: '100vh', 
      fontFamily: 'Inter, system-ui, sans-serif', 
      margin: 0 
    }}>
      
      {/* ========== BANNER RAW TALENT ========== */}
      <section style={{ 
        minHeight: '80vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center',
        background: 'linear-gradient(to bottom, #000 0%, #111 100%)',
        color: '#fff',
        padding: '40px 20px',
        position: 'relative'
      }}>
        
        {/* Language Selector no topo */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          display: 'flex',
          gap: '10px'
        }}>
          {['en', 'pt'].map(lang => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              style={{
                padding: '8px 16px',
                border: `2px solid ${selectedLanguage === lang ? '#e53e3e' : '#444'}`,
                backgroundColor: selectedLanguage === lang ? '#e53e3e' : 'transparent',
                color: '#fff',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '600',
                textTransform: 'uppercase'
              }}
            >
              {lang === 'en' ? '🇬🇧 EN' : '🇧🇷 PT'}
            </button>
          ))}
        </div>

        <div style={{ 
          fontSize: '14px', 
          fontWeight: 'bold', 
          letterSpacing: '4px', 
          color: '#e53e3e', 
          marginBottom: '20px', 
          textTransform: 'uppercase' 
        }}>
          Exclusive Longitudinal Study
        </div>
        
        <h1 style={{ 
          fontSize: 'clamp(50px, 10vw, 110px)', 
          fontWeight: '900', 
          margin: 0, 
          letterSpacing: '-4px', 
          lineHeight: '0.9' 
        }}>
          RAW <br/> TALENT
        </h1>

        <p style={{ 
          fontSize: 'clamp(18px, 3vw, 26px)', 
          maxWidth: '850px', 
          opacity: 0.9, 
          marginTop: '30px', 
          fontWeight: '300', 
          lineHeight: '1.5' 
        }}>
          {t.subtitle} in <strong style={{color: '#fff', fontWeight: '700'}}>2e + gifted mind</strong>.
        </p>

        <div style={{ display: 'flex', gap: '20px', marginTop: '50px' }}>
          <button style={{ 
            padding: '18px 45px', 
            fontSize: '14px', 
            fontWeight: 'bold', 
            borderRadius: '4px', 
            border: 'none', 
            backgroundColor: '#e53e3e', 
            color: '#fff', 
            cursor: 'pointer', 
            textTransform: 'uppercase', 
            letterSpacing: '1px' 
          }}>
            {t.partner}
          </button>
        </div>
      </section>

      {/* ========== NAVEGAÇÃO ========== */}
      <nav style={{ 
        padding: '20px 50px', 
        borderBottom: '1px solid #eee', 
        display: 'flex', 
        flexWrap: 'wrap',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        position: 'sticky', 
        top: 0, 
        backgroundColor: 'rgba(255,255,255,0.95)', 
        backdropFilter: 'blur(10px)', 
        zIndex: 10,
        gap: '20px'
      }}>
        <div style={{ 
          fontWeight: '900', 
          fontSize: '20px', 
          letterSpacing: '-1px' 
        }}>
          ADRIAN2E <span style={{fontWeight: '300', color: '#999'}}>PORTAL</span>
        </div>
        
        <select 
          onChange={(e) => setFiltro(e.target.value)}
          style={{ 
            padding: '10px 20px', 
            borderRadius: '8px', 
            border: '1px solid #ddd', 
            backgroundColor: '#fff', 
            cursor: 'pointer', 
            outline: 'none' 
          }}
        >
          <option value="all">{t.archive}</option>
          {categorias.map(cat => (
            <option key={cat._id} value={cat.title}>{cat.title}</option>
          ))}
        </select>
      </nav>

      {/* ========== CONTEÚDO PRINCIPAL ========== */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
        {loading ? (
          <p style={{ textAlign: 'center', color: '#999', fontSize: '18px' }}>
            {t.loading}
          </p>
        ) : tesouros.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '100px 20px',
            color: '#999'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>📦</div>
            <h3 style={{ fontSize: '24px', marginBottom: '10px', color: '#333' }}>
              Nenhum documento ainda
            </h3>
            <p>Adicione documentos pelo Sanity Studio!</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '100px' }}>
            {tesouros
              .filter(t => filtro === 'all' || t.categoriaNome === filtro)
              .map(item => (
                <section key={item._id} style={{ 
                  borderBottom: '1px solid #eee', 
                  paddingBottom: '60px' 
                }}>
                  
                  <div style={{ marginBottom: '10px' }}>
                    <span style={{ 
                      fontSize: '12px', 
                      fontWeight: '800', 
                      color: '#e53e3e', 
                      textTransform: 'uppercase', 
                      letterSpacing: '1px' 
                    }}>
                      {item.categoriaNome || item.linguaScript || 'General Record'}
                    </span>
                  </div>

                  <h2 style={{ 
                    fontSize: 'clamp(28px, 5vw, 42px)', 
                    fontWeight: '800', 
                    marginBottom: '20px', 
                    letterSpacing: '-1px' 
                  }}>
                    {item.title || item.nomeTeclado || 'Untitled'}
                  </h2>
                  
                  <p style={{ 
                    fontSize: 'clamp(16px, 2vw, 20px)', 
                    color: '#555', 
                    marginBottom: '40px', 
                    lineHeight: '1.8', 
                    maxWidth: '900px' 
                  }}>
                    {item.descricao || item.descricaoTecnica || 'No description available'}
                  </p>

                  {/* TAGS */}
                  {item.tags && item.tags.length > 0 && (
                    <div style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: '10px', 
                      marginBottom: '30px' 
                    }}>
                      {item.tags.map((tag, idx) => (
                        <span key={idx} style={{
                          padding: '6px 12px',
                          backgroundColor: '#f1f3f4',
                          color: '#5f6368',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '500'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* GALERIA DE FOTOS */}
                  {item.fotos && item.fotos.length > 0 && (
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                      gap: '20px', 
                      marginBottom: '40px' 
                    }}>
                      {item.fotos.map((url, index) => (
                        <img 
                          key={index} 
                          src={url} 
                          style={{ 
                            width: '100%', 
                            aspectRatio: '4/3', 
                            objectFit: 'cover', 
                            borderRadius: '4px', 
                            filter: 'grayscale(20%)' 
                          }} 
                          alt="Archive Entry" 
                        />
                      ))}
                    </div>
                  )}

                  {/* VÍDEOS DO YOUTUBE */}
                  {item.videosYoutube && item.videosYoutube.length > 0 && (
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                      gap: '20px' 
                    }}>
                      {item.videosYoutube.map((url, idx) => (
                        <div key={idx} style={{ 
                          position: 'relative', 
                          paddingBottom: '56.25%', 
                          height: 0, 
                          overflow: 'hidden', 
                          borderRadius: '4px', 
                          backgroundColor: '#000' 
                        }}>
                          <iframe 
                            style={{ 
                              position: 'absolute', 
                              top: 0, 
                              left: 0, 
                              width: '100%', 
                              height: '100%' 
                            }}
                            src={url.replace("watch?v=", "embed/")} 
                            frameBorder="0" 
                            allowFullScreen
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </section>
            ))}
          </div>
        )}
      </main>

      {/* ========== FOOTER ========== */}
      <footer style={{ 
        padding: '80px 20px', 
        textAlign: 'center', 
        borderTop: '1px solid #eee', 
        color: '#999', 
        fontSize: '13px' 
      }}>
        RAW TALENT • A DOCUMENTARY BY ROSANI • 2026
      </footer>
    </div>
  );
}
