import { Navigate, useParams } from "react-router-dom";
import { projects } from "../constants/data";
import MaxContainer from "../components/MaxContainer";
import moment from "moment";
import PageMotion from "../components/PageMotion";

const Project = () => {
  const params = useParams<{ project_id: string }>();
  const project = projects.find((project) => project.id === params.project_id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <PageMotion>
      <header className="bg-white h-[100vh] relative text-white">
        <img
          src={project.hero}
          alt=""
          className="w-full h-full inset-0 absolute  object-cover"
        />
        <div className="bg-[rgba(0,_0,_0,_0.3)] z-[2] inset-0 absolute"></div>
        <div className="z-[3] top-1/2 left-1/2 w-full -translate-1/2 absolute text-center ">
          <MaxContainer>
            <h1 className="font-black text-7xl mb-4">{project.name}</h1>
            <span className="text-base capitalize font-semibold">
              {project.tag}
            </span>
          </MaxContainer>
        </div>
      </header>
      <section className="py-[80px]">
        <MaxContainer>
          <div className="w-full flex flex-col gap-14">
            <div>
              <h2 className="text-4xl font-bold leading-[1.1]">
                {project.subtitle}
              </h2>
              <p className="text-[18px] leading-8 mt-6">
                {project.description}
              </p>
              <p className="capitalize text-base font-medium mt-4">
                {moment(project.date).format("MMMM DD, YYYY")}
              </p>
            </div>
            {project?.sections && (
              <ul className="flex flex-col gap-8">
                {project.sections?.map((section, index) => (
                  <li key={index} className="mb-6">
                    {section?.image ? (
                      <img
                        className="w-full h-[500px] object-cover"
                        src={section.image}
                        alt={`${project.name} section image ${index + 1}`}
                      ></img>
                    ) : (
                      <p className="text-2xl font-medium leading-[40px]">
                        {section?.text}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            )}
            {project?.photoGroup && (
              <ul className="grid grid-cols-2 gap-6 ">
                {project.photoGroup.map((photo, index) => (
                  <li key={index}>
                    <img
                      className="w-full h-[400px] object-cover"
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
