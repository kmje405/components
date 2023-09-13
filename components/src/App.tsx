import WelcomeSection from './components/WelcomeSection/WelcomeSection'
import SkillsSection from './components/SkillsSection/SkillsSection'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'
import EducationSection from './components/EducationSection/EducationSection'
import ProjectsSection from './components/ProjectSection/ProjectSection'
import "./reset.scss"
import "./styles/App.scss"


function App() {

  return (
    <>
      <WelcomeSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
    </>
  )
}

export default App
