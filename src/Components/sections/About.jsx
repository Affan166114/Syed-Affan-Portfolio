import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const skills = {
    Languages: ["JAVA", "JavaScript"],
    "Web Development": ["HTML", "CSS", "Bootstrap", "Node.js", "Express.js", "React.js"],
    Tools: ["VS Code", "GIT", "Postman", "Figma", "GitHub"],
    Databases: ["MySQL", "PostgreSQL"],
    Concepts: ["Data Structure and Algorithms", "OOPs", "DBMS"],
    "Soft Skills": [
      "Problem-solving",
      "Effective Communication",
      "Team Collaboration",
      "Time Management",
      "Adaptability",
    ],
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with experience in building scalable web applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, techList], idx) => (
                <div key={idx} className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4 text-blue-400 capitalize">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {techList.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Reva University</strong> — Bachelor of Technology
                </li>
                <li>
                  <span className="text-sm italic">Bengaluru, India | Dec 2020 – Present</span>
                </li>
                <li>
                  Major: Computer Science and Engineering (IoT & Cybersecurity, including Blockchain Technology)
                </li>
                <li>CGPA: 8.6 / 10</li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
