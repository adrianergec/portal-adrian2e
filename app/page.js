'use client';

import React, { useState } from 'react';

export default function Adrian2ePortal() {
  const [language, setLanguage] = useState('en');
  
  // 🎨 PAINEL DE PRECISÃO DO ADRIAN
  const [accentColor, setAccentColor] = useState('#6C5CE7'); 
  const [fontSize, setFontSize] = useState(18); // Controle de tamanho
  const [fontFamily, setFontFamily] = useState('Segoe UI'); // Controle de fonte

  const alphabets = [
    { name: "Cyrillic (RU, UA, BE, BG, SR, MK)", data: "Аа Бб Вв Гг Дд Ее Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ъъ Ыы Ьь Ээ Юю Яя" },
    { name: "Greek", data: "Αα Ββ Γγ Δδ Εε Ζζ Ηη Θθ Ιι Κκ Λλ Μμ Νν Ξξ Οο Ππ Ρρ Σσς Ττ Υυ Φφ Χχ Ψψ Ωω" },
    { name: "Germanic & Romance", data: "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz Ää Ëë Öö Üü ß Çç Ææ Øø" },
    { name: "Vietnamese", data: "Aa Ăă Ââ Bb Cc Dd Đđ Ee Êê Gg Hh Ii Kk Ll Mm Nn Oo Ôô Ơơ Pp Qq Rr Ss Tt Uu Ưư Vv Xx Yy" }
  ];

  return (
    <div className="portal">
      <style jsx global>{`
        body { margin: 0; background: #FFFFFF; color: #2D3436; font-family: ${fontFamily}, sans-serif; transition: 0.2s; }
        .sidebar { width: 300px; background: #F4F7F6; padding: 25px; border-right: 1px solid #DDD; min-height: 100vh; position: fixed; }
        .main { margin-left: 300px; padding: 60px; flex: 1; }
        .alphabet-card { 
          border-left: 5px solid ${accentColor}; 
          padding: 20px; 
          margin-bottom: 20px; 
          font-size: ${fontSize}px; /* TAMANHO DINÂMICO */
          line-height: 1.5;
        }
        .control-group { margin-bottom: 20px; background: white; padding: 10px; border-radius: 8px; border: 1px solid #EEE; }
        label { font-size: 0.7rem; font-weight: bold; display: block; margin-bottom: 5px; }
      `}</style>

      <div style={{display: 'flex'}}>
        <aside className="sidebar">
          <h2 style={{color: accentColor, margin: '0 0 5px 0'}}>adrian2e</h2>
          <p style={{fontSize: '0.7rem', color: '#999', marginBottom: '20px'}}>PRECISION DESIGN SYSTEM</p>
          
          <div className="control-group">
            <label>TOM EXATO (HEX):</label>
            <input type="color" value={accentColor} onChange={(e) => setAccentColor(e.target.value)} style={{width: '100%', cursor: 'pointer'}} />
            <code style={{fontSize: '0.7rem'}}>{accentColor}</code>
          </div>

          <div className="control-group">
            <label>TAMANHO DA FONTE: {fontSize}px</label>
            <input type="range" min="12" max="40" value={fontSize} onChange={(e) => setFontSize(e.target.value)} style={{width: '100%'}} />
          </div>

          <div className="control-group">
            <label>FAMÍLIA DA FONTE:</label>
            <select value={fontFamily} onChange={(e) => setFontFamily(e.target.value)} style={{width: '100%', padding: '5px'}}>
              <option value="Segoe UI">Segoe UI (Moderna)</option>
              <option value="Courier New">Courier New (Código)</option>
              <option value="Times New Roman">Times New Roman (Clássica)</option>
              <option value="Georgia">Georgia (Elegante)</option>
              <option value="Arial">Arial (Limpa)</option>
            </select>
          </div>

          <nav style={{marginTop: '30px', fontSize: '0.9rem'}}>
            <p><strong>📂 ENGENHARIA</strong></p>
            <p style={{color: accentColor}}>• Elevadores (150 andares)</p>
            <p><strong>📂 ALFABETOS</strong></p>
            <p>• {alphabets.length} Idiomas Mapeados</p>
          </nav>
        </aside>

        <main className="main">
          <h1 style={{fontSize: '2.5rem', color: accentColor}}>Database Linguística</h1>
          <p style={{color: '#636E72', marginBottom: '40px'}}>Trabalho de pesquisa do Raw Talent sobre alfabetos globais.</p>

          {alphabets.map((algo, i) => (
            <div key={i} className="alphabet-card">
              <p style={{fontWeight: 'bold', fontSize: '0.9rem', color: '#999', marginBottom: '10px'}}>{algo.name}</p>
              <p>{algo.data}</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
