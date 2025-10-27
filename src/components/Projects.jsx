import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import styles from './Projects.module.css';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const projects = [
    {
      title: 'Tesla Fabrication Automation',
      company: 'Fabber',
      description:
        'Developed Revit-integrated tools for automating electrical fabrication documentation, including spools, sheets, views, and tracking systems.',
      technologies: ['C#', 'Revit API', 'WPF', 'BIM Automation'],
      category: 'BIM Automation',
      github: '#',
      demo: '#',
    },
    {
      title: 'Heritage Building Information Modelling',
      company: 'BIT World',
      description:
        'Created detailed HBIM for Court of Final Appeal, King\'s College & Old House at Hoi Pa Village, preserving historical accuracy with modern technology.',
      technologies: ['Revit', 'HBIM', 'Point Cloud', 'Heritage Preservation'],
      category: 'BIM Specialist',
    },
    {
      title: 'MTR Tung Chung East Station',
      company: 'BIT World',
      description:
        'BIM development for MTR Corporation Tung Chung East Station and track diversions, ensuring coordination across multiple disciplines.',
      technologies: ['Revit', 'Navisworks', 'Clash Detection', 'MEP Coordination'],
      category: 'BIM Specialist',
    },
    {
      title: 'Revit-Tekla Data Connector',
      company: 'ITI Graduation Project',
      description:
        'Software integrating Revit and Tekla via IFC to convert Tekla elements to native Revit elements using C# and Revit API.',
      technologies: ['C#', 'Revit API', 'Tekla API', 'IFC', 'XBIM'],
      category: 'Computational Engineering',
      github: '#',
    },
    {
      title: '2D to 3D AutoCAD Plugin',
      company: 'ITI Project',
      description:
        'Plugin that converts 2D drawings to 3D elements and automatically assigns dimensions in AutoCAD.',
      technologies: ['C#', 'AutoCAD API', '.NET'],
      category: 'BIM Automation',
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Product Review Generator',
      company: 'DEPI Generative AI Track',
      description:
        'Created realistic product reviews using generative AI, exploring NLP and prompt engineering techniques.',
      technologies: ['Python', 'TensorFlow', 'NLP', 'Hugging Face'],
      category: 'AI & Machine Learning',
      github: '#',
      demo: '#',
    },
    {
      title: 'Text-to-Image Generation',
      company: 'DEPI Generative AI Track',
      description:
        'Developed photorealistic image generation system using advanced generative AI models and prompt engineering.',
      technologies: ['Python', 'Keras', 'MLflow', 'Generative AI'],
      category: 'AI & Machine Learning',
      github: '#',
      demo: '#',
    },
    {
      title: 'School Management System',
      company: 'ITI WPF Project',
      description:
        'Desktop application for school management using Windows Presentation Foundation with MVVM architecture.',
      technologies: ['C#', 'WPF', 'MVVM', '.NET'],
      category: 'Full-Stack Development',
      github: '#',
      demo: '#',
    },
    {
      title: 'Examination System',
      company: 'ITI Full Stack Track',
      description:
        'Full-stack examination system with PostgreSQL database, RESTful APIs, and modern frontend.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'JavaScript', 'React'],
      category: 'Full-Stack Development',
      github: '#',
      demo: '#',
    },
    {
      title: 'Furniture E-Commerce Website',
      company: 'ITI Full Stack Track',
      description:
        'Responsive e-commerce platform for furniture sales with cart functionality and modern UI.',
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'UI/UX'],
      category: 'Full-Stack Development',
      github: '#',
      demo: '#',
    },
    {
      title: 'Government Properties BIM',
      company: 'BIT World - ASD Region 2',
      description:
        'BIM modeling for Government Properties managed by Architectural Services Department.',
      technologies: ['Revit', 'BIM Standards', 'Government Compliance'],
      category: 'BIM Specialist',
    },
    {
      title: 'AI to Fabrication Bench',
      company: 'Galala University Workshop',
      description:
        'Symbolic bench for Egyptian Museum inspired by Maat\'s values using AI and 3D printing.',
      technologies: ['AI Design', 'Grasshopper', 'Rhino', '3D Printing'],
      category: 'Computational Engineering',
    },
  ];

  const categories = [
    'All Projects',
    'BIM Automation',
    'BIM Specialist',
    'Full-Stack Development',
    'AI & Machine Learning',
    'Computational Engineering',
  ];

  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    activeCategory === 'All Projects'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.filterContainer}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`${styles.filterButton} ${
                activeCategory === category ? styles.filterButtonActive : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.projectGrid}>
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className={styles.projectCard}
              onClick={() => openModal(project)}
            >
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <span className={styles.categoryBadge}>{project.category}</span>
                  <div className={styles.projectLinks}>
                    {project.github && (
                      <a 
                        href={project.github} 
                        className={styles.githubLink}
                        onClick={(e) => e.stopPropagation()}
                        title="View on GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        className={styles.demoLink}
                        onClick={(e) => e.stopPropagation()}
                        title="View Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectCompany}>{project.company}</p>
                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.techTags}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
}
