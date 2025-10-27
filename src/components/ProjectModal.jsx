import { X, Github, ExternalLink, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import styles from './ProjectModal.module.css';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeLightbox();
  };

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
                    onClick={() => openLightbox(idx)}
                    style={{ cursor: 'pointer' }}
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
            {project.fullDescription && project.fullDescription.length > 0 ? (
              <div className={styles.modalDescription}>
                {project.fullDescription.map((paragraph, idx) => (
                  <p key={idx} style={{ marginBottom: '1rem' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <p className={styles.modalDescription}>{project.description}</p>
            )}
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

      {/* Lightbox */}
      {lightboxOpen && project.images && (
        <div 
          className={styles.lightboxOverlay} 
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button className={styles.lightboxClose} onClick={closeLightbox}>
            <X size={32} />
          </button>
          
          <button 
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`} 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft size={40} />
          </button>

          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - ${currentImageIndex + 1}`}
            className={styles.lightboxImage}
            onClick={(e) => e.stopPropagation()}
          />

          <button 
            className={`${styles.lightboxNav} ${styles.lightboxNext}`} 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight size={40} />
          </button>

          <div className={styles.lightboxCounter}>
            {currentImageIndex + 1} / {project.images.length}
          </div>
        </div>
      )}
    </div>
  );
}
