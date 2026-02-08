// app/page.js - Portal adrian2e.org - VERSÃO VIETNAMITA 🇻🇳
'use client';

import React, { useState, useEffect } from 'react';

export default function Adrian2ePortal() {
  const [language, setLanguage] = useState('en'); // 🌍 Idioma padrão: INGLÊS (profissional)
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [expandedFolder, setExpandedFolder] = useState('linguistics');
  const [searchQuery, setSearchQuery] = useState('');
  const [globalSearch, setGlobalSearch] = useState('');
  const [filterType, setFilterType] = useState('all');

  // === SISTEMA DE TRADUÇÕES (6 IDIOMAS!) ===
  const translations = {
    vi: {
      heroTitle: 'NGÔN_NGỮ_BẨM_SINH: MÃ_HÓA_THẾ_GIỚI',
      heroSubtitle: 'Đối với Adrian, viết không phải là kỹ năng học qua lặp lại; đó là bản năng bẩm sinh. Bảng chữ cái phức tạp và ngôn ngữ lập trình chỉ đơn giản là các giao diện khác nhau cho cùng một hệ thống tinh thần.',
      statusBadge: 'TRẠNG_THÁI: SẴN_SÀNG_NÂNG_CẤP_HỆ_THỐNG',
      searchPlaceholder: 'TÌM_KIẾM_TOÀN_CẦU: Nhập để tìm kiếm...',
      sidebarSearch: 'TÌM_KIẾM_HỆ_THỐNG...',
      dailyTitle: 'TÀI_NĂNG_THÔ_HÀNG_NGÀY',
      dailySubtitle: 'Nhật_Ký_Mã Đang_Hoạt_Động',
      hideButton: 'ẨN',
      showButton: 'HIỆN',
      printButton: 'IN_CHO_TRƯỜNG',
      viewImage: 'XEM_BẰNG_CHỨNG',
      userLabel: 'NGƯỜI_DÙNG',
      rankLabel: 'TÀI_NĂNG_THIÊN_BẨM',
      systemOnline: 'Hệ Thống Trực Tuyến: 24/7',
      location: 'Vị Trí: Auckland, NZ',
      genesisTitle: 'NGUỒN_GỐC_2019',
      genesisSubtitle: 'Bằng Chứng Khởi Động Hệ Thống',
      genesisDescription: 'Ở tuổi 3, trong khi đang được phân tích lâm sàng về sự đa dạng thần kinh, Adrian đã hoạt động ở chế độ đa ngôn ngữ: viết trong 5 hệ thống chữ cái (Tiếng Anh, Tiếng Nga, Tiếng Hy Lạp, Tiếng Thổ Nhĩ Kỳ, Tiếng Tây Ban Nha) mà không cần tham chiếu trực quan.',
      whiteboard: 'CHỮ_VIẾT_VÔ_HÌNH',
      whiteboardText: 'Năm 2019, tại một trường mẫu giáo thông thường, tiếng ồn và sự hỗn loạn của những đứa trẻ khác trở thành im lặng đối với Adrian. Trước một bảng trắng, không có mẫu hoặc hướng dẫn, cậu bắt đầu chiếu các hệ thống. Một người chăm sóc người Trung Quốc, bối rối, đã chụp lại những gì có vẻ như là mã không xác định. Đó không phải là mã — đó là bảng chữ cái tiếng Nga, được viết với độ chính xác của một người sinh ra đã tích hợp ngữ pháp thế giới vào hệ thống.',
      germanLogic: 'TÍCH_HỢP_LOGIC_ĐỨC',
      germanLogicText: 'Thông qua âm nhạc và xử lý ngữ âm, Adrian giải mã cấu trúc ngữ pháp tiếng Đức. Hát trở thành một công cụ tính toán—mỗi bài hát là một phiên huấn luyện cú pháp, nơi giai điệu củng cố các mẫu ngôn ngữ.',
      filterAll: 'TẤT_CẢ',
      filterLinguistics: 'NGÔN_NGỮ_HỌC',
      filterCode: 'MÃ',
      filterVisual: 'HÌNH_ẢNH',
      filterAudio: 'ÂM_THANH',
      noResults: 'KHÔNG_TÌM_THẤY_NHẬT_KÝ_PHÙ_HỢP',
      linguistics: 'CƠ_SỞ_DỮ_LIỆU_NGÔN_NGỮ',
      programming: 'MÃ_NGUỒN',
      design: 'TRUNG_THỰC_HÌNH_ẢNH',
      cyrillicGroup: 'Nhóm_Cyrillic',
      latinVariations: 'Biến_Thể_La_Tinh',
      specialAlphabets: 'Bảng_Chữ_Cái_Đặc_Biệt',
      frontend: 'Giao_Diện_Người_Dùng',
      logicSystems: 'Hệ_Thống_Logic',
      modeling3d: 'Mô_Hình_3D',
      typography: 'Kiểu_Chữ'
    },
    en: {
      heroTitle: 'INNATE_LANGUAGE: CODING_THE_WORLD',
      heroSubtitle: 'For Adrian, writing is not a learned skill through repetition; it is an innate instinct. Complex alphabets and programming languages are merely different interfaces for the same mental system.',
      statusBadge: 'STATUS: READY_FOR_SYSTEM_UPGRADE',
      searchPlaceholder: 'GLOBAL_SEARCH: Type to find anything...',
      sidebarSearch: 'SEARCH_SYSTEM...',
      dailyTitle: 'THE_DAILY_RAW_TALENT',
      dailySubtitle: 'Code_Log Active',
      hideButton: 'HIDE',
      showButton: 'SHOW',
      printButton: 'PRINT_FOR_SCHOOL',
      viewImage: 'VIEW_EVIDENCE',
      userLabel: 'USER',
      rankLabel: 'RAW_TALENT',
      systemOnline: 'System Online: 24/7',
      location: 'Location: Auckland, NZ',
      genesisTitle: 'THE_2019_GENESIS',
      genesisSubtitle: 'System Initialization Evidence',
      genesisDescription: 'At age 3, while under clinical neurodiversity analysis, Adrian was already operating in multi-language mode: writing in 5 alphabetic systems (English, Russian, Greek, Turkish, Spanish) without visual reference.',
      whiteboard: 'THE_UNSEEN_SCRIPT',
      whiteboardText: 'In 2019, at a common kindergarten, the noise and chaos of other children became silence for Adrian. Before a whiteboard, with no models or guides, he began projecting systems. A native Chinese caregiver, perplexed, photographed what seemed to be unknown code. It wasn\'t code — it was the Russian alphabet, written with the precision of someone born with the world\'s grammar integrated into the system.',
      germanLogic: 'GERMAN_LOGIC_INTEGRATION',
      germanLogicText: 'Through music and phonetic processing, Adrian decodes German grammar structures. Singing becomes a computational tool—each song is a syntax training session, where melody reinforces linguistic patterns.',
      filterAll: 'ALL',
      filterLinguistics: 'LINGUISTICS',
      filterCode: 'CODE',
      filterVisual: 'VISUAL',
      filterAudio: 'AUDIO',
      noResults: 'NO_MATCHING_LOGS_FOUND',
      linguistics: 'LINGUISTICS_DB',
      programming: 'SOURCE_CODE',
      design: 'VISUAL_FIDELITY',
      cyrillicGroup: 'Cyrillic_Group',
      latinVariations: 'Latin_Variations',
      specialAlphabets: 'Special_Alphabets',
      frontend: 'Frontend',
      logicSystems: 'Logic_Systems',
      modeling3d: '3D_Modeling',
      typography: 'Typography'
    },
    pt: {
      heroTitle: 'LINGUAGEM_INATA: CODIFICANDO_O_MUNDO',
      heroSubtitle: 'Para Adrian, a escrita não é uma habilidade aprendida por repetição; é um instinto nato. Alfabetos complexos e linguagens de programação são apenas diferentes interfaces para o mesmo sistema mental.',
      statusBadge: 'STATUS: PRONTO_PARA_UPGRADE_DE_SISTEMA',
      searchPlaceholder: 'BUSCA_GLOBAL: Digite para encontrar...',
      sidebarSearch: 'BUSCAR_SISTEMA...',
      dailyTitle: 'O_TALENTO_DIÁRIO_BRUTO',
      dailySubtitle: 'Registro_Código Ativo',
      hideButton: 'OCULTAR',
      showButton: 'MOSTRAR',
      printButton: 'IMPRIMIR_PARA_ESCOLA',
      viewImage: 'VER_EVIDÊNCIA',
      userLabel: 'USUÁRIO',
      rankLabel: 'TALENTO_BRUTO',
      systemOnline: 'Sistema Online: 24/7',
      location: 'Localização: Auckland, NZ',
      genesisTitle: 'A_GÊNESE_2019',
      genesisSubtitle: 'Evidência de Inicialização do Sistema',
      genesisDescription: 'Aos 3 anos, enquanto sob análise clínica de neurodiversidade, Adrian já operava em modo multi-linguagem: escrevendo em 5 sistemas alfabéticos (Inglês, Russo, Grego, Turco, Espanhol) sem referência visual.',
      whiteboard: 'O_ESCRITO_NÃO_VISTO',
      whiteboardText: 'Em 2019, em um jardim de infância comum, o barulho e o caos das outras crianças tornavam-se silêncio para Adrian. Diante de um quadro branco, sem modelos ou guias, ele começou a projetar sistemas. Uma cuidadora nativa da China, perplexa, fotografou o que parecia ser um código desconhecido. Não era código — era o alfabeto Russo, escrito com a precisão de quem já nasceu com a gramática do mundo integrada ao sistema.',
      germanLogic: 'INTEGRAÇÃO_LÓGICA_ALEMÃ',
      germanLogicText: 'Através da música e processamento fonético, Adrian decodifica estruturas gramaticais alemãs. Cantar torna-se uma ferramenta computacional—cada canção é uma sessão de treinamento de sintaxe, onde a melodia reforça padrões linguísticos.',
      filterAll: 'TODOS',
      filterLinguistics: 'LINGUÍSTICA',
      filterCode: 'CÓDIGO',
      filterVisual: 'VISUAL',
      filterAudio: 'ÁUDIO',
      noResults: 'NENHUM_LOG_ENCONTRADO',
      linguistics: 'BASE_DE_LINGUÍSTICA',
      programming: 'CÓDIGO_FONTE',
      design: 'FIDELIDADE_VISUAL',
      cyrillicGroup: 'Grupo_Cirílico',
      latinVariations: 'Variações_Latinas',
      specialAlphabets: 'Alfabetos_Especiais',
      frontend: 'Frontend',
      logicSystems: 'Sistemas_Lógicos',
      modeling3d: 'Modelagem_3D',
      typography: 'Tipografia'
    },
    de: {
      heroTitle: 'ANGEBORENE_SPRACHE: DIE_WELT_KODIEREN',
      heroSubtitle: 'Für Adrian ist Schreiben keine durch Wiederholung erlernte Fähigkeit; es ist ein angeborener Instinkt. Komplexe Alphabete und Programmiersprachen sind lediglich unterschiedliche Schnittstellen für dasselbe mentale System.',
      statusBadge: 'STATUS: BEREIT_FÜR_SYSTEM_UPGRADE',
      searchPlaceholder: 'GLOBALE_SUCHE: Tippen Sie zum Suchen...',
      sidebarSearch: 'SYSTEM_SUCHEN...',
      dailyTitle: 'DAS_TÄGLICHE_RAW_TALENT',
      dailySubtitle: 'Code_Protokoll Aktiv',
      hideButton: 'VERBERGEN',
      showButton: 'ZEIGEN',
      printButton: 'FÜR_SCHULE_DRUCKEN',
      viewImage: 'BEWEIS_ANSEHEN',
      userLabel: 'BENUTZER',
      rankLabel: 'ROH_TALENT',
      systemOnline: 'System Online: 24/7',
      location: 'Standort: Auckland, NZ',
      genesisTitle: 'DIE_2019_GENESIS',
      genesisSubtitle: 'Systeminitialisierungsnachweis',
      genesisDescription: 'Im Alter von 3 Jahren, während klinischer Neurodiversitätsanalyse, operierte Adrian bereits im Mehrsprachenmodus: Schreiben in 5 alphabetischen Systemen (Englisch, Russisch, Griechisch, Türkisch, Spanisch) ohne visuelle Referenz.',
      whiteboard: 'DIE_UNSICHTBARE_SCHRIFT',
      whiteboardText: 'Im Jahr 2019, in einem gewöhnlichen Kindergarten, wurde der Lärm und das Chaos anderer Kinder für Adrian zu Stille. Vor einem Whiteboard, ohne Vorlagen oder Anleitungen, begann er, Systeme zu projizieren. Eine chinesische Betreuerin, verwirrt, fotografierte, was wie unbekannter Code aussah. Es war kein Code — es war das russische Alphabet, geschrieben mit der Präzision von jemandem, der mit der Grammatik der Welt im System geboren wurde.',
      germanLogic: 'DEUTSCHE_LOGIK_INTEGRATION',
      germanLogicText: 'Durch Musik und phonetische Verarbeitung dekodiert Adrian deutsche Grammatikstrukturen. Singen wird zu einem Berechnungswerkzeug—jedes Lied ist eine Syntax-Trainingssitzung, bei der Melodie linguistische Muster verstärkt.',
      filterAll: 'ALLE',
      filterLinguistics: 'LINGUISTIK',
      filterCode: 'CODE',
      filterVisual: 'VISUELL',
      filterAudio: 'AUDIO',
      noResults: 'KEINE_ÜBEREINSTIMMENDEN_LOGS_GEFUNDEN',
      linguistics: 'LINGUISTIK_DB',
      programming: 'QUELLCODE',
      design: 'VISUELLE_TREUE',
      cyrillicGroup: 'Kyrillische_Gruppe',
      latinVariations: 'Lateinische_Variationen',
      specialAlphabets: 'Spezielle_Alphabete',
      frontend: 'Frontend',
      logicSystems: 'Logik_Systeme',
      modeling3d: '3D_Modellierung',
      typography: 'Typografie'
    },
    ru: {
      heroTitle: 'ВРОЖДЁННЫЙ_ЯЗЫК: КОДИРОВАНИЕ_МИРА',
      heroSubtitle: 'Для Адриана письмо — это не навык, приобретенный через повторение; это врожденный инстинкт. Сложные алфавиты и языки программирования — это просто разные интерфейсы для одной и той же ментальной системы.',
      statusBadge: 'СТАТУС: ГОТОВ_К_ОБНОВЛЕНИЮ_СИСТЕМЫ',
      searchPlaceholder: 'ГЛОБАЛЬНЫЙ_ПОИСК: Введите для поиска...',
      sidebarSearch: 'ПОИСК_СИСТЕМЫ...',
      dailyTitle: 'ЕЖЕДНЕВНЫЙ_ПРИРОДНЫЙ_ТАЛАНТ',
      dailySubtitle: 'Журнал_Кода Активен',
      hideButton: 'СКРЫТЬ',
      showButton: 'ПОКАЗАТЬ',
      printButton: 'ПЕЧАТЬ_ДЛЯ_ШКОЛЫ',
      viewImage: 'ПРОСМОТР_ДОКАЗАТЕЛЬСТВА',
      userLabel: 'ПОЛЬЗОВАТЕЛЬ',
      rankLabel: 'ПРИРОДНЫЙ_ТАЛАНТ',
      systemOnline: 'Система Онлайн: 24/7',
      location: 'Местоположение: Окленд, НЗ',
      genesisTitle: 'ГЕНЕЗИС_2019',
      genesisSubtitle: 'Доказательство Инициализации Системы',
      genesisDescription: 'В возрасте 3 лет, находясь под клиническим анализом нейроразнообразия, Адриан уже работал в многоязычном режиме: писал на 5 алфавитных системах (английский, русский, греческий, турецкий, испанский) без визуальной ссылки.',
      whiteboard: 'НЕВИДИМЫЙ_СКРИПТ',
      whiteboardText: 'В 2019 году, в обычном детском саду, шум и хаос других детей становились тишиной для Адриана. Перед белой доской, без моделей или руководств, он начал проецировать системы. Китайская воспитательница, озадаченная, сфотографировала то, что казалось неизвестным кодом. Это был не код — это был русский алфавит, написанный с точностью человека, рожденного с грамматикой мира, интегрированной в систему.',
      germanLogic: 'ИНТЕГРАЦИЯ_НЕМЕЦКОЙ_ЛОГИКИ',
      germanLogicText: 'Через музыку и фонетическую обработку Адриан декодирует структуры немецкой грамматики. Пение становится вычислительным инструментом—каждая песня является сессией обучения синтаксису, где мелодия усиливает лингвистические паттерны.',
      filterAll: 'ВСЕ',
      filterLinguistics: 'ЛИНГВИСТИКА',
      filterCode: 'КОД',
      filterVisual: 'ВИЗУАЛЬНОЕ',
      filterAudio: 'АУДИО',
      noResults: 'СОВПАДАЮЩИХ_ЛОГОВ_НЕ_НАЙДЕНО',
      linguistics: 'ЛИНГВИСТИЧЕСКАЯ_БД',
      programming: 'ИСХОДНЫЙ_КОД',
      design: 'ВИЗУАЛЬНАЯ_ТОЧНОСТЬ',
      cyrillicGroup: 'Кириллическая_Группа',
      latinVariations: 'Латинские_Вариации',
      specialAlphabets: 'Специальные_Алфавиты',
      frontend: 'Фронтенд',
      logicSystems: 'Логические_Системы',
      modeling3d: '3D_Моделирование',
      typography: 'Типография'
    },
    es: {
      heroTitle: 'LENGUAJE_INNATO: CODIFICANDO_EL_MUNDO',
      heroSubtitle: 'Para Adrian, escribir no es una habilidad aprendida por repetición; es un instinto innato. Alfabetos complejos y lenguajes de programación son simplemente diferentes interfaces para el mismo sistema mental.',
      statusBadge: 'ESTADO: LISTO_PARA_ACTUALIZACIÓN_DE_SISTEMA',
      searchPlaceholder: 'BÚSQUEDA_GLOBAL: Escribe para encontrar...',
      sidebarSearch: 'BUSCAR_SISTEMA...',
      dailyTitle: 'EL_TALENTO_DIARIO_CRUDO',
      dailySubtitle: 'Registro_Código Activo',
      hideButton: 'OCULTAR',
      showButton: 'MOSTRAR',
      printButton: 'IMPRIMIR_PARA_ESCUELA',
      viewImage: 'VER_EVIDENCIA',
      userLabel: 'USUARIO',
      rankLabel: 'TALENTO_CRUDO',
      systemOnline: 'Sistema En Línea: 24/7',
      location: 'Ubicación: Auckland, NZ',
      genesisTitle: 'EL_GÉNESIS_2019',
      genesisSubtitle: 'Evidencia de Inicialización del Sistema',
      genesisDescription: 'A los 3 años, mientras estaba bajo análisis clínico de neurodiversidad, Adrian ya operaba en modo multilingüe: escribiendo en 5 sistemas alfabéticos (Inglés, Ruso, Griego, Turco, Español) sin referencia visual.',
      whiteboard: 'EL_ESCRITO_INVISIBLE',
      whiteboardText: 'En 2019, en un jardín de infancia común, el ruido y el caos de otros niños se convertían en silencio para Adrian. Frente a una pizarra blanca, sin modelos ni guías, comenzó a proyectar sistemas. Una cuidadora china, perpleja, fotografió lo que parecía ser código desconocido. No era código — era el alfabeto ruso, escrito con la precisión de alguien nacido con la gramática del mundo integrada en el sistema.',
      germanLogic: 'INTEGRACIÓN_LÓGICA_ALEMANA',
      germanLogicText: 'A través de la música y el procesamiento fonético, Adrian decodifica estructuras gramaticales alemanas. Cantar se convierte en una herramienta computacional—cada canción es una sesión de entrenamiento de sintaxis, donde la melodía refuerza patrones lingüísticos.',
      filterAll: 'TODOS',
      filterLinguistics: 'LINGÜÍSTICA',
      filterCode: 'CÓDIGO',
      filterVisual: 'VISUAL',
      filterAudio: 'AUDIO',
      noResults: 'NO_SE_ENCONTRARON_LOGS_COINCIDENTES',
      linguistics: 'BASE_DE_LINGÜÍSTICA',
      programming: 'CÓDIGO_FUENTE',
      design: 'FIDELIDAD_VISUAL',
      cyrillicGroup: 'Grupo_Cirílico',
      latinVariations: 'Variaciones_Latinas',
      specialAlphabets: 'Alfabetos_Especiales',
      frontend: 'Frontend',
      logicSystems: 'Sistemas_Lógicos',
      modeling3d: 'Modelado_3D',
      typography: 'Tipografía'
    }
  };

  const t = translations[language];
  const fullText = t.heroTitle;

  // Typing animation
  useEffect(() => {
    setDisplayText('');
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);
    return () => clearInterval(typingInterval);
  }, [language, fullText]);

  // Cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Adrian's interests structure
  const adrianInterests = {
    linguistics: {
      title: t.linguistics,
      icon: "📚",
      subcategories: [
        { 
          name: t.cyrillicGroup,
          items: ["Russian", "Ukrainian", "Bulgarian", "Serbian", "Macedonian", "Belarusian"]
        },
        { 
          name: t.latinVariations,
          items: ["Germanic", "Romance", "Slavic_Latin", "Sorbian"]
        },
        { 
          name: t.specialAlphabets,
          items: ["Greek", "Maori", "Vietnamese", "Uralic", "Turkic"]
        }
      ]
    },
    programming: {
      title: t.programming,
      icon: "⚡",
      subcategories: [
        { name: t.frontend, items: ["React", "Next.js", "CSS_Glitch_Effects"] },
        { name: t.logicSystems, items: ["JavaScript", "Python", "Algorithms"] }
      ]
    },
    design: {
      title: t.design,
      icon: "🎨",
      subcategories: [
        { name: t.modeling3d, items: ["Blender_Projects", "Digital_Sculpture"] },
        { name: t.typography, items: ["Font_Studies", "Symbol_Systems"] }
      ]
    }
  };

  // Daily logs com suporte para imagens
  const dailyLogs = [
    { 
      date: '2026.02.06', 
      type: 'Linguistics', 
      title: 'Cyrillic Mastery - Russian Alphabet',
      status: 'VERIFIED',
      description: 'Printed for school presentation',
      image: null,
      keywords: 'russian cyrillic alphabet writing'
    },
    { 
      date: '2026.02.06', 
      type: 'Audio', 
      title: 'German Logic Integration',
      status: 'ACTIVE',
      description: 'Phonetic processing through music',
      image: null,
      keywords: 'german music phonetics singing logic'
    },
    { 
      date: '2026.02.05', 
      type: 'Code', 
      title: 'React Component Build',
      status: 'ACTIVE',
      description: 'Terminal interface prototype',
      image: null,
      keywords: 'react javascript code programming'
    },
    { 
      date: '2026.02.04', 
      type: 'Visual', 
      title: 'Organic Symbol Systems',
      status: 'CAPTURED',
      description: 'Food-based writing experiments',
      image: null,
      keywords: 'writing food symbols visual art'
    },
    { 
      date: '2026.02.03', 
      type: 'Linguistics', 
      title: 'Greek Alphabet Study',
      status: 'VERIFIED',
      description: 'Complete character mapping',
      image: null,
      keywords: 'greek alphabet linguistics writing'
    },
    { 
      date: '2019.XX.XX', 
      type: 'Linguistics', 
      title: 'The Whiteboard Incident',
      status: 'HISTORICAL',
      description: 'Chinese caregiver documents Russian alphabet writing',
      image: null,
      keywords: 'russian whiteboard kindergarten historical 2019'
    }
  ];

  // Filtrar logs baseado na busca global e tipo
  const filteredLogs = dailyLogs.filter(log => {
    const matchesSearch = globalSearch === '' || 
      log.title.toLowerCase().includes(globalSearch.toLowerCase()) ||
      log.description.toLowerCase().includes(globalSearch.toLowerCase()) ||
      log.keywords.toLowerCase().includes(globalSearch.toLowerCase());
    
    const matchesFilter = filterType === 'all' || 
      log.type.toLowerCase() === filterType.toLowerCase();
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="portal-container">
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .portal-container {
          background-color: #000000;
          min-height: 100vh;
          color: #00FF41;
          font-family: 'Courier New', Courier, monospace;
          display: flex;
          position: relative;
          overflow-x: hidden;
        }

        /* Scanline Effect */
        .portal-container::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            transparent 50%,
            rgba(0, 255, 65, 0.02) 50%
          );
          background-size: 100% 4px;
          pointer-events: none;
          animation: scanlines 8s linear infinite;
          z-index: 1;
        }

        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }

        /* === LANGUAGE SELECTOR === */
        .language-selector {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          display: flex;
          gap: 8px;
          background: rgba(0, 0, 0, 0.9);
          padding: 10px;
          border: 1px solid #00FF41;
          flex-wrap: wrap;
        }

        .lang-button {
          background: transparent;
          border: 1px solid #00FF41;
          padding: 8px 12px;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.75rem;
          font-weight: bold;
          transition: all 0.3s ease;
          color: #00FF41;
        }

        .lang-button:hover, .lang-button.active {
          background: #00FF41;
          color: #000;
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.5);
        }

        .sidebar {
          width: ${sidebarOpen ? '300px' : '60px'};
          height: 100vh;
          background: #0a0a0a;
          border-right: 2px solid #00FF41;
          position: fixed;
          left: 0;
          top: 0;
          transition: width 0.3s ease;
          display: flex;
          flex-direction: column;
          padding: 20px;
          z-index: 100;
          overflow-y: auto;
          overflow-x: hidden;
        }

        .sidebar::-webkit-scrollbar {
          width: 6px;
        }

        .sidebar::-webkit-scrollbar-track {
          background: #000;
        }

        .sidebar::-webkit-scrollbar-thumb {
          background: #00FF41;
          border-radius: 3px;
        }

        .sidebar-toggle {
          background: none;
          border: 1px solid #00FF41;
          color: #00FF41;
          padding: 8px 12px;
          cursor: pointer;
          margin-bottom: 20px;
          font-family: inherit;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .sidebar-toggle:hover {
          background: rgba(0, 255, 65, 0.1);
          box-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
        }

        .search-box {
          background: #000;
          border: 1px solid #333;
          color: #00FF41;
          padding: 10px;
          margin-bottom: 25px;
          font-size: 0.85rem;
          outline: none;
          width: 100%;
          font-family: inherit;
          display: ${sidebarOpen ? 'block' : 'none'};
        }

        .search-box:focus {
          border-color: #00FF41;
          box-shadow: 0 0 8px rgba(0, 255, 65, 0.3);
        }

        .folder {
          margin-bottom: 20px;
          opacity: ${sidebarOpen ? '1' : '0'};
          transition: opacity 0.3s ease;
        }

        .folder-title {
          cursor: pointer;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 5px;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          border-left: 2px solid transparent;
        }

        .folder-title:hover {
          background: rgba(0, 255, 65, 0.1);
          border-left-color: #00FF41;
          padding-left: 10px;
        }

        .folder-icon {
          font-size: 1.2rem;
        }

        .sub-menu {
          margin-left: 25px;
          border-left: 1px dashed #1a4d1a;
          padding-left: 15px;
          margin-top: 10px;
        }

        .category-name {
          font-size: 0.8rem;
          color: #888;
          margin-top: 12px;
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .item {
          font-size: 0.85rem;
          padding: 5px 0;
          cursor: pointer;
          transition: all 0.2s;
          color: #00FF41;
        }

        .item:hover {
          color: #fff;
          padding-left: 8px;
          text-shadow: 0 0 5px #00FF41;
        }

        .sidebar-footer {
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid #1a1a1a;
          font-size: 0.7rem;
          color: #444;
          line-height: 1.6;
          opacity: ${sidebarOpen ? '1' : '0'};
        }

        .rank-badge {
          background: #00FF41;
          color: #000;
          padding: 3px 8px;
          font-weight: bold;
          display: inline-block;
          margin-top: 5px;
        }

        /* === MAIN CONTENT === */
        .main-content {
          margin-left: ${sidebarOpen ? '300px' : '60px'};
          flex: 1;
          padding: 40px;
          transition: margin-left 0.3s ease;
          position: relative;
          z-index: 2;
        }

        /* === HERO SECTION === */
        .hero-section {
          text-align: center;
          padding: 60px 20px;
          margin-bottom: 60px;
        }

        .mega-search {
          max-width: 700px;
          margin: 0 auto 40px;
          position: relative;
        }

        .mega-search input {
          width: 100%;
          background: rgba(0, 0, 0, 0.8);
          border: 2px solid #00FF41;
          padding: 15px 20px;
          font-size: 1.1rem;
          color: #00FF41;
          font-family: inherit;
          outline: none;
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.2);
        }

        .mega-search input:focus {
          box-shadow: 0 0 30px rgba(0, 255, 65, 0.4);
        }

        .main-title {
          font-size: clamp(1.5rem, 4vw, 3rem);
          letter-spacing: 0.2rem;
          font-weight: 700;
          text-shadow: 0 0 10px #00FF41, 0 0 20px #00FF41;
          margin: 30px 0 20px;
          line-height: 1.4;
          word-break: break-word;
        }

        .cursor {
          display: inline-block;
          width: 3px;
          height: 1em;
          background-color: #00FF41;
          margin-left: 5px;
          vertical-align: text-bottom;
          opacity: ${showCursor ? 1 : 0};
        }

        .status-badge {
          display: inline-block;
          color: #888;
          font-size: clamp(0.8rem, 2vw, 1rem);
          margin-top: 15px;
          padding: 10px 20px;
          border: 1px solid #333;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        .subtitle {
          color: #888;
          font-size: clamp(0.85rem, 1.8vw, 1rem);
          margin-top: 20px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
          padding: 0 15px;
        }

        /* === FILTER BUTTONS === */
        .filter-section {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin: 40px 0;
          flex-wrap: wrap;
        }

        .filter-button {
          background: transparent;
          border: 1px solid #333;
          color: #00FF41;
          padding: 8px 16px;
          font-family: inherit;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-button:hover, .filter-button.active {
          border-color: #00FF41;
          background: rgba(0, 255, 65, 0.1);
          box-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
        }

        /* === GENESIS SECTION === */
        .genesis-section {
          max-width: 1000px;
          margin: 60px auto;
          padding: 30px;
          border: 2px solid #00FF41;
          background: rgba(0, 255, 65, 0.02);
          position: relative;
        }

        .genesis-header {
          font-size: clamp(1.3rem, 3vw, 2rem);
          margin-bottom: 10px;
          letter-spacing: 0.2rem;
        }

        .genesis-subtitle {
          font-size: 0.8rem;
          color: #888;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .genesis-content {
          font-size: clamp(0.85rem, 1.5vw, 0.95rem);
          line-height: 1.8;
          color: #00FF41;
        }

        .whiteboard-story, .german-logic-story {
          margin-top: 30px;
          padding: 25px;
          background: rgba(0, 0, 0, 0.5);
          border-left: 3px solid #00FF41;
        }

        .story-title {
          font-size: 1.1rem;
          margin-bottom: 15px;
          color: #00FF41;
        }

        .story-text {
          font-size: 0.9rem;
          line-height: 1.7;
          color: #aaa;
        }

        /* === DAILY RAW TALENT SECTION === */
        .daily-section {
          margin-top: 80px;
        }

        .section-header {
          border-bottom: 2px solid #00FF41;
          padding-bottom: 15px;
          margin-bottom: 40px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 15px;
        }

        .section-title {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          margin: 0;
          letter-spacing: 0.2rem;
        }

        .uptime-tag {
          font-size: 0.7rem;
          padding: 5px 12px;
          border: 1px solid #00FF41;
          text-transform: uppercase;
          background: rgba(0, 255, 65, 0.1);
        }

        .logs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 25px;
        }

        .log-card {
          border: 1px solid #1a1a1a;
          padding: 20px;
          background: rgba(0, 255, 65, 0.02);
          transition: all 0.3s ease;
          position: relative;
          cursor: pointer;
          overflow: hidden;
        }

        .log-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 255, 65, 0.1),
            transparent
          );
          transition: left 0.6s ease;
        }

        .log-card:hover::before {
          left: 100%;
        }

        .log-card:hover {
          border-color: #00FF41;
          background: rgba(0, 255, 65, 0.05);
          box-shadow: 0 0 25px rgba(0, 255, 65, 0.3);
          transform: translateY(-5px);
        }

        .log-card:active {
          animation: glitch 0.3s ease;
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        .log-image-placeholder {
          width: 100%;
          height: 150px;
          background: rgba(0, 255, 65, 0.05);
          border: 1px dashed #333;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
          font-size: 0.8rem;
          color: #444;
        }

        .log-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
          margin-bottom: 15px;
          border: 1px solid #00FF41;
        }

        .date-stamp {
          font-size: 0.75rem;
          color: #666;
          margin-bottom: 10px;
        }

        .log-title {
          font-size: 1.2rem;
          margin: 10px 0;
          font-weight: bold;
          color: #00FF41;
        }

        .log-description {
          font-size: 0.85rem;
          color: #888;
          margin: 10px 0;
          line-height: 1.4;
        }

        .log-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 15px;
          padding-top: 15px;
          border-top: 1px solid #1a1a1a;
        }

        .log-type {
          font-size: 0.8rem;
          color: #888;
        }

        .status-tag {
          font-size: 0.7rem;
          padding: 4px 10px;
          border: 1px solid #00FF41;
          background: #00FF41;
          color: #000;
          font-weight: bold;
          text-transform: uppercase;
        }

        .log-actions {
          display: flex;
          gap: 10px;
          margin-top: 15px;
        }

        .action-button {
          background: none;
          border: 1px solid #00FF41;
          color: #00FF41;
          padding: 6px 12px;
          font-size: 0.75rem;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.3s ease;
          flex: 1;
        }

        .action-button:hover {
          background: #00FF41;
          color: #000;
          box-shadow: 0 0 15px rgba(0, 255, 65, 0.5);
        }

        .no-results {
          text-align: center;
          padding: 60px 20px;
          color: #888;
          font-size: 1.2rem;
        }

        /* === RESPONSIVE === */
        @media (max-width: 968px) {
          .sidebar {
            width: ${sidebarOpen ? '250px' : '0'};
            border-right: ${sidebarOpen ? '2px solid #00FF41' : 'none'};
          }

          .main-content {
            margin-left: 0;
            padding: 20px;
          }

          .main-title {
            letter-spacing: 0.15rem;
          }

          .logs-grid {
            grid-template-columns: 1fr;
          }

          .language-selector {
            top: 10px;
            right: 10px;
            padding: 8px;
            max-width: 90%;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 40px 15px;
          }

          .section-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .genesis-section {
            padding: 20px;
          }

          .filter-section {
            gap: 8px;
          }

          .filter-button {
            padding: 6px 12px;
            font-size: 0.7rem;
          }
        }
      `}</style>

      {/* LANGUAGE SELECTOR - INGLÊS EM PRIMEIRO! */}
      <div className="language-selector">
        {['en', 'pt', 'vi', 'de', 'ru', 'es'].map(lang => (
          <button 
            key={lang}
            className={`lang-button ${language === lang ? 'active' : ''}`}
            onClick={() => setLanguage(lang)}
          >
            {lang === 'en' && '🇬🇧 EN'}
            {lang === 'pt' && '🇧🇷 PT'}
            {lang === 'vi' && '🇻🇳 VI'}
            {lang === 'de' && '🇩🇪 DE'}
            {lang === 'ru' && '🇷🇺 RU'}
            {lang === 'es' && '🇪🇸 ES'}
          </button>
        ))}
      </div>
      </div>

           <aside className="sidebar">
        <button 
          className="sidebar-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? `◄ ${t.hideButton}` : '►'}
        </button>

        <input 
          type="text" 
          className="search-box" 
          placeholder={t.sidebarSearch}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {Object.keys(adrianInterests).map((key) => (
          <div key={key} className="folder">
            <div 
              className="folder-title" 
              onClick={() => setExpandedFolder(expandedFolder === key ? null : key)}
            >
              <span className="folder-icon">{adrianInterests[key].icon}</span>
              {expandedFolder === key ? '[-] ' : '[+] '} 
              {adrianInterests[key].title}
            </div>
            
            {expandedFolder === key && (
              <div className="sub-menu">
                {adrianInterests[key].subcategories.map((sub) => (
                  <div key={sub.name}>
                    <div className="category-name">{sub.name}</div>
                    {sub.items.map(item => (
                      <div key={item} className="item">
                        {'>'} {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="sidebar-footer">
          {t.userLabel}: ADRIAN2E <br />
          <span className="rank-badge">{t.rankLabel}</span>
          <div style={{ marginTop: '10px', fontSize: '0.65rem' }}>
            {t.systemOnline}<br />
            {t.location}
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="mega-search">
            <input 
              type="text" 
              placeholder={t.searchPlaceholder} 
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
            />
          </div>

          <h1 className="main-title">
            {displayText}
            <span className="cursor"></span>
          </h1>

          <div className="status-badge">
            [ {t.statusBadge} ]
          </div>

          <p className="subtitle">
            {t.heroSubtitle}
          </p>
        </section>

        {/* THE 2019 GENESIS */}
        <section className="genesis-section">
          <h2 className="genesis-header">{t.genesisTitle}</h2>
          <p className="genesis-subtitle">{t.genesisSubtitle}</p>
          <p className="genesis-content">{t.genesisDescription}</p>

          <div className="whiteboard-story">
            <h3 className="story-title">[ {t.whiteboard} ]</h3>
            <p className="story-text">{t.whiteboardText}</p>
          </div>

          <div className="german-logic-story">
            <h3 className="story-title">[ {t.germanLogic} ]</h3>
            <p className="story-text">{t.germanLogicText}</p>
          </div>
        </section>

        {/* FILTER BUTTONS */}
        <div className="filter-section">
          <button 
            className={`filter-button ${filterType === 'all' ? 'active' : ''}`}
            onClick={() => setFilterType('all')}
          >
            {t.filterAll}
          </button>
          <button 
            className={`filter-button ${filterType === 'linguistics' ? 'active' : ''}`}
            onClick={() => setFilterType('linguistics')}
          >
            {t.filterLinguistics}
          </button>
          <button 
            className={`filter-button ${filterType === 'code' ? 'active' : ''}`}
            onClick={() => setFilterType('code')}
          >
            {t.filterCode}
          </button>
          <button 
            className={`filter-button ${filterType === 'visual' ? 'active' : ''}`}
            onClick={() => setFilterType('visual')}
          >
            {t.filterVisual}
          </button>
          <button 
            className={`filter-button ${filterType === 'audio' ? 'active' : ''}`}
            onClick={() => setFilterType('audio')}
          >
            {t.filterAudio}
          </button>
        </div>

        {/* THE DAILY RAW TALENT */}
        <section className="daily-section">
          <div className="section-header">
            <h2 className="section-title">{t.dailyTitle}</h2>
            <div className="uptime-tag">{t.dailySubtitle}</div>
          </div>

          {filteredLogs.length === 0 ? (
            <div className="no-results">
              [ {t.noResults} ]
            </div>
          ) : (
            <div className="logs-grid">
              {filteredLogs.map((log, index) => (
                <div key={`${log.date}-${index}`} className="log-card">
                  {log.image ? (
                    <img src={log.image} alt={log.title} className="log-image" />
                  ) : (
                    <div className="log-image-placeholder">
                      [IMAGE_SLOT]
                    </div>
                  )}
                  <div className="date-stamp">[{log.date}]</div>
                  <div className="log-title">{log.title}</div>
                  <div className="log-description">{log.description}</div>
                  <div className="log-footer">
                    <span className="log-type">Type: {log.type}</span>
                    <span className="status-tag">{log.status}</span>
                  </div>
                  <div className="log-actions">
                    <button className="action-button">
                      {t.printButton}
                    </button>
                    {log.image && (
                      <button className="action-button">
                        {t.viewImage}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
