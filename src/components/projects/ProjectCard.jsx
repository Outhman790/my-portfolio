"use client";

export default function ProjectCard({ project, isActive = true, showActions = true }) {
  return (
    <div
      className={`relative bg-background/80 backdrop-blur-sm md:backdrop-blur-md rounded-2xl border overflow-hidden transition-all duration-500 h-full flex flex-col ${
        isActive
          ? "shadow-2xl border-primary/30 scale-100"
          : "shadow-lg border-border/50 hover:border-primary/20 scale-90 opacity-60"
      }`}
      style={{ contain: 'layout style paint', transform: 'translateZ(0)' }}
    >
      {/* Project Image/Preview */}
      <div className="relative w-full h-48 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 flex items-center justify-center overflow-hidden">
        {/* Subtle shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-10" />

        {/* Placeholder - You can replace with actual images */}
        <div className="flex flex-col items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
          <span className="text-sm text-primary font-semibold">
            {project.title}
          </span>
        </div>

        {/* GitHub Stars Badge */}
        {project.stars > 0 && (
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-yellow-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1 border border-white/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            {project.stars}
          </div>
        )}

        {/* Category Badge (if available) */}
        {project.category && (
          <div className="absolute top-3 left-3">
            <div className="px-3 py-1 bg-secondary/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg border border-white/20">
              {project.category}
            </div>
          </div>
        )}

        {/* Featured Badge (if available) */}
        {project.featured && (
          <div className="absolute bottom-3 left-3">
            <div className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg border border-white/20">
              Featured
            </div>
          </div>
        )}
      </div>

      {/* Project Details */}
      <div className={`p-6 flex-1 flex flex-col ${!isActive && 'pointer-events-none'}`}>
        <h3 className={`font-bold mb-3 transition-all duration-300 ${isActive ? 'text-2xl' : 'text-lg'}`}>
          {project.title}
        </h3>

        <p className={`text-foreground/70 mb-4 transition-all duration-300 ${isActive ? 'text-base line-clamp-3' : 'text-sm line-clamp-2'}`}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className={`flex flex-wrap gap-2 mb-4 transition-all duration-300 ${!isActive && 'scale-90 opacity-70'}`}>
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 bg-primary/10 backdrop-blur-sm text-primary text-xs font-medium rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons - Only show when specified */}
        {showActions && isActive && (
          <div className="mt-auto flex gap-3">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-sm font-medium rounded-lg hover:bg-primary/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 active:scale-95 transition-all duration-200"
            >
              <span>Live Demo</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-foreground/5 backdrop-blur-sm border border-border text-foreground text-sm font-medium rounded-lg hover:bg-foreground/10 hover:border-foreground/30 hover:shadow-lg active:scale-95 transition-all duration-200"
            >
              <span>GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* Decorative corner accent */}
      <div
        className={`absolute top-0 right-0 border-t-2 border-r-2 rounded-tr-2xl transition-all duration-300 ${
          isActive
            ? "w-12 h-12 border-primary/30"
            : "w-6 h-6 border-primary/10"
        }`}
      />
    </div>
  );
}
