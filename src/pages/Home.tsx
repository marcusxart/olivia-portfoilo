import ArrowButton from "../components/ArrowButton";
import MaxContainer from "../components/MaxContainer";
import Masonry from "react-masonry-css";
import { projects } from "../constants/data";
import Tilt from "react-parallax-tilt";
import "./home.css";
import Card from "../components/Card";
import classNames from "classnames";
import { Element } from "react-scroll";
import PageMotion from "../components/PageMotion";

const Home = () => {
  // Define responsive breakpoints for Masonry layout columns
  const breakpointColumnsObj = {
    default: 2, // 2 columns by default
    768: 1, // 1 column on viewport widths <= 768px
  };

  return (
    <PageMotion>
      {/* Hero section with background image and main headline */}
      <header className="bg-home-hero bg-no-repeat bg-cover h-screen w-full flex items-center">
        <MaxContainer>
          <div className="w-full text-white ">
            {/* Main heading */}
            <h1 className="text-[40px] sm:text-[80px] leading-[48px] sm:leading-[90px] lg:text-[130px] lg:leading-[120px] font-black">
              Don’t make <br />
              Them think.
            </h1>
            {/* Subtitle */}
            <p className="opacity-60 text-base leading-[20px] sm:text-xl sm:leading-[28px] lg:text-2xl font-semibold lg:leading-[34px] mt-2 lg:mt-6 mb-3">
              Mosby is a great team that loves teamwork.
              <br />
              We are making brandings|
            </p>
            {/* Button that scrolls down to "project" section with offset */}
            <ArrowButton to="project" offset={-20} hideBg />
          </div>
        </MaxContainer>
      </header>

      {/* Main content container */}
      <MaxContainer>
        <div className="mt-[-80px] relative z-[2] pb-[40px] lg:pb-[80px]">
          {/* Named scroll target "project" for smooth scroll */}
          <Element name="project" className="w-full pr-[24px]">
            {/* Masonry grid layout for projects */}
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid flex w-auto"
              columnClassName="bg-clip-padding pl-[24px] "
            >
              {/* Map over projects array to create project cards */}
              {projects?.map((project) => (
                <Tilt
                  key={project.id}
                  tiltReverse={true}
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  transitionSpeed={3000}
                  gyroscope={false}
                  className={classNames(
                    "w-full block h-[300px]  mb-[24px] lg:mb-[64px] lg:px-[32px]",
                    {
                      // Dynamic height based on project size property
                      "sm:h-[45%]": project.size === "large",
                      "sm:h-[40%]": project.size === "medium",
                    }
                  )}
                >
                  {/* Card component showing project hero image, name, tag, and linking to project page */}
                  <Card
                    image={project.hero}
                    title={project.name}
                    tag={project.tag}
                    to={`/${project.id}`}
                  />
                </Tilt>
              ))}
            </Masonry>
          </Element>
        </div>
      </MaxContainer>
    </PageMotion>
  );
};

export default Home;
