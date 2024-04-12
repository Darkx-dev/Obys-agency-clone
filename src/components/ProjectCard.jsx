import PropTypes from 'prop-types';


function ProjectCard(
  { projectImage, projectTitle, projectDescription, projectDate }
) {
  return (
    <div data-scroll data-scroll-speed="1" className="project-card">
      <h2 className="text-[2.8rem] text-nowrap">{projectTitle}</h2>
      <div className="project-image-container">
        <img src={projectImage} alt="Some Image" />
      </div>
      <div className="project-des-date-container grid grid-cols-2 leading-tight text-[1rem] py-10 border-b-2 font-[400]">
        <p className="">{projectDescription}</p>
        <p className="justify-self-end">{projectDate}</p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
    projectImage: PropTypes.string.isRequired,
    projectTitle: PropTypes.string.isRequired,
    projectDescription: PropTypes.string.isRequired,
    projectDate: PropTypes.string.isRequired,
  };

export default ProjectCard;
