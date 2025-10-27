import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import styles from './Projects.module.css';
import ProjectModal from './ProjectModal';

// PSB Params imports
import psbImg1 from '../assets/projects/BIM Automation/PSB_Params/1.png';
import psbImg2 from '../assets/projects/BIM Automation/PSB_Params/2.png';
import psbImg3 from '../assets/projects/BIM Automation/PSB_Params/3.png';
import psbImg4 from '../assets/projects/BIM Automation/PSB_Params/4.png';

// Data Connector imports
import dataConnectorImg1 from '../assets/projects/BIM Automation/Data_Connector/1.jpg';
import dataConnectorImg2 from '../assets/projects/BIM Automation/Data_Connector/2.png';
import dataConnectorImg3 from '../assets/projects/BIM Automation/Data_Connector/3.png';
import dataConnectorImg4 from '../assets/projects/BIM Automation/Data_Connector/4.png';
import dataConnectorImg5 from '../assets/projects/BIM Automation/Data_Connector/5.png';
import dataConnectorImg6 from '../assets/projects/BIM Automation/Data_Connector/6.png';
import dataConnectorImg7 from '../assets/projects/BIM Automation/Data_Connector/7.png';
import dataConnectorImg8 from '../assets/projects/BIM Automation/Data_Connector/8.png';
import dataConnectorImg9 from '../assets/projects/BIM Automation/Data_Connector/9.png';
import dataConnectorVideo from '../assets/projects/BIM Automation/Data_Connector/data connector comp.mp4';

// School System imports
import schoolImg1 from '../assets/projects/BIM Automation/school Sysytem/1.png';
import schoolImg2 from '../assets/projects/BIM Automation/school Sysytem/2.png';
import schoolImg3 from '../assets/projects/BIM Automation/school Sysytem/3.png';
import schoolImg4 from '../assets/projects/BIM Automation/school Sysytem/4.png';
import schoolImg5 from '../assets/projects/BIM Automation/school Sysytem/5.png';
import schoolVideo from '../assets/projects/BIM Automation/school Sysytem/school System com.mp4';

// Furniture Website imports
import furnitureVideo from '../assets/projects/Full stack/Furniture Website/Demo.mp4';

// Bash Project imports
import bashVideo from '../assets/projects/Full stack/Data Base Bash Project/Bash Project Tutorial.webm';

// Maat imports
import maatImg1 from '../assets/projects/Fabrication/Maat/1.jpg';
import maatImg2 from '../assets/projects/Fabrication/Maat/2.png';
import maatImg3 from '../assets/projects/Fabrication/Maat/3.jpg';
import maatImg4 from '../assets/projects/Fabrication/Maat/4.jpg';
import maatImg5 from '../assets/projects/Fabrication/Maat/5.jpg';
import maatImg6 from '../assets/projects/Fabrication/Maat/5.png';
import maatImg7 from '../assets/projects/Fabrication/Maat/6.jpg';

// CNC Panel imports
import cncImg1 from '../assets/projects/Fabrication/CNC panel/1.gif';
import cncImg2 from '../assets/projects/Fabrication/CNC panel/2.jpg';
import cncImg3 from '../assets/projects/Fabrication/CNC panel/3.jpg';
import cncImg4 from '../assets/projects/Fabrication/CNC panel/4.png';
import cncImg5 from '../assets/projects/Fabrication/CNC panel/5.jpg';
import cncImg6 from '../assets/projects/Fabrication/CNC panel/6.gif';
import cncImg7 from '../assets/projects/Fabrication/CNC panel/8.jpg';
import cncImg8 from '../assets/projects/Fabrication/CNC panel/9.jpg';
import cncImg9 from '../assets/projects/Fabrication/CNC panel/10.jpg';

