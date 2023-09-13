import React from 'react';
import "./EducationSection.scss";
import comptia from "../../assets/comptia-it-fundamentals-itf-certification.png";
import awsccp from "../../assets/aws-certified-cloud-practitioner.png";

const EducationSection: React.FC = () => {
  return (
    <div id="education">
      <h2>Education & Certifications</h2>

      <h3>Academic Background</h3>
      <p>I earned an Associate of Applied Science in ASL Interpretation from Tyler Junior College between 2010 and 2013.</p>

      <h3>Certifications in Interpreting</h3>
      <ul>
        <li>Texas BEI Master, certified by the Texas Department of Health and Human Services</li>
        <li>Oklahoma QA 5, certified by the Oklahoma Department of Rehab Services</li>
      </ul>

      <h3>Technical Certifications</h3>
      <div className="badges">
        <img src={comptia} alt="CompTIA IT Fundamentals+ (ITF+) Certification" />
        <img src={awsccp} alt="AWS Certified Cloud Practitioner" />
      </div>
    </div>
  );
};

export default EducationSection;
