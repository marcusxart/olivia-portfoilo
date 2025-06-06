import { Link } from "react-router-dom";
import Logo from "./Logo";
import MaxContainer from "./MaxContainer";
import { forwardRef } from "react";

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
          <div className="w-full flex text-xl leading-8 font-extrabold">
            <div className="flex-1">
              <Logo />
              <p className="mt-3">
                {" "}
                {year} Olivia. All rights reserved.
                <br />
                Made by{" "}
                <Link
                  to="https://github.com/marcusxart/olivia-portfoilo"
                  target="_blank"
                  className="underline font-semibold text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Marcusxart
                </Link>
              </p>
            </div>
            <div className="flex-1 text-right">
              <p>1788 Morningview Lane, 10013 New York</p>
              <p className="mt-3">
                +33(0)3 20 88 11 59
                <br />
                contact@olivia.com
              </p>
            </div>
          </div>
        </MaxContainer>
      </footer>
    );
  }
);

export default Footer;
