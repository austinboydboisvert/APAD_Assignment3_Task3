import { useState } from "react";
import ProjectCard, { type Project } from "./components/ProjectCard";
import "./App.css";

const startingProjects: Project[] = [
  {
    id: 1,
    name: "Autonomous Vehicle Project",
    description:
      "A project focused on building and testing an autonomous vehicle system.",
    hardwareSet1: 2,
    hardwareSet2: 1,
    joined: true,
  },
  {
    id: 2,
    name: "Smart Home Project",
    description:
      "A connected-device project for monitoring and controlling a smart home.",
    hardwareSet1: 1,
    hardwareSet2: 0,
    joined: false,
  },
  {
    id: 3,
    name: "Robotics Research Project",
    description:
      "A robotics project involving sensors, controls, and hardware testing.",
    hardwareSet1: 3,
    hardwareSet2: 2,
    joined: false,
  },
];

function App() {
  const [projects, setProjects] = useState<Project[]>(startingProjects);

  function toggleMembership(projectId: number) {
    setProjects((currentProjects) =>
      currentProjects.map((project) =>
        project.id === projectId
          ? { ...project, joined: !project.joined }
          : project
      )
    );
  }

  return (
    <main className="projects-page">
      <header className="page-header">
        <h1>Projects</h1>

        <p>
          View available projects, review hardware checkouts, and manage your
          project memberships.
        </p>
      </header>

      <section className="project-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onToggleMembership={toggleMembership}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
