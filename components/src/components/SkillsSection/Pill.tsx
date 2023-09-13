interface PillProps {
    skill: string;
  }
  
  const Pill: React.FC<PillProps> = ({ skill }) => {
    return (
      <div className="pill">
        {skill}
      </div>
    );
  };

    export default Pill;