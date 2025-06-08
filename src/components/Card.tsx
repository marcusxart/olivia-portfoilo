import { forwardRef } from "react";
import { Link, type LinkProps } from "react-router-dom";

/**
 * Props for the `Card` component.
 * Extends React Router's LinkProps to support navigation.
 */
export interface CardProps extends LinkProps {
  /** URL of the image to display in the card */
  image: string;
  /** Title text displayed on the card */
  title: string;
  /** Tag or category label for the card */
  tag: string;
}

/**
 * `Card` is a styled navigational component that renders an image
 * with overlaid title and tag text. It uses `react-router-dom`'s `Link` under the hood.
 *
 * @param {CardProps} props - Props including `image`, `title`, `tag`, and all valid `Link` props
 * @param {React.Ref<HTMLAnchorElement>} ref - Forwarded ref to the underlying anchor element
 * @returns {JSX.Element}
 */
const Card = forwardRef<HTMLAnchorElement, CardProps>(
  ({ image, title, tag, className, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        className={`w-full h-full relative block ${className ?? ""}`}
        {...props}
      >
        <img
          src={image}
          alt={`${title} image`}
          className="w-full h-full object-cover object-top rounded-xl"
        />
        <div className="absolute inset-0 shadow-[inset_0px_33px_50px_-5px_rgba(0,_0,_0,_0.5)] z-[2] pointer-events-none" />
        <div className="absolute z-[3] top-5 left-6 text-white">
          <span className="text-[12px] lg:text-base capitalize leading-3 lg:leading-7">
            {tag}
          </span>
          <h2 className="text-xl lg:text-2xl font-bold leading-6 lg:leading-9">
            {title}
          </h2>
        </div>
      </Link>
    );
  }
);

Card.displayName = "Card";

export default Card;
