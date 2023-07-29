import { NEW_SKILLS, SKILLS } from "../../services/skills"
import SkillCard from "./SkillCard"
import './skills.css';

function Skills() {
  return (
    <div className="skills-container is-flex flex-column gap-32">
      <div className="is-flex flex-column gap-16">
        <div className="text-primary text-size-h4 fullwidth text-align-center">Major Skills</div>
        <div className="fullwidth justify-content-center is-flex flex-wrap gap-32">
          {
            SKILLS.map(skill => 
            <SkillCard key={skill.key} asset={skill.asset} title={skill.title}/>)
          }
        </div>
      </div>
      <div className="is-flex flex-column gap-16">
      <div className="text-primary text-size-h4 fullwidth text-align-center">Other Skills</div>
        <div className="fullwidth justify-content-center is-flex flex-wrap gap-32">
          {
            NEW_SKILLS.map(skill => 
            <SkillCard key={skill.key} asset={skill.asset} title={skill.title} />)
          }
        </div>
      </div>
    </div>
  )
}

Skills.propTypes = {}

export default Skills
