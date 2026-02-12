

import React from 'react';

function App() {
  const [activeSection, setActiveSection] = React.useState('home');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="App">
      <div style={{
        fontFamily: "'Inter', -apple-system, sans-serif",
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
        color: '#ffffff',
        minHeight: '100vh'
      }}>
        {/* Animated Background */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          overflow: 'hidden',
          pointerEvents: 'none'
        }}>
          <div style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, transparent 70%)',
            top: '-100px',
            right: '-100px',
            animation: 'float 20s ease-in-out infinite',
            borderRadius: '50%'
          }} />
          <div style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(112, 0, 255, 0.15) 0%, transparent 70%)',
            bottom: '-100px',
            left: '-100px',
            animation: 'float 15s ease-in-out infinite reverse',
            borderRadius: '50%'
          }} />
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(80px, -80px) rotate(120deg); }
            66% { transform: translate(-80px, 80px) rotate(240deg); }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .fade-in-up {
            animation: fadeInUp 0.8s ease forwards;
          }
        `}</style>

        {/* Content Container */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          
          {/* Navigation */}
          <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '30px 0',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}>
            <div style={{
              fontSize: '24px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #00d9ff 0%, #7000ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Amal Chedadi
            </div>
            <div style={{ display: 'flex', gap: '30px' }}>
              {[
                { id: 'home', label: 'Accueil' },
                { id: 'skills', label: 'Compétences' },
                { id: 'projects', label: 'Projets' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: activeSection === item.id ? '#00d9ff' : '#a8b2d1',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: 'color 0.3s ease',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#00d9ff'}
                  onMouseLeave={(e) => e.target.style.color = activeSection === item.id ? '#00d9ff' : '#a8b2d1'}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Hero Section */}
          <section id="home" style={{
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            padding: '60px 0'
          }}>
            <div className="fade-in-up">
              <div style={{
                color: '#00d9ff',
                fontSize: '14px',
                marginBottom: '20px',
                letterSpacing: '2px',
                fontWeight: '600'
              }}>
                Bonjour, je suis
              </div>
              <h1 style={{
                fontSize: '72px',
                fontWeight: 'bold',
                lineHeight: '1.2',
                marginBottom: '30px'
              }}>
                Amal Chedadi
                <br />Développeuse <span style={{
                  background: 'linear-gradient(135deg, #00d9ff 0%, #7000ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Full Stack</span>
              </h1>
              <p style={{
                fontSize: '20px',
                color: '#a8b2d1',
                maxWidth: '600px',
                marginBottom: '40px',
                lineHeight: '1.8'
              }}>
                Étudiante en 2ème année Développement Digital à l'OFPPT, passionnée par la création 
                d'applications web modernes. Compétences en React, PHP, MongoDB, MySQL et plus encore.
              </p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <button
                  onClick={() => scrollToSection('contact')}
                  style={{
                    padding: '15px 40px',
                    background: 'linear-gradient(135deg, #00d9ff 0%, #7000ff 100%)',
                    border: 'none',
                    borderRadius: '50px',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(0, 217, 255, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 15px 40px rgba(0, 217, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 10px 30px rgba(0, 217, 255, 0.3)';
                  }}
                >
                  Me contacter
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  style={{
                    padding: '15px 40px',
                    background: 'transparent',
                    border: '2px solid #00d9ff',
                    borderRadius: '50px',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#00d9ff';
                    e.target.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Voir mes projets
                </button>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" style={{ padding: '80px 0' }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              Compétences Techniques
            </h2>
            <p style={{
              textAlign: 'center',
              color: '#a8b2d1',
              fontSize: '18px',
              marginBottom: '60px',
              maxWidth: '600px',
              margin: '0 auto 60px'
            }}>
              Maîtrise des technologies web modernes acquise à l'OFPPT
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}>
              {[
                {
                  icon: '💻',
                  title: 'Développement Frontend',
                  skills: ['HTML5 / CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Responsive Design']
                },
                {
                  icon: '⚙️',
                  title: 'Développement Backend',
                  skills: ['PHP', 'Node.js', 'APIs RESTful', 'Sessions & Cookies']
                },
                {
                  icon: '🗄️',
                  title: 'Bases de Données',
                  skills: ['MySQL', 'MongoDB', 'PL/SQL', 'Pymongo', 'Conception BDD']
                },
                {
                  icon: '🛒',
                  title: 'E-Commerce',
                  skills: ['Paniers d\'achat', 'Gestion produits', 'Systèmes de commande', 'Authentification']
                },
                {
                  icon: '🔧',
                  title: 'Outils & Workflow',
                  skills: ['Git & GitHub', 'VS Code', 'XAMPP', 'Débogage']
                },
                {
                  icon: '📊',
                  title: 'Office & Data Entry',
                  skills: ['Word Expert', 'Excel Avancé', 'Typing rapide', 'Saisie de données', 'Traitement données']
                }
              ].map((skill, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(20, 24, 41, 0.8)',
                    padding: '35px',
                    borderRadius: '20px',
                    border: '1px solid rgba(0, 217, 255, 0.1)',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.borderColor = '#00d9ff';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 217, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ fontSize: '48px', marginBottom: '20px' }}>{skill.icon}</div>
                  <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '15px' }}>
                    {skill.title}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, color: '#a8b2d1' }}>
                    {skill.skills.map((item, i) => (
                      <li key={i} style={{ padding: '8px 0', paddingLeft: '20px', position: 'relative' }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: '#00d9ff',
                          fontWeight: 'bold'
                        }}>▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" style={{ padding: '80px 0' }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              Mes Projets
            </h2>
            <p style={{
              textAlign: 'center',
              color: '#a8b2d1',
              fontSize: '18px',
              marginBottom: '60px'
            }}>
              Projets réalisés durant ma formation à l'OFPPT
            </p>

            {/* Main Project */}
            <div style={{
              background: 'rgba(20, 24, 41, 0.8)',
              borderRadius: '30px',
              padding: '50px',
              border: '1px solid rgba(0, 217, 255, 0.1)',
              marginBottom: '40px'
            }}>
              <span style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #00d9ff 0%, #7000ff 100%)',
                color: 'white',
                padding: '8px 25px',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '25px'
              }}>
                🏆 Projet Principal
              </span>
              <h3 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>
                Boutique en ligne de Produits Cosmétiques
              </h3>
              <p style={{
                color: '#a8b2d1',
                fontSize: '18px',
                lineHeight: '1.8',
                marginBottom: '30px'
              }}>
                Plateforme e-commerce complète développée avec PHP et MySQL, spécialisée dans la vente 
                de produits cosmétiques. Interface moderne avec système de gestion complet pour les 
                produits, commandes et utilisateurs.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '30px' }}>
                {['PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'Bootstrap'].map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: 'rgba(0, 217, 255, 0.1)',
                      color: '#00d9ff',
                      padding: '8px 20px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      border: '1px solid rgba(0, 217, 255, 0.2)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h4 style={{ fontSize: '24px', marginBottom: '25px', marginTop: '30px' }}>
                ✨ Fonctionnalités Principales
              </h4>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px'
              }}>
                {[
                  { icon: '🔍', text: 'Système de recherche avec filtres par catégorie et prix' },
                  { icon: '🛒', text: 'Panier d\'achat dynamique avec gestion sessions' },
                  { icon: '💳', text: 'Processus de commande complet et sécurisé' },
                  { icon: '👤', text: 'Système d\'authentification (inscription/connexion)' },
                  { icon: '📱', text: 'Design responsive pour tous les appareils' },
                  { icon: '📊', text: 'Interface admin pour gérer produits et commandes' },
                  { icon: '🗄️', text: 'Base de données MySQL bien structurée' },
                  { icon: '🔐', text: 'Sécurité : validation données et protection SQL injection' }
                ].map((feature, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ fontSize: '24px' }}>{feature.icon}</div>
                    <div style={{ color: '#a8b2d1', flex: 1 }}>{feature.text}</div>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: '40px',
                padding: '30px',
                background: 'rgba(0, 217, 255, 0.05)',
                borderRadius: '15px',
                borderLeft: '4px solid #00d9ff'
              }}>
                <h4 style={{ fontSize: '20px', marginBottom: '15px', color: '#00d9ff' }}>
                  💡 Points Techniques
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, color: '#a8b2d1' }}>
                  <li style={{ padding: '8px 0', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#00d9ff' }}>✓</span>
                    Architecture MVC pour une meilleure organisation du code
                  </li>
                  <li style={{ padding: '8px 0', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#00d9ff' }}>✓</span>
                    Gestion de sessions PHP pour le panier et authentification
                  </li>
                  <li style={{ padding: '8px 0', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#00d9ff' }}>✓</span>
                    Requêtes SQL optimisées avec requêtes préparées
                  </li>
                  <li style={{ padding: '8px 0', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#00d9ff' }}>✓</span>
                    Interface responsive utilisant Bootstrap
                  </li>
                </ul>
              </div>
            </div>

            {/* Add More Projects Section */}
            <div style={{
              textAlign: 'center',
              padding: '50px',
              background: 'rgba(20, 24, 41, 0.5)',
              borderRadius: '20px',
              border: '2px dashed rgba(0, 217, 255, 0.3)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>🚀</div>
              <h3 style={{ fontSize: '28px', marginBottom: '15px' }}>
                D'autres projets en cours...
              </h3>
              <p style={{ color: '#a8b2d1', fontSize: '18px' }}>
                En tant qu'étudiante en développement digital, je travaille constamment 
                sur de nouveaux projets pour améliorer mes compétences !
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" style={{ padding: '80px 0' }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              Services Proposés
            </h2>
            <p style={{
              textAlign: 'center',
              color: '#a8b2d1',
              fontSize: '18px',
              marginBottom: '60px'
            }}>
              Ce que je peux faire pour vous
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px'
            }}>
              {[
                {
                  num: '01',
                  title: 'Développement Web',
                  desc: 'Création de sites web modernes et responsives avec HTML, CSS, JavaScript et PHP'
                },
                {
                  num: '02',
                  title: 'E-Commerce',
                  desc: 'Développement de boutiques en ligne avec gestion produits, paniers et commandes'
                },
                {
                  num: '03',
                  title: 'Bases de Données',
                  desc: 'Conception et gestion de bases de données MySQL pour vos applications'
                },
                {
                  num: '04',
                  title: 'Intégration Bootstrap',
                  desc: 'Création d\'interfaces responsives et modernes avec Bootstrap'
                },
                {
                  num: '05',
                  title: 'Saisie de Données',
                  desc: 'Saisie rapide et précise de données, traitement Excel et Word'
                },
                {
                  num: '06',
                  title: 'Support & Corrections',
                  desc: 'Aide au débogage, corrections de bugs et améliorations de code'
                }
              ].map((service, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(20, 24, 41, 0.8)',
                    padding: '40px',
                    borderRadius: '25px',
                    border: '1px solid rgba(0, 217, 255, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.borderColor = '#00d9ff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.1)';
                  }}
                >
                  <div style={{
                    fontSize: '72px',
                    fontWeight: '900',
                    background: 'linear-gradient(135deg, #00d9ff 0%, #7000ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    opacity: 0.2,
                    position: 'absolute',
                    top: '20px',
                    left: '30px'
                  }}>
                    {service.num}
                  </div>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    marginBottom: '15px',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    color: '#a8b2d1',
                    lineHeight: '1.8',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Me Section */}
          <section style={{ padding: '80px 0' }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              Pourquoi Me Choisir ?
            </h2>
            <p style={{
              textAlign: 'center',
              color: '#a8b2d1',
              fontSize: '18px',
              marginBottom: '60px'
            }}>
              Mes atouts
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px'
            }}>
              {[
                { icon: '🎓', title: 'Formation Solide', text: 'Étudiante en 2ème année à l\'OFPPT - Formation complète en développement digital' },
                { icon: '💪', title: 'Motivation & Passion', text: 'Passionnée par le développement web et toujours prête à apprendre' },
                { icon: '⚡', title: 'Rapidité d\'exécution', text: 'Travail efficace et livraison dans les délais' },
                { icon: '🎯', title: 'Code Propre', text: 'Code bien structuré, commenté et facile à maintenir' },
                { icon: '💬', title: 'Communication', text: 'Réponse rapide et écoute attentive de vos besoins' },
                { icon: '📚', title: 'Apprentissage Continu', text: 'Toujours en train d\'apprendre de nouvelles technologies' }
              ].map((item, idx) => (
                <div key={idx} style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ fontSize: '56px', marginBottom: '15px' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#a8b2d1', lineHeight: '1.6' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" style={{ padding: '80px 0 60px' }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              Contactez-moi
            </h2>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{
                fontSize: '24px',
                color: '#a8b2d1',
                marginBottom: '50px',
                lineHeight: '1.8'
              }}>
                Vous avez un projet ? Besoin d'aide pour développer un site web ?
                <br />
                <span style={{ color: '#00d9ff', fontWeight: '600' }}>N'hésitez pas à me contacter !</span>
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={() => window.location.href = 'mailto:amalchedadi123@gmail.com'}
                  style={{
                    padding: '15px 40px',
                    background: 'linear-gradient(135deg, #00d9ff 0%, #7000ff 100%)',
                    border: 'none',
                    borderRadius: '50px',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(0, 217, 255, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 15px 40px rgba(0, 217, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 10px 30px rgba(0, 217, 255, 0.3)';
                  }}
                >
                  📧 amalchedadi123@gmail.com
                </button>
              </div>
              
              <div style={{
                marginTop: '50px',
                padding: '30px',
                background: 'rgba(0, 217, 255, 0.05)',
                borderRadius: '15px'
              }}>
                <h3 style={{ fontSize: '22px', marginBottom: '15px', color: '#00d9ff' }}>
                  💼 Disponible pour
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '15px',
                  color: '#a8b2d1',
                  fontSize: '16px'
                }}>
                  <div>✓ Projets freelance</div>
                  <div>✓ Stages</div>
                  <div>✓ Collaborations</div>
                  <div>✓ Missions ponctuelles</div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer style={{
            textAlign: 'center',
            padding: '40px 0',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#a8b2d1'
          }}>
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>
              © 2026 Amal Chedadi - Étudiante en Développement Digital à l'OFPPT
            </p>
           
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
