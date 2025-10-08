export default function Projects() {
  const projects = [
    {
      title: "OGallery",
      description: "A modern, user-centric image gallery application built with React, Tailwind CSS, Express and AWS.",
      tech: ["React", "Tailwind CSS", "Express", "AWS"],
      demo: "#",
      github: "https://github.com/Outhman790/OGallery",
      stars: 1,
    },
    {
      title: "fil-rouge",
      description: "Final Year Project of SOLICODE - A comprehensive full-stack web application.",
      tech: ["PHP", "MySQL", "JavaScript"],
      demo: "#",
      github: "https://github.com/Outhman790/fil-rouge",
      stars: 0,
    },
    {
      title: "Budget Monitoring",
      description: "A financial tracking application to monitor and manage personal budgets effectively.",
      tech: ["JavaScript", "HTML", "CSS"],
      demo: "#",
      github: "https://github.com/Outhman790/budget-monitoring",
      stars: 0,
    },
    {
      title: "DSA",
      description: "Data Structures and Algorithms implementations and practice problems.",
      tech: ["JavaScript", "Algorithms"],
      demo: "#",
      github: "https://github.com/Outhman790/DSA",
      stars: 0,
    },
    {
      title: "Library Management System",
      description: "Object-oriented PHP application for managing library resources and operations.",
      tech: ["PHP", "OOP", "JavaScript"],
      demo: "#",
      github: "https://github.com/Outhman790/Library-managment-with-PHP-OOP",
      stars: 0,
    },
    {
      title: "MealDB API",
      description: "Web application utilizing the MealDB API to browse and search recipes.",
      tech: ["JavaScript", "API", "HTML/CSS"],
      demo: "#",
      github: "https://github.com/Outhman790/MealDb-API-",
      stars: 0,
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        <h2 className="text-center mb-4">Featured Projects</h2>
        <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one showcases different aspects of my skills.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-muted/50 rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <p className="text-foreground/40">Project Image</p>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-foreground/70">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-3 pt-2">
                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-foreground font-medium transition-colors"
                    >
                      Live Demo →
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-foreground font-medium transition-colors"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
