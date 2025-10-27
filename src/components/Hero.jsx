import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const roles = [
    'AEC Software Engineer',
    'Full Stack Developer',
    'BIM Developer',
    'BIM Specialist',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background}>
        <div className={`${styles.geometricShape} ${styles.shape1}`}></div>
        <div className={`${styles.geometricShape} ${styles.shape2}`}></div>
        <div className={`${styles.geometricShape} ${styles.shape3}`}></div>
        <div className={`${styles.geometricShape} ${styles.shape4}`}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Ibtihal Mohamed Raafat</h1>
          <div className={styles.divider}></div>

          <div className={styles.roleContainer}>
            <p className={styles.roleText}>
              <span className={styles.roleWord} key={currentRoleIndex}>
                {roles[currentRoleIndex]}
              </span>
            </p>
          </div>

          <p className={styles.subtitle}>AEC Software Engineer</p>
          <p className={styles.description}>
            Specialized in creating innovative software solutions for the Architecture, Engineering, and Construction industry. Expert in full-stack development, BIM automation, and building collaborative tools that bridge design with cutting-edge technology.
          </p>

          <div className={styles.socialLinks}>
            <a href="mailto:ebtehal.mohamed.raafat.abdelfatah@gmail.com" className={styles.socialLink}>
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ibtihal-raafat-1a6628135/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/ebtehalraafat98"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Github size={20} />
            </a>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={styles.ctaButton}
          >
            Get In Touch
          </a>
        </div>
      </div>

      <button onClick={scrollToNext} className={styles.scrollButton}>
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
