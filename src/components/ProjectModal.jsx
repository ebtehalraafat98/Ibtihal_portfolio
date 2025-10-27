import { X, Github, ExternalLink, Play } from 'lucide-react';
import styles from './ProjectModal.module.css';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>

        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{project.title}</h2>
          <p className={styles.modalCompany}>{project.company}</p>
          <span className={styles.modalCategory}>{project.category}</span>
        </div>

        <div className={styles.modalBody}>
          {/* Project Images */}
          {project.images && project.images.length > 0 && (
            <div className={styles.mediaSection}>
              <h3 className={styles.sectionTitle}>Project Gallery</h3>
              <div className={styles.imageGrid}>
                {project.images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`${project.title} - ${idx + 1}`}
                    className={styles.projectImage}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Project Videos */}
          {project.videos && project.videos.length > 0 && (
            <div className={styles.mediaSection}>
              <h3 className={styles.sectionTitle}>Demo Videos</h3>
              <div className={styles.videoGrid}>
                {project.videos.map((video, idx) => (
                  <div key={idx} className={styles.videoWrapper}>
                    <video controls className={styles.projectVideo}>
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Description */}
          <div className={styles.descriptionSection}>
            <h3 className={styles.sectionTitle}>About This Project</h3>
            <p className={styles.modalDescription}>{project.description}</p>
          </div>

          {/* Technologies */}
          <div className={styles.techSection}>
            <h3 className={styles.sectionTitle}>Technologies Used</h3>
            <div className={styles.techTags}>
              {project.technologies.map((tech, idx) => (
                <span key={idx} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className={styles.linksSection}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                <Github size={20} />
                View on GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkButton} ${styles.demoButton}`}
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            )}
            {project.video && (
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                <Play size={20} />
                Watch Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
