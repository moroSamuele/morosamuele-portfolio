import PatternRings from './PatternRings';

import SkillsDev from '../data/skills.json'


const Skill = ({
  name,
  startYear
} : {
  name: string;
  startYear: number;
}) => {
  const date = new Date()
  const yearsExperience = date.getFullYear() - startYear
  
  return (
    <div className="skillsContent__skill">
      <h3>{name}</h3>
      <p>{yearsExperience} year{ yearsExperience>1 ? "s" : null } experience</p>
    </div>
  )
}

const Skills = () => {
  const skills = SkillsDev.skill

  return (
    <section className="body__skillsContent">
      {
        skills.map((skill, index) => {
          return (
            <Skill
              key={index}
              name={skill.name}
              startYear={skill.startYear}
            />
          )
        })
      }
      <PatternRings />
    </section>
  )
}

export default Skills;