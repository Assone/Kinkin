interface CardProps {
  className?: string;
  background?: string;
  rounded?: boolean;
  roundSize?: string;
  border?: boolean;
  borderColor?: string;
}

const Card: React.FC<CardProps> = ({
  className,
  background = "#FFF",
  rounded = true,
  roundSize = "4px",
  border = true,
  borderColor = "#E6E6E6",

  children,
}) => {
  return (
    <>
      <style jsx>{`
        .card {
          border: ${border ? `1px solid ${borderColor}` : "none"};
          border-radius: ${rounded ? roundSize : "0px"};
          background: ${background};
        }
      `}</style>
      <article className={`card ${className}`}>{children}</article>
    </>
  );
};

export default Card;
