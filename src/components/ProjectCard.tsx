import HardwareRow from "./HardwareRow";

export type Project = {
  id: number;
  name: string;
  description: string;
  hardwareSet1: number;
  hardwareSet2: number;
  joined: boolean;
};

type ProjectCardProps = {
  project: Project;
  onToggleMembership: (projectId: number) => void;
};

function ProjectCard({
  project,
  onToggleMembership,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-heading">
        <div>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>

        <span
          className={
            project.joined
              ? "membership-status joined"
              : "membership-status available"
          }
        >
          {project.joined ? "Joined" : "Available"}
        </span>
      </div>

      <div className="hardware-section">
        <h3>Hardware Checkouts</h3>

        <HardwareRow
          setName="Hardware Set 1"
          checkedOut={project.hardwareSet1}
        />

        <HardwareRow
          setName="Hardware Set 2"
          checkedOut={project.hardwareSet2}
        />
      </div>

      <button
        className={project.joined ? "leave-button" : "join-button"}
        onClick={() => onToggleMembership(project.id)}
      >
        {project.joined ? "Leave Project" : "Join Project"}
      </button>
    </article>
  );
}

export default ProjectCard;