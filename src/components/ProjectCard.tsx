import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
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

        <div className="hardware-control-row">
          <HardwareRow
            setName="Hardware Set 1"
            checkedOut={project.hardwareSet1}
          />

          <TextField
            label="Quantity"
            type="number"
            size="small"
            slotProps={{
              htmlInput: {
                min: 1,
              },
            }}
          />

          <Button variant="contained">
            Check Out
          </Button>
        </div>

        <div className="hardware-control-row">
          <HardwareRow
            setName="Hardware Set 2"
            checkedOut={project.hardwareSet2}
          />

          <TextField
            label="Quantity"
            type="number"
            size="small"
            slotProps={{
              htmlInput: {
                min: 1,
              },
            }}
          />

          <Button variant="outlined">
            Check In
          </Button>
        </div>
      </div>

      <Button
        variant="contained"
        color={project.joined ? "error" : "primary"}
        onClick={() => onToggleMembership(project.id)}
      >
        {project.joined ? "Leave Project" : "Join Project"}
      </Button>
    </article>
  );
}

export default ProjectCard;