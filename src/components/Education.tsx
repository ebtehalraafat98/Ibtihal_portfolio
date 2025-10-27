import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Master of Science in Digital Design (MSDD)',
      institution: 'Zagazig University',
      department: 'Architecture Department',
      period: '2022 - Present',
      thesis: 'Potentials of Deep Learning in architectural design process',
      achievements: [],
    },
    {
      degree: 'Bachelor of Science in Architecture',
      institution: 'Zagazig University',
      department: 'Architectural Engineering',
      period: '2016 - 2021',
      grade: 'Exceptionally Good with Honors',
      achievements: [
        'Cumulative rank: First',
        'Graduation project grade: Excellent',
      ],
    },
  ];

  const internships = [
    {
      title: 'ITI Full Stack Python Track',
      period: 'Jul 2025 – Nov 2025',
      location: 'Zagazig Branch, Egypt',
      modules: [
        'Frontend: HTML5, CSS3, JavaScript, React, UI/UX with Figma',
        'Backend: Django, Flask, RESTful APIs',
        'System Admin & DevOps: Red Hat Linux, PostgreSQL, Apache Server',
        'Software Testing: Manual & Automated Testing with Python',
      ],
    },
    {
      title: 'DEPI Generative AI Track',
      period: 'Jul 2024 - Oct 2024',
      location: 'Zagazig Branch, Egypt',
      modules: [
        'Machine Learning & Deep Learning fundamentals',
        'NLP, TensorFlow, Keras, MLflow, Hugging Face',
        'Generative AI: Product reviews, text-to-image generation',
        'Prompt Engineering techniques',
      ],
    },
    {
      title: 'ITI BIM Automation Development Track',
      period: 'Jul 2023 - Oct 2023',
      location: 'Smart Village Branch, Egypt',
      modules: [
        'Revit API & AutoCAD API development with C#',
        'IFC integration and data exchange',
        'Windows Presentation Foundation (WPF)',
        'BIM workflow automation',
      ],
    },
  ];

  const workshops = [
    'AI to Fabrication workshop - Galala University (Jul 2025)',
    'Automation and Coordination workshop (Jul 2021 - Sep 2021)',
    'Revit Skills workshop (Jul 2021 - Sep 2021)',
    'School of Architecture in Egypt (Dec 2021 - Feb 2021)',
    'Architectural Design Methodology (Dec 2020 - Feb 2021)',
    'Design Summer School (Jul 2020 - Sep 2020)',
  ];

  return (
    <section id="education" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Education & Training
            </h2>
            <div className="h-1 w-20 bg-cyan-400 mx-auto"></div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
              <GraduationCap size={28} />
              Academic Degrees
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-cyan-400">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.department}</p>
                    </div>
                    <span className="text-gray-400 mt-2 md:mt-0">{edu.period}</span>
                  </div>

                  {edu.thesis && (
                    <p className="text-gray-300 mb-2">
                      <span className="text-cyan-400 font-semibold">Thesis:</span>{' '}
                      {edu.thesis}
                    </p>
                  )}

                  {edu.grade && (
                    <p className="text-gray-300 mb-2">
                      <span className="text-cyan-400 font-semibold">Grade:</span>{' '}
                      {edu.grade}
                    </p>
                  )}

                  {edu.achievements.length > 0 && (
                    <div className="mt-3 flex items-start gap-2">
                      <Award size={20} className="text-cyan-400 mt-1 flex-shrink-0" />
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 text-sm">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Intensive Training Programs
            </h3>
            <div className="space-y-6">
              {internships.map((internship, index) => (
                <div
                  key={index}
                  className="bg-slate-900 p-6 rounded-lg border border-slate-700"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">
                        {internship.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{internship.location}</p>
                    </div>
                    <span className="text-cyan-400 mt-2 md:mt-0">
                      {internship.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {internship.modules.map((module, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-300 text-sm">
                        <span className="text-cyan-400">▹</span>
                        <span>{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Workshops & Courses
            </h3>
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
              <div className="grid md:grid-cols-2 gap-4">
                {workshops.map((workshop, index) => (
                  <div
                    key={index}
                    className="flex gap-3 text-gray-300 p-3 bg-slate-800 rounded"
                  >
                    <span className="text-cyan-400">•</span>
                    <span>{workshop}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