// Dynamo imports
import dynamoImg1 from '../assets/projects/BIM Specialist/Dynamo/1.png';
import dynamoImg2 from '../assets/projects/BIM Specialist/Dynamo/2.png';
import dynamoImg3 from '../assets/projects/BIM Specialist/Dynamo/3.png';
import dynamoImg4 from '../assets/projects/BIM Specialist/Dynamo/4.png';
import dynamoImg5 from '../assets/projects/BIM Specialist/Dynamo/5.png';
import dynamoImg6 from '../assets/projects/BIM Specialist/Dynamo/6.png';
import dynamoImg7 from '../assets/projects/BIM Specialist/Dynamo/7.png';
import dynamoImg8 from '../assets/projects/BIM Specialist/Dynamo/8.png';

// Parametric Geometry imports
import parametricImg1 from '../assets/projects/BIM Specialist/Parametric Geometry Generation with Dynamo/1.png';
import parametricImg2 from '../assets/projects/BIM Specialist/Parametric Geometry Generation with Dynamo/2.png';
import parametricImg3 from '../assets/projects/BIM Specialist/Parametric Geometry Generation with Dynamo/3.png';
import parametricImg4 from '../assets/projects/BIM Specialist/Parametric Geometry Generation with Dynamo/4.png';
import parametricImg5 from '../assets/projects/BIM Specialist/Parametric Geometry Generation with Dynamo/5.png';
import parametricImg6 from '../assets/projects/BIM Specialist/Parametric Geometry Generation with Dynamo/6.png';

// Villa Cladding imports
import villaCladdingImg1 from '../assets/projects/BIM Specialist/Villa Cladding Design & Quantity Estimation – KSA Project/1.png';
import villaCladdingImg2 from '../assets/projects/BIM Specialist/Villa Cladding Design & Quantity Estimation – KSA Project/2.png';
import villaCladdingImg3 from '../assets/projects/BIM Specialist/Villa Cladding Design & Quantity Estimation – KSA Project/3.png';
import villaCladdingImg4 from '../assets/projects/BIM Specialist/Villa Cladding Design & Quantity Estimation – KSA Project/4.png';

// Modern Residential imports
import modernResidentialImg1 from '../assets/projects/BIM Specialist/Modern Residential Building Design for E3mar/1.png';
import modernResidentialImg2 from '../assets/projects/BIM Specialist/Modern Residential Building Design for E3mar/2.png';
import modernResidentialImg3 from '../assets/projects/BIM Specialist/Modern Residential Building Design for E3mar/3.png';

