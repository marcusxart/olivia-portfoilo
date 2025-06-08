import { Link } from "react-router-dom";
import Button from "../components/Button";
import MaxContainer from "../components/MaxContainer";
import PageMotion from "../components/PageMotion";
import TextField from "../components/TextField";
import { bio } from "../constants/data";
import { useState } from "react";

const Contact = () => {
  // State to hold form values for name, email, company, and project details
  const [value, setValue] = useState({
    name: "",
    email: "",
    company: "",
    projectDetail: "",
  });

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior

    const { name, email, company, projectDetail } = value;

    // Prepare subject and body for mailto link using form data
    const subject = `New project inquiry from ${name || "a potential client"}`;
    const body = `
  Name: ${name}
  Email: ${email}
  Company: ${company}
  
  Project Details:
  ${projectDetail}
    `.trim();

    // Create mailto link with encoded subject and body
    const mailto = `mailto:your@email.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Redirect browser to mailto link to open user's email client
    window.location.href = mailto;
  };

  return (
    <PageMotion>
      <div className="w-full flex flex-col gap-[40px] lg:gap-[64px]">
        {/* Top section with introductory text */}
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

        {/* Form and contact info section */}
        <div className="w-full pb-[64px]">
          <MaxContainer>
            <div className="flex flex-col lg:flex-row w-full items-center gap-[64px]">
              {/* Contact form */}
              <form
                onSubmit={handleSubmit}
                className="flex w-full lg:w-[60%] flex-col gap-7 lg:gap-9"
              >
                {/* Text inputs bound to state */}
                <TextField
                  placeholder="Your name"
                  required
                  value={value.name}
                  onChange={(e) => {
                    setValue({ ...value, name: e.target.value });
                  }}
                />
                <TextField
                  placeholder="Your email"
                  type="email"
                  required
                  value={value.email}
                  onChange={(e) => {
                    setValue({ ...value, email: e.target.value });
                  }}
                />
                <TextField
                  placeholder="Your company"
                  required
                  value={value.company}
                  onChange={(e) => {
                    setValue({ ...value, company: e.target.value });
                  }}
                />
                <TextField
                  placeholder="Tell us about your project"
                  type="textarea"
                  required
                  value={value.projectDetail}
                  onChange={(e) => {
                    setValue({ ...value, projectDetail: e.target.value });
                  }}
                />
                {/* Submit button */}
                <Button>Send</Button>
              </form>

              {/* Contact info and credits */}
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
