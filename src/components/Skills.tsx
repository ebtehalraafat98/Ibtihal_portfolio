import { 
  Code2, 
  Database, 
  Boxes, 
  Brain, 
  Wrench,
  Users,
  Lightbulb,
  Target,
  MessageSquare,
  TrendingUp,
  Languages,
  FileCode,
  Settings,
  Cuboid,
  Search,
  Package,
  Server,
  Monitor,
  Terminal,
  Globe,
  Zap,
  Atom,
  CircleDot,
  Flame
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming & Frameworks',
      icon: Code2,
      skills: [
        { name: 'Python', icon: FileCode },
        { name: 'C#', icon: Code2 },
        { name: 'JavaScript', icon: Zap },
        { name: 'React', icon: Atom },
        { name: 'Django', icon: CircleDot },
        { name: 'Flask', icon: Flame },
      ],
    },
    {
      category: 'BIM Software & APIs',
      icon: Boxes,
      skills: [
        { name: 'Revit API', icon: Cuboid },
        { name: 'Dynamo', icon: Settings },
        { name: 'AutoCAD API', icon: FileCode },
        { name: 'Navisworks', icon: Search },
        { name: 'Grasshopper', icon: Settings },
        { name: 'IFC & XBIM', icon: Package },
      ],
    },
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      skills: [
        { name: 'TensorFlow', icon: Brain },
        { name: 'Keras', icon: Target },
        { name: 'MLflow', icon: TrendingUp },
        { name: 'Hugging Face', icon: Lightbulb },
        { name: 'Deep Learning', icon: Brain },
      ],
    },
    {
      category: 'Database & DevOps',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', icon: Database },
        { name: 'SQL Server', icon: Server },
        { name: 'Red Hat Linux', icon: Monitor },
        { name: 'Bash Scripting', icon: Terminal },
        { name: 'Apache Server', icon: Globe },
      ],
    },
  ];

  const softSkills = [
    { name: 'Communication', icon: MessageSquare },
    { name: 'Presentation', icon: TrendingUp },
    { name: 'Teamwork', icon: Users },
    { name: 'Leadership', icon: Target },
    { name: 'Problem Solving', icon: Lightbulb },
    { name: 'Continuous Learning', icon: Brain },
  ];

  const additionalSkills = [
    'ArcGIS',
    'Microsoft Office',
    'Photoshop',
    '3D Max',
    'V-Ray',
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="h-1 w-20 bg-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => {
              const CategoryIcon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-cyan-400/10 rounded-lg">
                      <CategoryIcon className="text-cyan-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-cyan-400">
                      {category.category}
                    </h3>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {category.skills.map((skill, idx) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={idx}
                          className="flex flex-col items-center gap-2 p-4 bg-slate-800 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400/30 border border-transparent transition-all duration-300 cursor-default group"
                        >
                          <SkillIcon 
                            className="text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300" 
                            size={32} 
                          />
                          <span className="text-white text-sm text-center font-medium">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-slate-900 p-4 md:p-8 rounded-lg border border-slate-700 mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4 md:mb-6 text-center">
              Core Behavioral Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {softSkills.map((skill, index) => {
                const SkillIcon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 md:gap-3 px-3 md:px-6 py-3 md:py-4 bg-cyan-400/10 border border-cyan-400/30 rounded-lg text-white hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 cursor-default group"
                  >
                    <SkillIcon size={18} className="md:w-5 md:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="font-medium text-xs md:text-base">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <Languages className="text-cyan-400" size={24} />
                <h3 className="text-xl font-bold text-cyan-400">Languages</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-slate-800 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400/30 border border-transparent transition-all duration-300">
                  <span className="text-white font-medium">Arabic</span>
                  <span className="text-cyan-400 font-semibold">Native</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-800 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400/30 border border-transparent transition-all duration-300">
                  <span className="text-white font-medium">English</span>
                  <span className="text-cyan-400 font-semibold">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="text-cyan-400" size={24} />
                <h3 className="text-xl font-bold text-cyan-400">
                  Additional Tools
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {additionalSkills.map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-800 text-gray-300 rounded-lg text-sm hover:bg-cyan-400/10 hover:text-cyan-400 hover:border-cyan-400/30 border border-transparent transition-all duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