export default function Projects() {
  const projects = [
    {
      title: 'Fabber Assign Spool Module',
      company: 'Fabber',
      description:
        'Allows users to select a coordinated section of the design and turn it into a fabrication module (spool).',
      fullDescription: [
        'Developed core spool automation features within Revit include assign, modify, and reset functionalities.',
        'Enabled dynamic scheduling, and documentation generation for spools workflows.',
        'Collaborated with cross-functional teams to align tooling with construction standards and project timelines.',
        'Contributed to parameter structuring and view generation logic to support modular fabrication.'
      ],
      technologies: ['Revit API', 'C#', 'Figma Design', 'WPF', 'MVVM'],
      category: 'BIM Automation',
    },
    {
      title: 'PSB Params Plugin',
      company: 'Personal Project',
      description:
        'A unified interface designed to automate and streamline parameter editing in Revit models.',
      fullDescription: [
        'PSB Params Plugin is a unified interface designed to automate and streamline parameter editing in Revit models.',
        'It offers specialized tools for managing parameters, family data, and model views—reducing manual work and improving consistency across architectural projects.'
      ],
      technologies: ['Revit API', 'C#', 'WPF'],
      category: 'BIM Automation',
      images: [psbImg1, psbImg2, psbImg3, psbImg4],
    },
    {
      title: 'DATA CONNECTOR Plugin',
      company: 'ITI Graduation Project',
      description:
        'Robust solution that converts IFC data from various software platforms into native Revit elements.',
      fullDescription: [
        'The DATA CONNECTOR plugin aims to address these interoperability issues by providing a robust solution that converts IFC data from various software platforms into native Revit elements. This will enable seamless integration of models from different disciplines, ensuring data integrity and facilitating efficient collaboration.',
        '1. Exporting the IFC from Tekla after drawing your model',
        '2. Open a Revit file and go to the DATA CONNECTOR Ribbon tab',
        '3. Click on the From Tekla icon',
        '4. Click on Browse and select the IFC file you want to convert from Tekla',
        '5. Review your model in the 3D viewer',
        '6. Check the boxes next to the elements you want to import from the model to Revit elements',
        '7. Click on Run Model to complete the conversion process',
        '8. Review your model in Revit and adjust it as needed',
        '9. If you are done and satisfied with the results click on Cancel to close the plug-in window'
      ],
      technologies: ['Revit API', 'C#', 'WPF', 'MVVM', 'XBIM', 'IFC'],
      category: 'BIM Automation',
      images: [dataConnectorImg1, dataConnectorImg2, dataConnectorImg3, dataConnectorImg4, dataConnectorImg5, dataConnectorImg6, dataConnectorImg7, dataConnectorImg8, dataConnectorImg9],
      videos: [dataConnectorVideo],
      github: 'https://github.com/ebtehalraafat98/Data-Connector-.git',
      demo: 'https://engzuedu-my.sharepoint.com/:v:/g/personal/emrafat_eng_zu_edu_eg/EWRU-079gCtMkpKwOfMuJIABpJhLuVvLyc7--Is14Q53xQ?e=TR2kd7',
    },
    {
      title: 'School System Management',
      company: 'ITI WPF Project',
      description:
        'Desktop application for primary school management system with XAML and C# using MVVM architecture.',
      fullDescription: [
        'New desktop application for primary school management system. This innovative software is designed with XAML and C# using the best practices of MVVM architecture.',
        'It offers a user-friendly interface, a secure database, and a variety of features to enhance the learning experience.'
      ],
      technologies: ['C#', 'WPF', 'MVVM'],
      category: 'BIM Automation',
      images: [schoolImg1, schoolImg2, schoolImg3, schoolImg4, schoolImg5],
      videos: [schoolVideo],
      github: 'https://github.com/ebtehalraafat98/School-System-.git',
      demo: 'https://engzuedu-my.sharepoint.com/:v:/g/personal/emrafat_eng_zu_edu_eg/EdjavozXordCrYGHWKK0NGsB3cIlRXMmhtywXBsPKAf_sg?e=Vw0dDW',
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
      title: 'Government Properties BIM',
      company: 'BIT World - ASD Region 2',
      description:
        'BIM modeling for Government Properties managed by Architectural Services Department.',
      technologies: ['Revit', 'BIM Standards', 'Government Compliance'],
      category: 'BIM Specialist',
    },
    {
      title: 'Dynamo Automation: Clash Detection & Visual Programming',
      company: 'BIT World',
      description:
        'Automated clash detection, visual overrides, and sheet/level generation using Dynamo visual programming in Revit.',
      fullDescription: [
        'Clash Detection & Visual Overrides in Revit via Dynamo:',
        '• Used Dynamo to extract and compare geometry across linked models',
        '• Applied conditional logic to detect clashes based on proximity and category',
        '• Automated visual overrides (e.g., color filters) to flag conflicting elements',
        '• Enabled real-time clash visualization in plans, sections, and 3D views',
        '• Improved coordination efficiency and reduced manual QA time for BIM teams',
        'Naming Sheets & Creating Levels/Grids by Dynamo:',
        '• Created parametric grids using coordinate-based logic and vector inputs',
        '• Automated level creation at specified elevations using list manipulation and sliders',
        '• Generated and named sheets dynamically using title block types and string inputs',
        '• Ensured consistency across views and documentation by embedding naming conventions',
        '• Reduced manual setup time and improved accuracy for architectural and engineering teams',
        'This solution enhances model clarity, supports early conflict resolution, and streamlines interdisciplinary collaboration.'
      ],
      technologies: ['Dynamo', 'Revit API', 'Visual Programming', 'Clash Detection', 'BIM Automation', 'Computational Design'],
      category: 'BIM Specialist',
      images: [dynamoImg1, dynamoImg2, dynamoImg3, dynamoImg4, dynamoImg5, dynamoImg6, dynamoImg7, dynamoImg8],
    },
    {
      title: 'Parametric Geometry Generation with Dynamo',
      company: 'Personal Project',
      description:
        'Complex architectural geometries using Dynamo visual programming for curtain walls, surface grids, and arched canopies.',
      fullDescription: [
        'Created complex architectural and structural geometries using Dynamo visual programming.',
        'Key Features:',
        '• Developed node-based scripts to generate curtain walls, surface grids, and arched canopies',
        '• Automated geometry creation based on parameters like points, surfaces, and element selection',
        '• Applied computational design techniques for responsive, scalable architectural forms',
        '• Enhanced design flexibility and precision in Revit through custom parametric workflows',
        'This project demonstrates the power of algorithmic design to create complex, adaptable architectural solutions that respond to design parameters and constraints.'
      ],
      technologies: ['Dynamo', 'Revit', 'Visual Programming', 'Parametric Design', 'Computational Geometry', 'Generative Design'],
      category: 'BIM Specialist',
      images: [parametricImg1, parametricImg2, parametricImg3, parametricImg4, parametricImg5, parametricImg6],
    },
    {
      title: 'Villa Cladding Design & Quantity Estimation – KSA Project',
      company: 'Freelance',
      description:
        'Detailed cladding design for a villa in KSA with 3D renderings, material specifications, and quantity estimation.',
      fullDescription: [
        'Detailed cladding design for a villa in KSA, including 3D renderings, material specifications, and quantity estimation.',
        'Project Deliverables:',
        '• Color-coded visuals for material differentiation',
        '• Architectural drawings with precise measurements',
        '• Comprehensive tables outlining cladding types and measurements',
        '• High-quality 3D renderings for client presentation',
        '• Material takeoff for construction cost estimation',
        'Ideal for clients seeking precise exterior design documentation and material takeoff for residential projects.'
      ],
      technologies: ['Revit', '3D Rendering', 'Material Estimation', 'Quantity Takeoff', 'Architectural Design'],
      category: 'BIM Specialist',
      images: [villaCladdingImg1, villaCladdingImg2, villaCladdingImg3, villaCladdingImg4],
    },
    {
      title: 'Modern Residential Building Design for E3mar',
      company: 'E3mar',
      description:
        'Complete architectural design for a modern residential building with detailed floor plans and high-quality 3D exterior rendering.',
      fullDescription: [
        'Complete architectural design for a modern residential building.',
        'Project Features:',
        '• Detailed floor plans with precise measurements',
        '• Construction notes and material specifications',
        '• High-quality 3D exterior rendering',
        '• Contemporary façade with large windows and balconies',
        '• Full design documentation for construction',
        'Ideal for clients seeking full design documentation and visual presentation for residential projects.'
      ],
      technologies: ['Revit', 'AutoCAD', '3D Rendering', 'Architectural Design', 'Floor Plans'],
      category: 'BIM Specialist',
      images: [modernResidentialImg1, modernResidentialImg2, modernResidentialImg3],
    },
    {
      title: 'Furniture E-Commerce Website',
      company: 'ITI Full Stack Track',
      description:
        'Fully functional furniture website combining clean design, dynamic data, and smooth user experience with cart functionality.',
      fullDescription: [
        'As part of my React course, I built a fully functional furniture website that combines clean design, dynamic data, and smooth user experience. This project helped me apply key frontend concepts and sharpen my skills in building scalable, component-based interfaces.',
        'Key Features:',
        '• Dynamic product cards with Add to Cart functionality',
        '• Product details page with routing and styled layout',
        '• Cart page with quantity control and total calculation',
        '• Responsive design across devices',
        '• Clean code structure and modular architecture',
        'This project reflects my growth as a frontend engineer and my passion for building intuitive, user-friendly interfaces.'
      ],
      technologies: ['React.js', 'Redux Toolkit', 'React Router', 'Bootstrap', 'Vite', 'JSON Server', 'CSS Modules', 'JavaScript ES6+'],
      category: 'Full-Stack Development',
      videos: [furnitureVideo],
      github: 'https://github.com/ebtehalraafat98/furniture-website',
      demo: 'https://cheery-raindrop-120ea3.netlify.app/',
    },
    {
      title: 'Simple Examinations System',
      company: 'ITI Full Stack Track',
      description:
        'Web-based examination system with randomized image-based questions, timer, and visual score results.',
      fullDescription: [
        'This project is a web-based examination system built using HTML, CSS, and JavaScript. It displays randomized image-based questions, tracks user responses, and calculates the final score with a visual result interface.',
        'Key Features:',
        '• Questions stored as array of objects with image-based answers',
        '• CSS popup for student name entry using SweetAlert',
        '• 1-minute timer bar with auto-submit functionality',
        '• Single question display with Next button navigation',
        '• 3-5 image-based answers per question with gray highlight on selection',
        '• Randomized questions and answers on each exam run',
        '• Circular progress bar showing final score percentage',
        '• Clean CSS styling for responsive design'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'SweetAlert'],
      category: 'Full-Stack Development',
      github: 'https://github.com/ebtehalraafat98/-examination-system-js',
      demo: 'https://ebtehalraafat98.github.io/-examination-system-js/',
    },
    {
      title: 'Electronic Examination & Evaluation System (ZU_EES)',
      company: 'ITI Full Stack Track',
      description:
        'Comprehensive electronic system for managing examinations and evaluation processes at Zagazig University.',
      fullDescription: [
        'This project is a comprehensive electronic system designed to manage examinations and evaluation processes at Zagazig University (ZU). The system aims to transform traditional assessment and review processes into an efficient and accurate digital platform.',
        'System Core Objectives:',
        '• User Management: Support permissions for students, professors, and department heads',
        '• Question Bank: Centralized question repository for exam development',
        '• Exam Management: Link exams to courses with marks and passing scores',
        '• Automatic Result Calculation: Record answers and calculate scores automatically',
        '• Evaluation System: Enable students to evaluate courses and professors',
        'Technical Structure:',
        '• Database: PostgreSQL with normalized tables (near 3NF)',
        '• Strong relationships using 1:M and M:M with associative entities',
        '• Ternary logic in Answer entity (Student, Exam, Question)',
        '• SQL queries for results, evaluations, and top performers'
      ],
      technologies: ['PostgreSQL', 'SQL', 'Database Design', 'ERD', 'Normalization'],
      category: 'Full-Stack Development',
      github: 'https://github.com/ebtehalraafat98/Electronic-Examination-and-Evaluation-System-Project-Summary-with-PG',
    },
    {
      title: 'Database Management with Bash',
      company: 'ITI Full Stack Track',
      description:
        'Command-line database management system built entirely with Bash scripting for creating, managing, and querying databases.',
      fullDescription: [
        'A comprehensive database management system (DBMS) built entirely using Bash scripting. This project demonstrates advanced shell scripting techniques to create a functional database system that runs directly from the command line.',
        'Key Features:',
        '• Create and manage multiple databases',
        '• Create tables with defined schemas',
        '• Insert, update, and delete records',
        '• Query data with filtering and sorting',
        '• Data persistence using file system',
        '• Interactive command-line interface',
        'This project showcases proficiency in Bash scripting, file handling, and building complex CLI applications.'
      ],
      technologies: ['Bash', 'Shell Scripting', 'Linux', 'CLI', 'File Systems'],
      category: 'Full-Stack Development',
      videos: [bashVideo],
      github: 'https://github.com/ebtehalraafat98/Bash_project',
      demo: 'https://engzuedu-my.sharepoint.com/:v:/g/personal/emrafat_eng_zu_edu_eg/Ec1jSYkD46pDj7yaVaY1ZbkBW-kw1HL54oiAlJ2Uhgq-Dg?e=C0SS26',
    },
    {
      title: 'TXT2TXT - SafeTensor MLflow Model Logger',
      company: 'DEPI Generative AI Track',
      description:
        'Custom MLflow pipeline for logging and packaging TensorFlow models using safetensors format with HuggingFace tokenizers.',
      fullDescription: [
        'This project provides a custom MLflow pipeline for logging and packaging a TensorFlow model using the safetensors format, HuggingFace tokenizers, and structured metadata.',
        'It enables reproducible training, artifact tracking, and deployment-ready model serving via MLflow\'s pyfunc interface.',
        'Key Features:',
        '• Wraps TensorFlow model in custom mlflow.pyfunc.PythonModel class',
        '• Loads model weights from safetensors format for secure weight storage',
        '• Logs model architecture, tokenizer files, parameters, and metrics',
        '• Defines input/output schema for deployment',
        '• Packages everything into a versioned MLflow model for future loading and inference'
      ],
      technologies: ['MLflow', 'TensorFlow', 'Safetensors', 'HuggingFace Transformers', 'Python', 'Pandas', 'Cloudpickle'],
      category: 'AI & Machine Learning',
      github: 'https://github.com/ebtehalraafat98/Depi_Grad_Project_GEN_AI_TXT2TXT',
    },
    {
      title: 'TXT2IMG - Advanced Text-to-Image Generation',
      company: 'DEPI Generative AI Track',
      description:
        'Four-week journey in building a generative AI pipeline using Stable Diffusion for photorealistic image generation.',
      fullDescription: [
        'This repository documents a four-week journey in building a generative AI pipeline using Python, HuggingFace Transformers, Stable Diffusion, and MLflow.',
        'It covers everything from data preprocessing to model integration and experiment tracking.',
        'The project demonstrates advanced text-to-image generation capabilities using state-of-the-art diffusion models.',
        'Developed photorealistic image generation system using advanced generative AI models and prompt engineering techniques.'
      ],
      technologies: ['Python', 'Stable Diffusion', 'HuggingFace Transformers', 'MLflow', 'Generative AI', 'Deep Learning'],
      category: 'AI & Machine Learning',
      demo: 'https://colab.research.google.com/drive/17G6hox3a1e3K7GVl8k8ANMNvlXbwvpqf?usp=sharing',
    },
    {
      title: 'AI to Fabrication: Designing for Maat',
      company: 'Galala University Workshop',
      description:
        'Sculptural bench fusing ancient Egyptian symbolism with futuristic architecture, inspired by Maat - goddess of balance and cosmic order.',
      fullDescription: [
        'This sculptural bench is a fusion of ancient Egyptian symbolism and futuristic architectural expression, inspired by the philosophy of Maat, the goddess of balance and cosmic order. The design reflects protection and ascension through a copper-toned, wing-like form that rises from a grounded, ceremonial base.',
        'Design Features:',
        '• Continuous, flowing silhouette with seating area emerging from soft, concave cradle',
        '• Seamless integration with no visible joints or decorative elements',
        '• Smooth, directional curves inspired by cobra hoods, temple pylons, and lotus blades',
        '• Copper or marble-like material for permanence and sacred elegance',
        '• Warm lighting enhances ceremonial and symbolic presence',
        'Development Process:',
        '1. Text-to-image generation to visualize the concept',
        '2. Image-to-3D modeling using Tripo AI',
        '3. Refinement in Rhino & 3Ds Max',
        '4. Final fabrication via 3D printing on Zortrax M200 Plus',
        'The result is a calm, ceremonial object of rest—merging ancient Egyptian spirituality with futuristic minimalism.'
      ],
      technologies: ['AI Design', 'Tripo AI', 'Rhino', '3Ds Max', '3D Printing', 'Zortrax M200 Plus', 'Generative Design'],
      category: 'Computational Engineering',
      images: [maatImg1, maatImg2, maatImg3, maatImg4, maatImg5, maatImg6, maatImg7],
    },
    {
      title: 'CNC Panel: Parametric-to-Fabrication Protocol',
      company: 'Personal Project',
      description:
        'Parametric fabrication protocol for adaptive interior systems with complexity control and automated digital-to-physical workflow.',
      fullDescription: [
        'Project Title: Parametric Fabrication Protocol for Adaptive Interior Systems (Locker Panels)',
        'Core Challenge: To create a complexity, non-repetitive aesthetic while establishing a robust, error-free digital-to-physical data flow for fabrication.',
        'Generative Design:',
        '• Developed custom Grasshopper script to define panel pattern based on dynamic parameters',
        '• Used geometric elements (curves, points, attractors, meshes) to control pattern density',
        '• Achieved visually complex yet structurally controlled outcome',
        '• Parametric nature ensures instant adaptation to different dimensions without manual redesign',
        'Fabrication Workflow:',
        '• Output Preparation: Script output was precise, dimensionally locked geometry',
        '• Automation Protocol: Direct loop from parametric model (Grasshopper) to fabrication data (CAD)',
        '• Data Translation: Meticulous transfer and preparation in CAD to validate cutting lines',
        '• Ensured geometric integrity translated accurately into Laser Cutter/CNC machine instructions',
        'Relevance: Demonstrates proven ability to create logic-based, adaptable geometric systems (computational design), essential for defining inputs and constraints for robotic assembly.'
      ],
      technologies: ['Rhino', 'Grasshopper', 'Visual Programming', 'AutoCAD', 'CNC', 'Laser Cutting', 'Parametric Design'],
      category: 'Computational Engineering',
      images: [cncImg1, cncImg2, cncImg3, cncImg4, cncImg5, cncImg6, cncImg7, cncImg8, cncImg9],
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
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeCategory === 'All Projects'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);
  const hasMoreProjects = filteredProjects.length > 6;
  const hiddenProjects = filteredProjects.slice(6);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowAll(false); // Reset show all when category changes
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
              onClick={() => handleCategoryChange(category)}
              className={`${styles.filterButton} ${
                activeCategory === category ? styles.filterButtonActive : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.projectGrid}>
          {displayedProjects.map((project, index) => (
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

        {hasMoreProjects && !showAll && (
          <div className={styles.fadeOverlay}>
            <div className={styles.hiddenProjectsPreview}>
              {hiddenProjects.slice(0, 1).map((project, index) => (
                <div 
                  key={index} 
                  className={styles.blurredProjectCard}
                >
                  <div className={styles.projectContent}>
                    <div className={styles.projectHeader}>
                      <span className={styles.categoryBadge}>{project.category}</span>
                    </div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectCompany}>{project.company}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.showMoreOverlay}>
              <div className={styles.horizontalLine}></div>
              <button 
                className={styles.showMoreButton}
                onClick={() => setShowAll(true)}
              >
                <span className={styles.buttonText}>
                  Show {filteredProjects.length - 6} More Projects
                </span>
                <svg 
                  className={styles.arrowIcon} 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
                </svg>
              </button>
              <div className={styles.horizontalLine}></div>
            </div>
          </div>
        )}

        {showAll && hasMoreProjects && (
          <div className={styles.showLessContainer}>
            <button 
              className={styles.showLessButton}
              onClick={() => setShowAll(false)}
            >
              Show Less
            </button>
          </div>
        )}
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
