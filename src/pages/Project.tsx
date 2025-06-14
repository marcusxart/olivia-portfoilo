import { Navigate, useParams } from "react-router-dom";
import { projects } from "../constants/data";
import MaxContainer from "../components/MaxContainer";
import moment from "moment";
import PageMotion from "../components/PageMotion";

const Project = () => {
  // Extract the project_id param from the URL
  const params = useParams<{ project_id: string }>();

  // Find the matching project from the projects array using the project_id
  const project = projects.find((project) => project.id === params.project_id);

  // If no project is found, redirect back to home page
  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <PageMotion>
      {/* Hero header with background image and overlay */}
      <header className="bg-white h-[100vh] relative text-white">
        <img
          src={project.hero}
          alt=""
          className="w-full h-full inset-0 absolute  object-cover"
        />
        {/* Semi-transparent black overlay */}
        <div className="bg-[rgba(0,_0,_0,_0.3)] z-[2] inset-0 absolute"></div>

        {/* Project title and tag centered in the header */}
        <div className="z-[3] top-1/2 left-1/2 w-full -translate-1/2 absolute text-center ">
          <MaxContainer>
            <h1 className="font-black text-[44px] leading-[44px] lg:leading-20 lg:text-7xl mb-2 lg:mb-4">
              {project.name}
            </h1>
            <span className="text-base capitalize font-semibold">
              {project.tag}
            </span>
          </MaxContainer>
        </div>
      </header>

      {/* Main project details section */}
      <section className="lg:py-[80px] py-[40px]">
        <MaxContainer>
          <div className="w-full flex flex-col gap-8 lg:gap-14">
            {/* Subtitle, description, and formatted date */}
            <div>
              <h2 className="text-2xl lg:text-4xl font-bold leading-[1.1]">
                {project.subtitle}
              </h2>
              <p className="text-base leading-[24px] lg:text-[18px] lg:leading-8 lg:mt-6 mt-3">
                {project.description}
              </p>
              <p className="capitalize text-[14px] lg:text-base font-medium mt-2 lg:mt-4">
                {moment(project.date).format("MMMM DD, YYYY")}
              </p>
            </div>

            {/* Render project sections if available */}
            {project?.sections && (
              <ul className="flex flex-col gap-4 lg:gap-8">
                {project.sections?.map((section, index) => (
                  <li key={index} className="mb-6">
                    {/* Show section image or text depending on data */}
                    {section?.image ? (
                      <img
                        className="w-full h-[300px] lg:h-[500px] object-cover"
                        src={section.image}
                        alt={`${project.name} section image ${index + 1}`}
                      ></img>
                    ) : (
                      <p className="text-xl leading-[32px] lg:text-2xl font-medium lg:leading-[40px]">
                        {section?.text}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {/* Render photo gallery if photoGroup exists */}
            {project?.photoGroup && (
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 ">
                {project.photoGroup.map((photo, index) => (
                  <li key={index}>
                    <img
                      className="w-full h-[260px] lg:h-[400px] object-cover"
                      src={photo}
                      alt={`${project.name} photo group image ${index + 1}`}
                    ></img>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </MaxContainer>
      </section>
    </PageMotion>
  );
};

export default Project;
