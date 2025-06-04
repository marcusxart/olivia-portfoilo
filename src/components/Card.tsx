import { forwardRef } from "react";
import { Link, type LinkProps } from "react-router-dom";

interface CardProps extends LinkProps {
  image: string;
  title: string;
  tag: string;
}

const Card = forwardRef<HTMLElementTagNameMap["a"], CardProps>(
  ({ image, title, tag, ..._props }, ref) => {
    return (
      <Link ref={ref} className="w-full h-full relative  block " {..._props}>
        <img
          src={image}
          alt={`${title} image`}
          className="w-full h-full object-cover object-top rounded-xl"
        />
        <div className="absolute inset-0 shadow-[inset_0px_33px_50px_-5px_rgba(0,_0,_0,_0.5)] z-[2] pointer-events-none" />
        <div className="absolute z-[3] top-5 left-6 text-white">
          <span className="text-base capitalize leading-7">{tag}</span>
          <h2 className="text-2xl font-bold leading-9">{title}</h2>
        </div>
      </Link>
    );
  }
);

Card.displayName = "Card";

export default Card;
