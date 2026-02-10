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
        // Buscamos as Categorias e os Tesouros que você vai subir no Painel
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
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* MENU DROP-DOWN DINÂMICO (ELE LÊ O SEU PAINEL) */}
      <nav style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 10 }}>
        <div style={{ fontWeight: 'bold', fontSize: '24px' }}>RAW TALENT</div>
        <select 
          onChange={(e) => setFiltro(e.target.value)}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        >
          <option value="all">Todas as Categorias</option>
          {categorias.map(cat => (
            <option key={cat._id} value={cat.title}>{cat.title}</option>
          ))}
        </select>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {loading ? (
          <p style={{ textAlign: 'center' }}>Abrindo a oficina...</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px' }}>
            {tesouros
              .filter(t => filtro === 'all' || t.categoriaNome === filtro)
              .map(item => (
                <section key={item._id} style={{ borderBottom: '2px solid #f0f0f0', paddingBottom: '40px' }}>
                  
                  {/* TÍTULO E DESCRIÇÃO (OS TIJOLOS) */}
                  <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>{item.title}</h2>
                  <p style={{ fontSize: '18px', color: '#444', marginBottom: '30px', lineHeight: '1.6' }}>{item.descricao}</p>

                  {/* GALERIA DE 1 A 5 FOTOS */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '30px' }}>
                    {item.fotos && item.fotos.map((url, index) => (
                      <img key={index} src={url} style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} alt="Tesouro do Adrian" />
                    ))}
                  </div>

                  {/* VÍDEOS DO YOUTUBE (1 A 2) */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    {item.videosYoutube && item.videosYoutube.map((url, idx) => (
                      <div key={idx} style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                        <iframe 
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px' }}
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
    </div>
  );
}
