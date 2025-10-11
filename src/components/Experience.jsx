"use client";

export default function Experience() {
  const experiences = [
    {
      id: "freelance-2024",
      type: "work",
      title: "Freelance Full-Stack Developer",
      organization: "Self-Employed",
      location: "Morocco",
      period: "2024 - Present",
      current: true,
      description: [
        "Building custom web solutions for local businesses and international clients",
        "Developing modern, scalable applications with cutting-edge technologies",
        "Managing full project lifecycle from requirements to deployment",
        "Implementing cloud infrastructure and DevOps best practices",
      ],
      technologies: ["React", "Next.js", "Node.js", "Express", "AWS", "Docker", "PostgreSQL"],
      achievements: "10+ Successful Projects Delivered",
    },
    {
      id: "internship-2023",
      type: "work",
      title: "Full-Stack Development Intern",
      organization: "Tech Solutions Morocco",
      location: "Morocco",
      period: "Jun 2023 - Dec 2023",
      current: false,
      description: [
        "Developed and maintained WordPress websites with custom themes and plugins",
        "Built full-stack web applications using modern JavaScript frameworks",
        "Deployed and managed applications on AWS cloud infrastructure",
        "Collaborated with senior developers on production-level projects",
      ],
      technologies: ["WordPress", "PHP", "JavaScript", "AWS", "MySQL", "React"],
      achievements: "6 Months Production Experience",
    },
    {
      id: "bootcamp-2022",
      type: "education",
      title: "Web Development Bootcamp",
      organization: "Solicode",
      location: "Morocco",
      period: "2022 - 2023",
      current: false,
      description: [
        "Intensive full-stack web development training program",
        "Mastered modern web technologies and development methodologies",
        "Built real-world projects including e-commerce and CMS applications",
        "Completed comprehensive capstone project (fil-rouge)",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "React", "Git"],
      achievements: "Honor Graduate",
    },
    {
      id: "highschool-2021",
      type: "education",
      title: "High School Diploma",
      organization: "IBN EL KHATIB High School",
      location: "Morocco",
      period: "2021 - 2022",
      current: false,
      description: [
        "Completed scientific and technical track with distinction",
        "Strong foundation in mathematics, physics, and computer science",
        "Developed early interest in programming and technology",
        "Prepared for career in software development",
      ],
      technologies: [],
      achievements: "Scientific Track",
    },
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 backdrop-blur-2xl" />

      {/* Floating glass orbs - Optimized */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-2xl animate-pulse" style={{ transform: 'translateZ(0)' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-2xl animate-pulse [animation-delay:1s]" style={{ transform: 'translateZ(0)' }} />

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-[fadeIn_0.8s_ease-out]">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>
              <span className="text-sm font-semibold text-primary">My Journey</span>
            </div>
          </div>
          <h2 className="mb-4">Experience & Education</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            From education to professional development, here's my journey in the world of technology and software engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full hidden lg:block" style={{ transform: 'translateX(-50%)' }} />
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full lg:hidden" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 lg:left-1/2 top-6 lg:top-8 w-4 h-4 lg:w-6 lg:h-6 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-background shadow-lg z-20" style={{ transform: 'translateX(-50%)' }}>
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden lg:block lg:w-1/2" />

                {/* Experience Card */}
                <div className="lg:w-1/2 ml-6 lg:ml-0">
                  <div
                    className="group bg-background/80 backdrop-blur-sm md:backdrop-blur-md rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                    style={{ contain: 'layout style paint', transform: 'translateZ(0)' }}
                  >
                    {/* Card Header */}
                    <div className="flex items-start gap-4 mb-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                        exp.type === 'work'
                          ? 'bg-gradient-to-br from-secondary/20 to-secondary/10 text-secondary'
                          : 'bg-gradient-to-br from-primary/20 to-primary/10 text-primary'
                      }`}>
                        {exp.type === 'work' ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                            />
                          </svg>
                        )}
                      </div>

                      {/* Title and Current Badge */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                          <h3 className="font-bold text-base md:text-lg group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          {exp.current && (
                            <span className="flex-shrink-0 px-2.5 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold rounded-full shadow-lg animate-pulse self-start">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="text-sm font-semibold text-foreground/80 mb-1 break-words">
                          {exp.organization}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-foreground/60">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-3.5 h-3.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                            />
                          </svg>
                          <span>{exp.location}</span>
                          <span className="text-foreground/40">•</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-3.5 h-3.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                            />
                          </svg>
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                          </svg>
                          <span className="break-words">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    {exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 text-xs font-medium rounded-full border ${
                              exp.type === 'work'
                                ? 'bg-secondary/10 text-secondary border-secondary/20'
                                : 'bg-primary/10 text-primary border-primary/20'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Achievement Badge */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-foreground/60">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`w-4 h-4 ${exp.type === 'work' ? 'text-secondary' : 'text-primary'}`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{exp.achievements}</span>
                    </div>

                    {/* Decorative corner accent */}
                    <div
                      className={`absolute top-0 right-0 border-t-2 border-r-2 rounded-tr-2xl transition-all duration-300 ${
                        exp.type === 'work'
                          ? 'w-8 h-8 border-secondary/20 group-hover:w-12 group-hover:h-12 group-hover:border-secondary/40'
                          : 'w-8 h-8 border-primary/20 group-hover:w-12 group-hover:h-12 group-hover:border-primary/40'
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-background/50 backdrop-blur-sm md:backdrop-blur-md rounded-xl border border-border hover:border-primary/30 transition-all duration-300" style={{ contain: 'layout style paint', transform: 'translateZ(0)' }}>
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">3+</div>
            <div className="text-sm text-foreground/60">Years Journey</div>
          </div>
          <div className="text-center p-6 bg-background/50 backdrop-blur-sm md:backdrop-blur-md rounded-xl border border-border hover:border-primary/30 transition-all duration-300" style={{ contain: 'layout style paint', transform: 'translateZ(0)' }}>
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">10+</div>
            <div className="text-sm text-foreground/60">Projects Done</div>
          </div>
          <div className="text-center p-6 bg-background/50 backdrop-blur-sm md:backdrop-blur-md rounded-xl border border-border hover:border-primary/30 transition-all duration-300" style={{ contain: 'layout style paint', transform: 'translateZ(0)' }}>
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">6</div>
            <div className="text-sm text-foreground/60">Months Intern</div>
          </div>
          <div className="text-center p-6 bg-background/50 backdrop-blur-sm md:backdrop-blur-md rounded-xl border border-border hover:border-primary/30 transition-all duration-300" style={{ contain: 'layout style paint', transform: 'translateZ(0)' }}>
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">15+</div>
            <div className="text-sm text-foreground/60">Tech Skills</div>
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
