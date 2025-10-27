import { Briefcase, Code, Award } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  const stats = [
    {
      icon: Briefcase,
      value: '4+',
      label: 'Years of BIM\nExperience',
    },
    {
      icon: Code,
      value: '50+',
      label: 'Projects\nCompleted',
    },
    {
      icon: Award,
      value: '15+',
      label: 'Certifications &\nPrograms',
    },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h2 className={styles.title}>About Me</h2>
            <h3 className={styles.subtitle}>AEC Software Engineer & BIM Specialist </h3>
            <div className={styles.divider}></div>
            
            <p className={styles.description}>
              I am Ibtihal Mohamed Raafat, a passionate BIM Specialist and Developer
              with over 4 years of experience in the Architecture, Engineering, and
              Construction (AEC) industry. My expertise lies in bridging the gap
              between design and technology through innovative software solutions.
            </p>
            
            <p className={styles.description}>
              With a strong foundation in both software development and BIM
              methodologies, I specialize in creating automated workflows, custom
              plugins, and collaborative tools that enhance productivity and streamline
              complex construction processes.
            </p>
            
            <p className={styles.description}>
              My technical proficiency spans across Revit API, Python, C#, React.js, and
              various BIM platforms. I'm also deeply interested in applying AI and
              Machine Learning to solve real-world challenges in the AEC sector.
            </p>
          </div>

          <div className={styles.statsSection}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className={styles.statCard}>
                  <div className={styles.statIcon}>
                    <Icon size={32} />
                  </div>
                  <h3 className={styles.statValue}>{stat.value}</h3>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
