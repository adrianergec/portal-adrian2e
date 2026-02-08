// app/page.js - VERSÃO FINAL: GOOGLE STYLE + TURCO + TCHECO
'use client';

import React, { useState } from 'react';

export default function Adrian2ePortal() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [openSection, setOpenSection] = useState('linguistics');

  // === TRADUÇÕES EM 8 IDIOMAS (+ TURCO + TCHECO!) ===
  const translations = {
    en: {
      heroTitle: 'Innate Language: Coding the World',
      heroSubtitle: 'For Adrian, writing is not a learned skill through repetition; it is an innate instinct. Complex alphabets and programming languages are merely different interfaces for the same mental system.',
      searchPlaceholder: 'Search alphabets, projects, or code...',
      genesisTitle: 'The 2019 Genesis',
      genesisText: 'At age 3, while under clinical neurodiversity analysis, Adrian was already operating in multi-language mode: writing in 5 alphabetic systems (English, Russian, Greek, Turkish, Spanish) without visual reference.',
      pragueTitle: 'Prague Hotel Project (2024)',
      pragueText: 'At age 6, Adrian designed a complete hotel in Prague and organized his luggage for the airport, demonstrating his deep identification with Czech culture and architecture.',
      alphabetDatabase: 'Alphabet Database',
      dailyLogs: 'The Daily Raw Talent',
      printButton: 'Print for School',
      linguisticsDB: 'Linguistics Database',
      programming: 'Programming',
      projects: 'Projects'
    },
    pt: {
      heroTitle: 'Linguagem Inata: Codificando o Mundo',
      heroSubtitle: 'Para Adrian, a escrita não é uma habilidade aprendida por repetição; é um instinto nato. Alfabetos complexos e linguagens de programação são apenas diferentes interfaces para o mesmo sistema mental.',
      searchPlaceholder: 'Buscar alfabetos, projetos ou código...',
      genesisTitle: 'A Gênese 2019',
      genesisText: 'Aos 3 anos, enquanto sob análise clínica de neurodiversidade, Adrian já operava em modo multi-linguagem: escrevendo em 5 sistemas alfabéticos (Inglês, Russo, Grego, Turco, Espanhol) sem referência visual.',
      pragueTitle: 'Projeto Hotel de Praga (2024)',
      pragueText: 'Aos 6 anos, Adrian projetou um hotel completo em Praga e organizou sua bagagem para o aeroporto, demonstrando sua profunda identificação com a cultura e arquitetura tcheca.',
      alphabetDatabase: 'Banco de Dados de Alfabetos',
      dailyLogs: 'O Talento Diário Bruto',
      printButton: 'Imprimir para Escola',
      linguisticsDB: 'Base de Linguística',
      programming: 'Programação',
      projects: 'Projetos'
    },
    tr: {
      heroTitle: 'Doğuştan Dil: Dünyayı Kodlamak',
      heroSubtitle: 'Adrian için yazmak tekrar yoluyla öğrenilen bir beceri değildir; doğuştan gelen bir içgüdüdür. Karmaşık alfabeler ve programlama dilleri, aynı zihinsel sistemin farklı arayüzleridir.',
      searchPlaceholder: 'Alfabeler, projeler veya kod ara...',
      genesisTitle: '2019 Başlangıcı',
      genesisText: '3 yaşında, klinik nöroçeşitlilik analizi altındayken, Adrian zaten çok dilli modda çalışıyordu: görsel referans olmadan 5 alfabetik sistemde (İngilizce, Rusça, Yunanca, Türkçe, İspanyolca) yazıyordu.',
      pragueTitle: 'Prag Otel Projesi (2024)',
      pragueText: '6 yaşında Adrian, Prag\'da eksiksiz bir otel tasarladı ve havaalanı için bavullarını topladı, Çek kültürü ve mimarisiyle derin özdeşleşmesini gösterdi.',
      alphabetDatabase: 'Alfabe Veritabanı',
      dailyLogs: 'Günlük Ham Yetenek',
      printButton: 'Okul İçin Yazdır',
      linguisticsDB: 'Dilbilim Veritabanı',
      programming: 'Programlama',
      projects: 'Projeler'
    },
    cs: {
      heroTitle: 'Vrozený Jazyk: Kódování Světa',
      heroSubtitle: 'Pro Adriana není psaní dovedností naučenou opakováním; je to vrozený instinkt. Složité abecedy a programovací jazyky jsou pouze různými rozhraními stejného mentálního systému.',
      searchPlaceholder: 'Hledat abecedy, projekty nebo kód...',
      genesisTitle: 'Geneze 2019',
      genesisText: 'Ve 3 letech, během klinické analýzy neurodiverzity, Adrian již fungoval v mnohojazyčném režimu: psal v 5 abecedních systémech (angličtina, ruština, řečtina, turečtina, španělština) bez vizuální reference.',
      pragueTitle: 'Projekt Hotelu v Praze (2024)',
      pragueText: 'V 6 letech Adrian navrhl kompletní hotel v Praze a připravil si zavazadla na letiště, což prokazuje jeho hlubokou identifikaci s českou kulturou a architekturou.',
      alphabetDatabase: 'Databáze Abeced',
      dailyLogs: 'Denní Surový Talent',
      printButton: 'Vytisknout pro Školu',
      linguisticsDB: 'Lingvistická Databáze',
      programming: 'Programování',
      projects: 'Projekty'
    },
    vi: {
      heroTitle: 'Ngôn Ngữ Bẩm Sinh: Mã Hóa Thế Giới',
      heroSubtitle: 'Đối với Adrian, viết không phải là kỹ năng học qua lặp lại; đó là bản năng bẩm sinh. Bảng chữ cái phức tạp và ngôn ngữ lập trình chỉ là các giao diện khác nhau cho cùng một hệ thống tinh thần.',
      searchPlaceholder: 'Tìm kiếm bảng chữ cái, dự án hoặc mã...',
      genesisTitle: 'Nguồn Gốc 2019',
      genesisText: 'Ở tuổi 3, trong khi đang được phân tích lâm sàng về sự đa dạng thần kinh, Adrian đã hoạt động ở chế độ đa ngôn ngữ: viết trong 5 hệ thống chữ cái mà không cần tham chiếu trực quan.',
      pragueTitle: 'Dự Án Khách Sạn Prague (2024)',
      pragueText: 'Ở tuổi 6, Adrian đã thiết kế một khách sạn hoàn chỉnh ở Prague và chuẩn bị hành lý đến sân bay, thể hiện sự đồng nhất sâu sắc với văn hóa và kiến trúc Séc.',
      alphabetDatabase: 'Cơ Sở Dữ Liệu Bảng Chữ Cái',
      dailyLogs: 'Tài Năng Thô Hàng Ngày',
      printButton: 'In Cho Trường',
      linguisticsDB: 'Cơ Sở Dữ Liệu Ngôn Ngữ',
      programming: 'Lập Trình',
      projects: 'Dự Án'
    },
    de: {
      heroTitle: 'Angeborene Sprache: Die Welt Kodieren',
      heroSubtitle: 'Für Adrian ist Schreiben keine durch Wiederholung erlernte Fähigkeit; es ist ein angeborener Instinkt. Komplexe Alphabete und Programmiersprachen sind lediglich unterschiedliche Schnittstellen für dasselbe mentale System.',
      searchPlaceholder: 'Alphabete, Projekte oder Code suchen...',
      genesisTitle: 'Die Genesis 2019',
      genesisText: 'Im Alter von 3 Jahren, während klinischer Neurodiversitätsanalyse, operierte Adrian bereits im Mehrsprachenmodus: Schreiben in 5 alphabetischen Systemen ohne visuelle Referenz.',
      pragueTitle: 'Prager Hotelprojekt (2024)',
      pragueText: 'Im Alter von 6 Jahren entwarf Adrian ein komplettes Hotel in Prag und packte seine Koffer für den Flughafen, was seine tiefe Identifikation mit tschechischer Kultur und Architektur zeigt.',
      alphabetDatabase: 'Alphabet-Datenbank',
      dailyLogs: 'Das Tägliche Raw Talent',
      printButton: 'Für Schule Drucken',
      linguisticsDB: 'Linguistik-Datenbank',
      programming: 'Programmierung',
      projects: 'Projekte'
    },
    ru: {
      heroTitle: 'Врождённый Язык: Кодирование Мира',
      heroSubtitle: 'Для Адриана письмо — это не навык, приобретенный через повторение; это врожденный инстинкт. Сложные алфавиты и языки программирования — это просто разные интерфейсы для одной и той же ментальной системы.',
      searchPlaceholder: 'Поиск алфавитов, проектов или кода...',
      genesisTitle: 'Генезис 2019',
      genesisText: 'В возрасте 3 лет, находясь под клиническим анализом нейроразнообразия, Адриан уже работал в многоязычном режиме: писал на 5 алфавитных системах без визуальной ссылки.',
      pragueTitle: 'Проект Отеля в Праге (2024)',
      pragueText: 'В возрасте 6 лет Адриан спроектировал полноценный отель в Праге и собрал чемоданы в аэропорт, демонстрируя глубокую идентификацию с чешской культурой и архитектурой.',
      alphabetDatabase: 'База Данных Алфавитов',
      dailyLogs: 'Ежедневный Природный Талант',
      printButton: 'Печать для Школы',
      linguisticsDB: 'Лингвистическая БД',
      programming: 'Программирование',
      projects: 'Проекты'
    },
    es: {
      heroTitle: 'Lenguaje Innato: Codificando el Mundo',
      heroSubtitle: 'Para Adrian, escribir no es una habilidad aprendida por repetición; es un instinto innato. Alfabetos complejos y lenguajes de programación son simplemente diferentes interfaces para el mismo sistema mental.',
      searchPlaceholder: 'Buscar alfabetos, proyectos o código...',
      genesisTitle: 'El Génesis 2019',
      genesisText: 'A los 3 años, mientras estaba bajo análisis clínico de neurodiversidad, Adrian ya operaba en modo multilingüe: escribiendo en 5 sistemas alfabéticos sin referencia visual.',
      pragueTitle: 'Proyecto Hotel de Praga (2024)',
      pragueText: 'A los 6 años, Adrian diseñó un hotel completo en Praga y organizó su equipaje para el aeroporto, demostrando su profunda identificación con la cultura y arquitectura checa.',
      alphabetDatabase: 'Base de Datos de Alfabetos',
      dailyLogs: 'El Talento Diario Crudo',
      printButton: 'Imprimir para Escuela',
      linguisticsDB: 'Base de Lingüística',
      programming: 'Programación',
      projects: 'Proyectos'
    }
  };

  const t = translations[selectedLanguage];

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      display: 'flex'
    }}>
      
      {/* SIDEBAR */}
      <aside style={{
        width: '280px',
        backgroundColor: '#f8f9fa',
        borderRight: '1px solid #dadce0',
        padding: '20px',
        height: '100vh',
        position: 'fixed',
        overflowY: 'auto'
      }}>
        
        <div style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#1a73e8',
          marginBottom: '30px',
          paddingBottom: '20px',
          borderBottom: '2px solid #1a73e8'
        }}>
          adrian2e.org
        </div>

        <nav>
          
          {/* LINGUISTICS */}
          <div style={{ marginBottom: '15px' }}>
            <button 
              onClick={() => setOpenSection(openSection === 'linguistics' ? '' : 'linguistics')}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: openSection === 'linguistics' ? '#e8f0fe' : 'transparent',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '14px',
                fontWeight: '500',
                color: '#202124',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>📚 {t.linguisticsDB}</span>
              <span>{openSection === 'linguistics' ? '▼' : '▶'}</span>
            </button>
            
            {openSection === 'linguistics' && (
              <div style={{ 
                paddingLeft: '20px', 
                marginTop: '8px',
                borderLeft: '2px solid #e8f0fe'
              }}>
                <div style={menuItemStyle}>🇷🇺 Russian</div>
                <div style={menuItemStyle}>🇬🇷 Greek</div>
                <div style={menuItemStyle}>🇻🇳 Vietnamese</div>
                <div style={menuItemStyle}>🇯🇵 Japanese</div>
                <div style={menuItemStyle}>🇩🇪 German</div>
                <div style={menuItemStyle}>🇹🇷 Turkish</div>
                <div style={menuItemStyle}>🇨🇿 Czech</div>
              </div>
            )}
          </div>

          {/* PROGRAMMING */}
          <div style={{ marginBottom: '15px' }}>
            <button 
              onClick={() => setOpenSection(openSection === 'programming' ? '' : 'programming')}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: openSection === 'programming' ? '#e8f0fe' : 'transparent',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '14px',
                fontWeight: '500',
                color: '#202124',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>⚡ {t.programming}</span>
              <span>{openSection === 'programming' ? '▼' : '▶'}</span>
            </button>
            
            {openSection === 'programming' && (
              <div style={{ 
                paddingLeft: '20px', 
                marginTop: '8px',
                borderLeft: '2px solid #e8f0fe'
              }}>
                <div style={menuItemStyle}>React</div>
                <div style={menuItemStyle}>JavaScript</div>
                <div style={menuItemStyle}>Python</div>
              </div>
            )}
          </div>

          {/* PROJECTS */}
          <div style={{ marginBottom: '15px' }}>
            <button 
              onClick={() => setOpenSection(openSection === 'projects' ? '' : 'projects')}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: openSection === 'projects' ? '#e8f0fe' : 'transparent',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '14px',
                fontWeight: '500',
                color: '#202124',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>🏗️ {t.projects}</span>
              <span>{openSection === 'projects' ? '▼' : '▶'}</span>
            </button>
            
            {openSection === 'projects' && (
              <div style={{ 
                paddingLeft: '20px', 
                marginTop: '8px',
                borderLeft: '2px solid #e8f0fe'
              }}>
                <div style={menuItemStyle}>🇨🇿 Prague Hotel Design</div>
                <div style={menuItemStyle}>Elevators (150 floors)</div>
                <div style={menuItemStyle}>3D Modeling</div>
              </div>
            )}
          </div>

        </nav>

        <div style={{
          marginTop: '40px',
          paddingTop: '20px',
          borderTop: '1px solid #dadce0',
          fontSize: '12px',
          color: '#5f6368'
        }}>
          <div style={{ marginBottom: '8px' }}>
            <strong>USER:</strong> ADRIAN2E
          </div>
          <div style={{ marginBottom: '8px' }}>
            <strong>RANK:</strong> RAW TALENT
          </div>
          <div>
            Auckland, New Zealand
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main style={{
        marginLeft: '280px',
        padding: '40px',
        flex: 1,
        maxWidth: '1200px'
      }}>
        
        <header style={{ marginBottom: '40px' }}>
          
          {/* GOOGLE-STYLE SEARCH BAR */}
          <div style={{
            marginBottom: '30px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <input 
              type="text"
              placeholder={t.searchPlaceholder}
              style={{
                width: '100%',
                maxWidth: '600px',
                padding: '12px 20px',
                fontSize: '16px',
                border: '1px solid #dadce0',
                borderRadius: '24px',
                outline: 'none',
                boxShadow: '0 1px 6px rgba(32,33,36,.28)'
              }}
            />
          </div>

          <h1 style={{
            fontSize: '48px',
            fontWeight: '400',
            color: '#202124',
            marginBottom: '10px'
          }}>
            {t.heroTitle}
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: '#5f6368',
            lineHeight: '1.6',
            maxWidth: '800px'
          }}>
            {t.heroSubtitle}
          </p>

          {/* LANGUAGE SELECTOR - COM TURCO E TCHECO! */}
          <div style={{
            marginTop: '30px',
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}>
            {[
              {code: 'en', label: '🇬🇧 EN'}, 
              {code: 'pt', label: '🇧🇷 PT'},
              {code: 'tr', label: '🇹🇷 TR', tag: 'Família'},
              {code: 'cs', label: '🇨🇿 CS', tag: 'Identidade'},
              {code: 'vi', label: '🇻🇳 VI'},
              {code: 'de', label: '🇩🇪 DE'},
              {code: 'ru', label: '🇷🇺 RU'},
              {code: 'es', label: '🇪🇸 ES'}
            ].map(lang => (
              <div key={lang.code} style={{ position: 'relative' }}>
                <button
                  onClick={() => setSelectedLanguage(lang.code)}
                  style={{
                    padding: '8px 16px',
                    border: `2px solid ${selectedLanguage === lang.code ? '#1a73e8' : '#dadce0'}`,
                    backgroundColor: selectedLanguage === lang.code ? '#e8f0fe' : '#fff',
                    color: selectedLanguage === lang.code ? '#1a73e8' : '#5f6368',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  {lang.label}
                </button>
                {lang.tag && (
                  <span style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    backgroundColor: '#34a853',
                    color: '#fff',
                    fontSize: '10px',
                    padding: '2px 6px',
                    borderRadius: '8px',
                    fontWeight: 'bold'
                  }}>
                    {lang.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </header>

        {/* 2019 GENESIS */}
        <section style={{
          marginBottom: '40px',
          padding: '30px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #dadce0'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '500',
            color: '#202124',
            marginBottom: '15px'
          }}>
            {t.genesisTitle}
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#5f6368',
            lineHeight: '1.8'
          }}>
            {t.genesisText}
          </p>
        </section>

        {/* PRAGUE HOTEL PROJECT */}
        <section style={{
          marginBottom: '60px',
          padding: '30px',
          backgroundColor: '#e8f0fe',
          borderRadius: '8px',
          border: '2px solid #1a73e8'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '500',
            color: '#1a73e8',
            marginBottom: '15px'
          }}>
            🇨🇿 {t.pragueTitle}
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#202124',
            lineHeight: '1.8'
          }}>
            {t.pragueText}
          </p>
        </section>

        {/* ALPHABET GALLERIES */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '400',
            color: '#202124',
            marginBottom: '30px'
          }}>
            {t.alphabetDatabase}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            
            {/* RUSSIAN */}
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>🇷🇺 Russian (Cyrillic)</h3>
              <div style={alphabetBoxStyle}>
                Аа Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй<br/>
                Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф<br/>
                Хх Цц Чч Шш Щщ Ъъ Ыы Ьь Ээ Юю Яя
              </div>
              <button style={printButtonStyle}>
                {t.printButton}
              </button>
            </div>

            {/* TURKISH */}
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>🇹🇷 Turkish (Família Paterna)</h3>
              <div style={alphabetBoxStyle}>
                Aa Bb Cc Çç Dd Ee Ff Gg Ğğ Hh<br/>
                Iı İi Jj Kk Ll Mm Nn Oo Öö Pp<br/>
                Rr Ss Şş Tt Uu Üü Vv Yy Zz
              </div>
              <button style={printButtonStyle}>
                {t.printButton}
              </button>
            </div>

            {/* CZECH */}
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>🇨🇿 Czech (Identidade)</h3>
              <div style={alphabetBoxStyle}>
                Aa Áá Bb Cc Čč Dd Ďď Ee Éé Ěě<br/>
                Ff Gg Hh Ch Ii Íí Jj Kk Ll Mm Nn<br/>
                Ňň Oo Óó Pp Qq Rr Řř Ss Šš Tt Ťť<br/>
                Uu Úú Ůů Vv Ww Xx Yy Ýý Zz Žž
              </div>
              <button style={printButtonStyle}>
                {t.printButton}
              </button>
            </div>

            {/* GREEK */}
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>🇬🇷 Greek</h3>
              <div style={alphabetBoxStyle}>
                Αα Ββ Γγ Δδ Εε Ζζ Ηη Θθ Ιι Κκ Λλ Μμ<br/>
                Νν Ξξ Οο Ππ Ρρ Σσς Ττ Υυ Φφ Χχ Ψψ Ωω
              </div>
              <button style={printButtonStyle}>
                {t.printButton}
              </button>
            </div>

            {/* VIETNAMESE */}
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>🇻🇳 Vietnamese</h3>
              <div style={alphabetBoxStyle}>
                Aa Ăă Ââ Bb Cc Dd Đđ Ee Êê Gg Hh Ii<br/>
                Kk Ll Mm Nn Oo Ôô Ơơ Pp Qq Rr Ss Tt<br/>
                Uu Ưư Vv Xx Yy Zz
              </div>
              <button style={printButtonStyle}>
                {t.printButton}
              </button>
            </div>

            {/* JAPANESE */}
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>🇯🇵 Japanese (Hiragana)</h3>
              <div style={alphabetBoxStyle}>
                あ い う え お か き く け こ<br/>
                さ し す せ そ た ち つ て と<br/>
                な に ぬ ね の は ひ ふ へ ほ
              </div>
              <button style={printButtonStyle}>
                {t.printButton}
              </button>
            </div>

            {/* GERMAN */}
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>🇩🇪 German</h3>
              <div style={alphabetBoxStyle}>
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll<br/>
                Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx<br/>
                Yy Zz Ää Öö Üü ß
              </div>
              <button style={printButtonStyle}>
                {t.printButton}
              </button>
            </div>

            {/* SPANISH */}
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>🇪🇸 Spanish</h3>
              <div style={alphabetBoxStyle}>
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll<br/>
                Mm Nn Ññ Oo Pp Qq Rr Ss Tt Uu Vv Ww<br/>
                Xx Yy Zz
              </div>
              <button style={printButtonStyle}>
                {t.printButton}
              </button>
            </div>

          </div>
        </section>

        {/* DAILY LOGS */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '400',
            color: '#202124',
            marginBottom: '30px'
          }}>
            {t.dailyLogs}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            
            {/* PRAGUE HOTEL LOG */}
            <div style={logCardStyle}>
              <div style={{ fontSize: '12px', color: '#5f6368', marginBottom: '10px' }}>
                2024.XX.XX
              </div>
              <h4 style={{ fontSize: '18px', color: '#202124', marginBottom: '10px' }}>
                🇨🇿 Prague Hotel Design Project
              </h4>
              <p style={{ fontSize: '14px', color: '#5f6368', lineHeight: '1.6' }}>
                Complete hotel architectural design + luggage preparation for airport trip
              </p>
              <div style={{
                marginTop: '15px',
                padding: '6px 12px',
                backgroundColor: '#1a73e8',
                color: '#fff',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: '500',
                display: 'inline-block'
              }}>
                IDENTITY
              </div>
            </div>

            <div style={logCardStyle}>
              <div style={{ fontSize: '12px', color: '#5f6368', marginBottom: '10px' }}>
                2026.02.08
              </div>
              <h4 style={{ fontSize: '18px', color: '#202124', marginBottom: '10px' }}>
                🇯🇵 Japanese Study: Refrigerator Practice
              </h4>
              <p style={{ fontSize: '14px', color: '#5f6368', lineHeight: '1.6' }}>
                Mastering Hiragana, Katakana, and Kanji systems
              </p>
              <div style={{
                marginTop: '15px',
                padding: '6px 12px',
                backgroundColor: '#34a853',
                color: '#fff',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: '500',
                display: 'inline-block'
              }}>
                ACTIVE
              </div>
            </div>

            <div style={logCardStyle}>
              <div style={{ fontSize: '12px', color: '#5f6368', marginBottom: '10px' }}>
                2019.XX.XX
              </div>
              <h4 style={{ fontSize: '18px', color: '#202124', marginBottom: '10px' }}>
                The Whiteboard Incident
              </h4>
              <p style={{ fontSize: '14px', color: '#5f6368', lineHeight: '1.6' }}>
                Chinese caregiver documents Russian alphabet writing
              </p>
              <div style={{
                marginTop: '15px',
                padding: '6px 12px',
                backgroundColor: '#ea4335',
                color: '#fff',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: '500',
                display: 'inline-block'
              }}>
                HISTORICAL
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}

// STYLES
const menuItemStyle = {
  padding: '8px 12px',
  fontSize: '13px',
  color: '#5f6368',
  cursor: 'pointer',
  borderRadius: '4px',
  marginBottom: '4px'
};

const cardStyle = {
  backgroundColor: '#fff',
  border: '1px solid #dadce0',
  borderRadius: '8px',
  padding: '20px',
  boxShadow: '0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)'
};

const cardTitleStyle = {
  fontSize: '18px',
  fontWeight: '500',
  color: '#202124',
  marginBottom: '15px'
};

const alphabetBoxStyle = {
  backgroundColor: '#f8f9fa',
  padding: '15px',
  borderRadius: '4px',
  fontSize: '16px',
  lineHeight: '1.8',
  color: '#202124',
  fontFamily: 'Courier New, monospace',
  marginBottom: '15px'
};

const printButtonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#1a73e8',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '500'
};

const logCardStyle = {
  backgroundColor: '#fff',
  border: '1px solid #dadce0',
  borderRadius: '8px',
  padding: '20px',
  boxShadow: '0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)'
};
