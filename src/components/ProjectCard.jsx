import PropTypes from "prop-types";

function ProjectCard({
  projectImage,
  projectTitle,
  projectDescription,
  projectDate,
  ytranslate,
}) {
  return (
    {
      projectImage,
      projectTitle,
      projectDescription,
      projectDate,
      ytranslate,
    } && (
      <div className={`project-card translate-y-${ytranslate} `}>
        <h2 data-scroll className="text-[2.8rem] text-nowrap">
          {projectTitle}
        </h2>
        <div className="project-image-container">
          <img src={projectImage} alt="Some Image" />
        </div>
        <div
          data-scroll
          className="project-des-date-container grid grid-cols-2 leading-tight text-[1rem] py-10 border-b-2 font-[400]"
        >
          <p className="">{projectDescription}</p>
          <p className="justify-self-end">{projectDate}</p>
        </div>
      </div>
    )
  );
}

ProjectCard.propTypes = {
  projectImage: PropTypes.string,
  projectTitle: PropTypes.string,
  projectDescription: PropTypes.string,
  projectDate: PropTypes.number,
  ytranslate: PropTypes.number,
};

export default ProjectCard;
