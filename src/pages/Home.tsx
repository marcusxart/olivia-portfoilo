import ArrowButton from "../components/ArrowButton";
import MaxContainer from "../components/MaxContainer";
import Masonry from "react-masonry-css";
import { projects } from "../constants/data";
import Tilt from "react-parallax-tilt";
import "./home.css";
import Card from "../components/Card";
import classNames from "classnames";
import { Element } from "react-scroll";

const Home = () => {
  const breakpointColumnsObj = {
    default: 2,
    640: 1,
  };

  return (
    <div>
      <header className="bg-home-hero bg-no-repeat bg-cover h-screen w-full flex items-center">
        <MaxContainer>
          <div className="w-full text-white ">
            <h1 className="text-[130px] leading-[120px] font-black">
              Don’t make <br />
              Them think.
            </h1>
            <p className="opacity-60 text-2xl font-semibold leading-[34px] mt-6 mb-3">
              Mosby is a great team that loves teamwork.
              <br />
              We are making brandings|
            </p>
            <ArrowButton to="project" offset={-20} />
          </div>
        </MaxContainer>
      </header>
      <MaxContainer>
        <div className="mt-[-80px] relative z-[2] pb-[80px]">
          <Element name="project" className="w-full">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid flex ml-[24px] sm:ml-[-64px] w-auto"
              columnClassName="bg-clip-padding pl-[24px] "
            >
              {projects?.map((project) => (
                <Tilt
                  key={project.id}
                  tiltReverse={true}
                  tiltMaxAngleX={8} // Reduce X tilt angle (default is 20)
                  tiltMaxAngleY={8} // Reduce Y tilt angle (default is 20)
                  transitionSpeed={3000} // Increase transition duration (ms)
                  gyroscope={false}
                  className={classNames(
                    "w-full block h-[350px] mb-[24px] sm:mb-[64px] sm:px-[32px]",
                    {
                      "sm:h-[45%]": project.size === "large",
                      "sm:h-[40%]": project.size === "medium",
                    }
                  )}
                >
                  <Card
                    image={project.hero}
                    title={project.name}
                    tag={project.tag}
                    to={project.id}
                  />
                </Tilt>
              ))}
            </Masonry>
          </Element>
        </div>
      </MaxContainer>
    </div>
  );
};

export default Home;
