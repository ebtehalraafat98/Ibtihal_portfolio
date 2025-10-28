import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'BIM Developer',
      company: 'Technology Company',
      location: 'USA',
      period: 'Jan 2025 – Aug 2025',
      type: 'Part-time',
      responsibilities: [
        'Developed Revit plugins for automated assembly management and documentation',
        'Implemented dynamic sheet creation and view generation workflows',
        'Built parameter assignment systems for improved data structuring',
        'Collaborated with cross-functional teams on construction technology solutions',
      ],
    },
    {
      title: 'BIM Specialist & BIM Developer',
      company: 'BIT World',
      location: 'Hong Kong',
      period: 'Nov 2023 - Present',
      type: 'Part-time',
      responsibilities: [
        'Developed and maintained accurate 3D HBIM & BIM models using Revit',
        'Aligned models with project specifications, naming conventions, and data standards',
        'Conducted clash detection and resolution between architectural, structural and MEP',
        'Automated BIM scheduling for improved data conversion processes',
        'Embedded metadata into models for enhanced project planning',
      ],
      keyProjects: [
        'Court of Final Appeal Heritage BIM',
        'MTR Corporation Tung Chung East Station',
        'ASD Region 2 Government Properties',
      ],
    },
    {
      title: 'Design Architect & BIM Technician',
      company: 'Lecon Group',
      location: 'Saudi Arabia',
      period: 'Mar 2022 - Apr 2023',
      type: 'Full-time',
      responsibilities: [
        'Evolved design concepts from schematic to construction using BIM',
        'Developed architectural plans, sections, elevations, and details for submissions',
      ],
      keyProjects: ['Emaar Housing Projects', 'Badael Company Housing Projects'],
    },
    {
      title: 'Teaching Assistant & Researcher',
      company: 'Zagazig University',
      location: 'Egypt',
      period: 'Jul 2021 - Present',
      type: 'Full-time',
      responsibilities: [
        'Instructed students on architectural design principles and construction documents',
        'Conducted research on deep learning potential in architectural design',
        'Developed and improved architectural design of university buildings',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work Experience
            </h2>
            <div className="h-1 w-20 bg-cyan-400 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-gray-400 mb-2">
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-cyan-400">
                        <Calendar size={16} />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <span className="text-sm px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/30 w-fit">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* {exp.keyProject && (
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <p className="text-sm text-gray-400">
                        <span className="text-cyan-400 font-semibold">
                          Key Project:
                        </span>{' '}
                        {exp.keyProject}
                      </p>
                    </div>
                  )} */}

                  {exp.keyProjects && (
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <p className="text-sm text-cyan-400 font-semibold mb-2">
                        Key Projects:
                      </p>
                      <ul className="space-y-1">
                        {exp.keyProjects.map((project, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex gap-2">
                            <span className="text-cyan-400">•</span>
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
