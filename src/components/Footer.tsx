import { Link } from "react-router-dom";
import Logo from "./Logo";
import MaxContainer from "./MaxContainer";
import { forwardRef } from "react";
import { bio } from "../constants/data";

const Footer = forwardRef<HTMLElementTagNameMap["footer"]>(
  ({ ...props }, ref) => {
    const year = new Date().getFullYear();
    return (
      <footer
        className="py-14 bg-[#232323] w-full text-white"
        ref={ref}
        {...props}
      >
        <MaxContainer>
          <div className="w-full flex flex-col lg:flex-row lg:text-xl leading-[20px] lg:leading-8 font-extrabold gap-[16px]">
            <div className="flex-1 text-center lg:text-left">
              <Logo />
              <p className="mt-3">
                {" "}
                {year} Olivia. All rights reserved.
                <br />
                Made by{" "}
                <Link
                  to={bio.createdBy.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline font-semibold text-white hover:opacity-70 transition-all duration-300"
                >
                  {bio.createdBy.name}
                </Link>
              </p>
            </div>
            <div className="flex-1 text-center lg:text-right">
              <p>{bio.address}</p>
              <p className="mt-3">
                {bio.phone}
                <br />
                {bio.email}
              </p>
            </div>
          </div>
        </MaxContainer>
      </footer>
    );
  }
);

Footer.displayName = "Footer";

export default Footer;
