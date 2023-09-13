// ProjectsSection.tsx
import "./ProjectSection.scss";
import React from "react";

const ProjectsSection: React.FC = () => {
  return (
    <div id="projects">
      <h2>Development Projects</h2>
      <h3>Rainbow Devs</h3>
      <br />
      <p>Co-leader of a cohort of approximately 100 developers and students.</p>
      <br />
      <a
        href="https://rainbowdevs.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit the Rainbow Devs Website
      </a>
      {/* Add more projects here */}
    </div>
  );
};

export default ProjectsSection;
