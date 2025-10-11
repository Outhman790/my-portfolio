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
  SiGit,
  SiPhp,
  SiMysql,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

// Official Playwright Icon from Simple Icons
const PlaywrightIcon = ({ className, style }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ ...style, width: '1em', height: '1em' }}
    fill="currentColor"
  >
    <path d="M23.996 7.462c-.056.837-.257 2.135-.716 3.85-.995 3.715-4.27 10.874-10.42 9.227-6.15-1.65-5.407-9.487-4.412-13.201.46-1.716.934-2.94 1.305-3.694.42-.853.846-.289 1.815.523.684.573 2.41 1.791 5.011 2.488 2.601.697 4.706.506 5.583.352 1.245-.219 1.897-.494 1.834.455Zm-9.807 3.863s-.127-1.819-1.773-2.286c-1.644-.467-2.613 1.04-2.613 1.04Zm4.058 4.539-7.769-2.172s.446 2.306 3.338 3.153c2.862.836 4.43-.98 4.43-.981Zm2.701-2.51s-.13-1.818-1.773-2.286c-1.644-.469-2.612 1.038-2.612 1.038ZM8.57 18.23c-4.749 1.279-7.261-4.224-8.021-7.08C.197 9.831.044 8.832.003 8.188c-.047-.73.455-.52 1.415-.354.677.118 2.3.261 4.308-.28a11.28 11.28 0 0 0 2.41-.956c-.058.197-.114.4-.17.61-.433 1.618-.827 4.055-.632 6.426-1.976.732-2.267 2.423-2.267 2.423l2.524-.715s1.013-1.478 2.643-2.074c.083.915.226 1.83.442 2.702.433 1.741.952 2.917 1.364 3.652.467.826.784.194 1.27-1.037.343-.867 1.203-2.83 1.685-5.396.485-2.568.427-4.648.306-5.521-.054-.385-.16-.693-.273-.905-.135.02-.274.037-.413.051a9.803 9.803 0 0 1-2.076.044c-.055.192-.11.391-.165.597-.433 1.618-.827 4.055-.632 6.426-1.976.732-2.267 2.423-2.267 2.423l2.524-.715s1.013-1.478 2.643-2.074c.083.915.226 1.83.442 2.702.433 1.741.952 2.917 1.364 3.652.467.826.784.194 1.27-1.037.343-.867 1.203-2.83 1.685-5.396.485-2.568.427-4.648.306-5.521-.054-.385-.16-.693-.273-.905a5.24 5.24 0 0 0-.413.051 9.803 9.803 0 0 1-2.076.044 43.07 43.07 0 0 0-.165.597Z"/>
  </svg>
);

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
    { name: "Playwright", icon: PlaywrightIcon, color: "#2EAD33" },
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
