import { forwardRef } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import MaxContainer from "./MaxContainer";
import { bio } from "../constants/data";

/**
 * Footer is a reusable layout component displayed at the bottom of the page.
 *
 * It shows the logo, current year, creator attribution, contact information, and address.
 *
 * ## Features
 * - Uses `forwardRef` for DOM access to the `<footer>` element
 * - Automatically updates to the current year
 * - Pulls data from a shared `bio` config object
 * - Responsive layout using Tailwind CSS
 *
 * @param props - Standard HTML props for a footer element
 */
const Footer = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ ...props }, ref) => {
    const year = new Date().getFullYear();

    return (
      <footer
        ref={ref}
        {...props}
        className="py-9 lg:py-14 bg-[#232323] w-full text-white"
      >
        <MaxContainer>
          <div className="w-full flex flex-col lg:flex-row lg:text-xl leading-[20px] lg:leading-8 font-extrabold gap-[16px]">
            <div className="flex-1 text-center lg:text-left">
              <Logo />
              <p className="mt-3">
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
