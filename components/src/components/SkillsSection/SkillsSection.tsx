import React from 'react';
import "./SkillsSection.scss";
import Pill from "./Pill";

const SkillsSection: React.FC = () => {
  const skills = [
    "Web Development", "ASL Interpretation", "CI/CD pipelines", 
    "Project Management", "Public Speaking", "Technical Writing", 
    "Team Building", "Leadership", "Customer Service", 
    "Public Relations", "Training & Development", "Event Planning", 
    "Microsoft Office Suite", "Google Suite", "Adobe Creative Suite", 
    "Video Editing", "Photography", "Graphic Design", "Content Creation",
    "Amazon Web Services", "AWS", "AWS Certification", "AWS Cloud",
    "Cloud Certification", "Cloud Computing", "Cloud Platform",
    "Cloud Services", "Applications & Software", "Business Continuity",
    "CompTIA", "Database Fundamentals", "IT Concepts", "IT Infrastructure",
    "Networking", "Programming", "InfoSec", "Software Development",
    "Wireless Networks"
  ];
  

  const alphabetizedSkills = skills.sort();

  const columns: JSX.Element[][] = [[], [], []];  // 3 columns for this example
  let currentCol = 0;

  alphabetizedSkills.forEach(skill => {
    columns[currentCol].push(<Pill skill={skill} key={skill} />);
    currentCol = (currentCol + 1) % columns.length;
  });

  return (
    <div id="skills">
      <h2>Skills</h2>
      <div className="masonry">
        {columns.map((col, index) => (
          <div key={index} className="column">
            {col}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
