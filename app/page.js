"use client";

import React, { useState } from 'react';
'use client';

import React, { useState } from 'react';

export default function Adrian2ePortal() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const translations = {
    en: {
      title: 'Keyboard Engineering',
      subtitle: 'Natural cognitive development documented',
      linguisticsDB: 'Linguistics Database',
      programming: 'Programming',
      projects: 'Projects'
    },
    pt: {
      title: 'Engenharia de Teclados',
      subtitle: 'Desenvolvimento cognitivo natural documentado',
      linguisticsDB: 'Base de Linguística',
      programming: 'Programação',
      projects: 'Projetos'
    }
  };

  const t = translations[selectedLanguage];

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      margin: 0,
      padding: 0
    }}>
      
      {/* ========== BANNER RAW TALENT ========== */}
      <div style={{
        width: '100%',
        backgroundColor: 'white'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          
          {/* IMAGEM DO ADRIAN */}
          <div style={{
            width: window.innerWidth <= 768 ? '100%' : '480px',
            minHeight: window.innerWidth <= 768 ? '300px' : '600px',
            backgroundColor: '#f5f5f5',
            overflow: 'hidden',
            flexShrink: 0
          }}>
            <img 
              src="https://cdn.sanity.io/images/ot2tkq29/production/dcbae6479811c83b5ce8afb80a2551c7fba7ec34-1200x1200.png" 
              alt="Adrian - Raw Talent"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </div>
          
          {/* CONTEÚDO DO BANNER */}
          <div style={{
            padding: window.innerWidth <= 768 ? '40px 20px' : '80px 60px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <div style={{
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#e53e3e',
              marginBottom: '20px'
            }}>
              Observational Documentation
            </div>
            
            <h1 style={{
              fontSize: window.innerWidth <= 768 ? '42px' : '72px',
              fontWeight: '700',
              letterSpacing: '-1px',
              lineHeight: '1',
              marginBottom: '24px',
              color: '#1a1a1a',
              margin: '0 0 24px 0'
            }}>
              RAW TALENT
            </h1>
            
            <p style={{
              fontSize: window.innerWidth <= 768 ? '20px' : '28px',
              fontWeight: '400',
              fontStyle: 'italic',
              color: '#4a4a4a',
              marginBottom: '30px',
              lineHeight: '1.4',
              margin: '0 0 30px 0'
            }}>
              The Journey of Adrian
            </p>
            
            <p style={{
              fontSize: window.innerWidth <= 768 ? '16px' : '17px',
              lineHeight: '1.8',
              color: '#2d2d2d',
              marginBottom: '30px',
              margin: '0 0 30px 0'
            }}>
              A longitudinal study documenting the natural emergence of structured 
              language, cognition, and engineering design in a neurodivergent child—without 
              training, pressure, or acceleration.
            </p>

            {/* META INFO */}
            <div style={{
              display: 'flex',
              flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
              gap: window.innerWidth <= 768 ? '16px' : '30px',
              paddingTop: '30px',
              borderTop: '2px solid #e5e5e5'
            }}>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: '#999',
                  marginBottom: '8px'
                }}>Profile</div>
                <div style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#1a1a1a'
                }}>2e (Twice Exceptional)</div>
              </div>
              
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: '#999',
                  marginBottom: '8px'
                }}>Status</div>
                <div style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#1a1a1a'
                }}>Untrained / Autodidact</div>
              </div>
              
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: '#999',
                  marginBottom: '8px'
                }}>Documentation</div>
                <div style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#1a1a1a'
                }}>2019 — Present</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== CONTEÚDO PRINCIPAL ========== */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: window.innerWidth <= 768 ? '30px 20px' : '60px 40px'
      }}>
        
        {/* LANGUAGE SELECTOR */}
        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '40px',
          flexWrap: 'wrap',
          justifyContent: window.innerWidth <= 768 ? 'center' : 'flex-start'
        }}>
          {[
            {code: 'en', label: '🇬🇧 EN'}, 
            {code: 'pt', label: '🇧🇷 PT'}
          ].map(lang => (
            <button
              key={lang.code}
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
          ))}
        </div>

        {/* TÍTULO DA SEÇÃO */}
        <h2 style={{
          fontSize: window.innerWidth <= 768 ? '24px' : '32px',
          fontWeight: '400',
          color: '#202124',
          marginBottom: '30px',
          margin: '0 0 30px 0'
        }}>
          {t.title}
        </h2>

        {/* CARD DE EXEMPLO */}
        <div style={{
          backgroundColor: '#fff',
          border: '1px solid #dadce0',
          borderRadius: '8px',
          padding: '30px',
          boxShadow: '0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)',
          marginBottom: '20px'
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '500',
            color: '#202124',
            marginBottom: '15px',
            margin: '0 0 15px 0'
          }}>
            ⌨️ Ossetian Keyboard Layout
          </h3>
          
          <p style={{
            fontSize: '16px',
            color: '#5f6368',
            lineHeight: '1.6',
            marginBottom: '20px',
            margin: '0 0 20px 0'
          }}>
            "At approximately 12 months old, Adrian displays advanced problem-solving 
            skills and intrinsic motivation. Without formal instruction, he navigates 
            physical obstacles to access technology."
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '20px'
          }}>
            {['Cirílico Estendido', 'Unicode Avançado', 'Multi-layer'].map((tag, idx) => (
              <span key={idx} style={{
                fontSize: '12px',
                backgroundColor: '#e8f0fe',
                color: '#1a73e8',
                padding: '6px 12px',
                borderRadius: '12px',
                fontWeight: '500'
              }}>
                {tag}
              </span>
            ))}
          </div>

          <div style={{
            fontSize: '13px',
            color: '#999',
            marginBottom: '20px'
          }}>
            Created: February 10, 2026
          </div>

          <button style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#1a73e8',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '15px',
            fontWeight: '500'
          }}>
            View Details
          </button>
        </div>

        {/* MENSAGEM DE INFO */}
        <div style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #dadce0',
          textAlign: 'center',
          color: '#5f6368',
          fontSize: '14px'
        }}>
          <p style={{ margin: 0 }}>
            {t.subtitle}
          </p>
        </div>

      </div>
    </div>
  );
}
