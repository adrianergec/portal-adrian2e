'use client';

import React, { useState, useEffect } from 'react';

export default function Adrian2ePortal() {
  const [language, setLanguage] = useState('en'); 
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const translations = {
    vi: {
      heroTitle: 'NGÔN_NGỮ_BẨM_SINH: MÃ_HÓA_THẾ_GIỚI',
      heroSubtitle: 'Đối với Adrian, viết không phải là kỹ năng học qua lặp lại; đó là bản năng bẩm sinh.',
      statusBadge: 'TRẠNG_THÁI: SẴN_SÀNG_NÂNG_CẤP_HỆ_THỐNG',
      linguistics: 'CƠ_SỞ_DỮ_LIỆU_NGÔN_NGỮ',
    },
    en: {
      heroTitle: 'INNATE_LANGUAGE: CODING_THE_WORLD',
      heroSubtitle: 'For Adrian, writing is not a learned skill; it is an innate instinct.',
      statusBadge: 'STATUS: READY_FOR_SYSTEM_UPGRADE',
      linguistics: 'LINGUISTICS_DB',
    },
    pt: {
      heroTitle: 'LINGUAGEM_INATA: CODIFICANDO_O_MUNDO',
      heroSubtitle: 'Para Adrian, a escrita é um instinto nato, não apenas uma habilidade aprendida.',
      statusBadge: 'STATUS: PRONTO_PARA_UPGRADE_DE_SISTEMA',
      linguistics: 'BASE_DE_LINGUÍSTICA',
    },
    tr: {
      heroTitle: 'DOĞUŞTAN_GELEN_DİL: DÜNYAYI_KODLAMAK',
      heroSubtitle: 'Adrian için yazmak öğrenilmiş bir beceri değil, doğuştan gelen bir içgüdüdür.',
      statusBadge: 'DURUM: SİSTEM_YÜKSELTMESİNE_HAZIR',
      linguistics: 'DİLBİLİM_VERİTABANI',
    },
    cs: {
      heroTitle: 'VROZENÝ_JAZYK: KÓDOVÁNÍ_SVĚTA',
      heroSubtitle: 'Pro Adriana není psaní dovednost naučená opakováním; je to vrozený instinkt.',
      statusBadge: 'STAV: PŘIPRAVENO_K_AKTUALIZACI_SYSTÉMU',
      linguistics: 'LINGVISTICKÁ_DATABÁZE',
    }
  };

  const t = translations[language] || translations['en'];

  return (
    <div className="portal-container">
      <style jsx global>{`
        body { margin: 0; background: #000; color: #00FF41; font-family: 'Courier New', monospace; overflow-x: hidden; }
        .portal-container { display: flex; min-height: 100vh; }
        .sidebar {
          width: ${sidebarOpen ? '280px' : '60px'};
          background: #0a0a0a;
          border-right: 2px solid #00FF41;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 20px;
          display: flex;
          flex-direction: column;
          z-index: 100;
        }
        .main-content { flex: 1; padding: 40px; text-align: center; z-index: 1; }
        .lang-selector { position: fixed; top: 20px; right: 20px; display: flex; gap: 8px; z-index: 1000; flex-wrap: wrap; justify-content: flex-end; max-width: 300px; }
        button { background: rgba(0,0,0,0.7); border: 1px solid #00FF41; color: #00FF41; cursor: pointer; padding: 6px 12px; font-family: inherit; font-size: 0.8rem; transition: 0.3s; }
        button:hover { background: #00FF41; color: #000; box-shadow: 0 0 10px #00FF41; }
        .active-lang { background: #00FF41; color: #000; }
        h1 { font-size: clamp(1.5rem, 5vw, 2.5rem); text-shadow: 0 0 10px #00FF41; margin-top: 50px; }
        .folder-list { text-align: left; margin-top: 30px; opacity: ${sidebarOpen ? '1' : '0'}; transition: 0.3s; }
        .scanline { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 255, 65, 0.025) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.01), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.01)); background-size: 100% 4px, 3px 100%; pointer-events: none; z-index: 50; }
      `}</style>

      <div className="scanline"></div>

      <div className="lang-selector">
        {['en', 'pt', 'vi', 'tr', 'cs'].map((l) => (
          <button key={l} onClick={() => setLanguage(l)} className={language === l ? 'active-lang' : ''}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <aside className="sidebar">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{marginBottom: '20px'}}>
          {sidebarOpen ? '[ HIDE_MENU ]' : '[ + ]'}
        </button>
        <div className="folder-list">
          <p style={{fontSize: '0.7rem', color: '#444'}}>SYSTEM_RESOURCES</p>
          <p>📂 {t.linguistics}</p>
          <p>📂 SOURCE_CODE</p>
          <p>📂 VISUAL_LOGS</p>
          <div style={{marginTop: 'auto', paddingTop: '20px', fontSize: '0.7rem', color: '#008F11'}}>
            <p>USER: adrian2e</p>
            <p>RANK: RAW_TALENT</p>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <div style={{ marginTop: '10vh' }}>
          <div style={{ border: '1px solid #00FF41', display: 'inline-block', padding: '5px 15px', marginBottom: '20px', fontSize: '0.8rem' }}>
            {t.statusBadge}
          </div>
          <h1>{t.heroTitle}</h1>
          <p style={{ color: '#888', maxWidth: '700px', margin: '30px auto', lineHeight: '1.6' }}>
            {t.heroSubtitle}
          </p>
          <div style={{ marginTop: '50px', border: '1px solid #333', padding: '20px', background: 'rgba(0,255,65,0.02)' }}>
             <p style={{margin: 0, fontSize: '0.9rem'}}>LOCATION: AUCKLAND, NEW ZEALAND</p>
             <p style={{margin: '10px 0 0 0', color: '#008F11', fontSize: '0.7rem'}}>ENCRYPTED_CONNECTION_STABLE</p>
          </div>
        </div>
      </main>
    </div>
  );
}
