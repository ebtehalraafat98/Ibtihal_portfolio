import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 max-w-full overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="h-1 w-20 bg-cyan-400 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-cyan-400" size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:ebtehal.mohamed.raafat.abdelfatah@gmail.com"
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm sm:text-base break-all"
                    >
                      ebtehal.mohamed.raafat.abdelfatah@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <a
                      href="tel:+201552566164"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      +20 155 256 6164
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-gray-400">Egypt</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 sm:p-6 bg-slate-800 rounded-lg border border-slate-700">
                <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">
                  Available for opportunities in:
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 flex-shrink-0">▹</span>
                    <span>BIM Development & Automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 flex-shrink-0">▹</span>
                    <span>Full-Stack Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 flex-shrink-0">▹</span>
                    <span>AI/ML in AEC Industry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 flex-shrink-0">▹</span>
                    <span>Consulting & Training</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6 w-full">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white font-medium mb-2 text-sm sm:text-base"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-white font-medium mb-2 text-sm sm:text-base"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-white font-medium mb-2 text-sm sm:text-base"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Project discussion"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white font-medium mb-2 text-sm sm:text-base"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-3 sm:px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-300 shadow-lg hover:shadow-cyan-400/50 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send size={18} className="sm:w-5 sm:h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
