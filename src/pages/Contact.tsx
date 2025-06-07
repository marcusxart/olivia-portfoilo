import { Link } from "react-router-dom";
import Button from "../components/Button";
import MaxContainer from "../components/MaxContainer";
import PageMotion from "../components/PageMotion";
import TextField from "../components/TextField";
import { bio } from "../constants/data";

const Contact = () => {
  return (
    <PageMotion>
      <div className="w-full flex flex-col gap-[40px] lg:gap-[64px]">
        <div className="w-full bg-white">
          <MaxContainer>
            <div className="h-[65vh] lg:min-h-[85vh] flex flex-col justify-center pt-[60px] text-black ">
              <span className="text-base lg:text-[20px]">Get In Touch</span>
              <div className="text-[32px] lg:text-[72px] leading-[1.1] font-black  lg:mt-7 mt-3">
                <h1>Like what you see?</h1>
                <p className="opacity-60">
                  Have a project you’d like to talk about? Want to ask us a
                  personal question?
                </p>
              </div>
            </div>
          </MaxContainer>
        </div>
        <div className="w-full pb-[64px]">
          <MaxContainer>
            <div className="flex flex-col lg:flex-row w-full items-center gap-[64px]">
              <form
                action=""
                className="flex w-full lg:w-[60%] flex-col gap-7 lg:gap-9"
              >
                <TextField placeholder="Your name" />
                <TextField placeholder="Your email" type="email" />
                <TextField placeholder="Your company" />
                <TextField placeholder="Your name" type="textarea" />
                <Button text="Send" />
              </form>
              <ul className="w=full lg:w-[40%] [&_span]:text-[16px] text-[18px] [&_span]:font-normal font-semibold [&_span]:inline-block [&_span]:mb-[12px] flex flex-col  gap-[28px] lg:gap-[40px] ">
                <li>
                  <span>Say hello</span>
                  <p>{bio.email}</p>
                </li>
                <li>
                  <span>Address</span>
                  <div>
                    <p>{bio.address}</p>
                    <p>Tel. {bio.phone}</p>
                  </div>
                </li>
                <li>
                  <span>Made by</span>{" "}
                  <p>
                    <Link
                      to={bio.createdBy.url}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline font-semibold hover:opacity-70 transition-all duration-300"
                    >
                      {bio.createdBy.name}
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
          </MaxContainer>
        </div>
      </div>
    </PageMotion>
  );
};

export default Contact;
