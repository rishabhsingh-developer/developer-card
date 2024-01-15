import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img src="Kunal_Kushwaha.jpg" alt="" />;
}
function Intro() {
  return (
    <div className="intro">
      <h1>Kunal Khuswaha</h1>
      <p>
        He is the founder of WeMakeDevs and also started the official Cloud
        Native Student Community group joined by thousands of folks, focussed on
        getting more young people involved in the ecosystem
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skilllist">
      {skills.map((s) => {
        return <SubSkill skill={s.skill} color={s.color} level={s.level} />;
      })}
      {/* <SubSkill info="React js" color="red" />
      <SubSkill info="Javascript" color="yellow" />
      <SubSkill info="java" color="blue" />
      <SubSkill info="web development" color="green" />
      <SubSkill info="machine learning" color="pink" />
      <SubSkill info="java" color="blue" /> */}
    </div>
  );
}
function SubSkill({ skill, color, level }) {
  return (
    <div id="p" style={{ backgroundColor: color }}>
      {skill}
      {level === "advanced" ? "😊" : level === "intermediate" ? "🎄" : "❤️"}
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
