import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiPhp,
  SiMysql,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

export default function About() {
  const technologies = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", isDark: true },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#FFFFFF", isDark: true },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "Git", icon: SiGit, color: "#F05032" },
  ];

  return (
    <section id="about" className="section-padding bg-muted/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* About Text */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full" />
              <div className="space-y-4 text-foreground/80 text-lg leading-relaxed pl-6">
                <p>
                  I'm a passionate <span className="text-primary font-semibold">full-stack developer</span> with a strong focus on building scalable web applications
                  and cloud infrastructure. With experience in both frontend and backend development, I bridge the
                  gap between code and deployment.
                </p>
                <p>
                  My expertise spans modern web frameworks, cloud platforms, and DevOps practices, allowing me to
                  deliver end-to-end solutions that are not only functional but also <span className="text-primary font-semibold">performant and maintainable</span>.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-background/50 rounded-xl border border-border">
                <div className="text-3xl font-bold text-primary mb-1">29</div>
                <div className="text-sm text-foreground/60">Projects</div>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-xl border border-border">
                <div className="text-3xl font-bold text-primary mb-1">3+</div>
                <div className="text-sm text-foreground/60">Years Exp</div>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-xl border border-border">
                <div className="text-3xl font-bold text-primary mb-1">16+</div>
                <div className="text-sm text-foreground/60">Technologies</div>
              </div>
            </div>
          </div>

          {/* Tech Stack with Icons */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
              Technologies I Work With
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-4 gap-6">
              {technologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="group flex flex-col items-center gap-3 p-4 bg-background/50 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
                  >
                    <div className={tech.isDark ? "p-2 bg-foreground/10 rounded-lg" : ""}>
                      <Icon
                        className="text-4xl transition-all duration-300 group-hover:scale-125"
                        style={{ color: tech.color }}
                      />
                    </div>
                    <span className="text-xs font-medium text-center text-foreground/70 group-hover:text-foreground transition-colors">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
