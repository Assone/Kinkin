import { NextRouter, useRouter } from "next/router";

interface ButtonProps {
  className?: string;
  color?: string;
  hoverColor?: string;
  background?: string;
  hoverBackground?: string;

  disabled?: boolean;
  border?: boolean;
  rounded?: boolean;

  to?: FunctionParamsType<NextRouter["push"]>;
  replace?: boolean;

  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,

  disabled,
  border,
  rounded = true,

  to = [],
  replace,

  className,
  color = "rgb(47, 58, 178)",
  hoverColor,
  background,
  hoverBackground = "rgba(59, 73, 223, 0.1)",

  onClick = () => {},
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick();
    const options = to.filter(Boolean) as FunctionParamsType<
      NextRouter["push"]
    >;

    if (options.length) {
      router[replace ? "replace" : "push"](...options);
    }
  };

  return (
    <>
      <style jsx>{`
        .button {
          color: ${color};
          background: ${background};
          ${border ? `border: 1px solid ${color};` : ""}
          ${rounded ? "border-radius: 4px;" : ""}
          padding: 8px 16px;
        }

        .button:hover {
          color: ${hoverColor};
          background: ${hoverBackground};
        }
      `}</style>
      <button
        className={`button ${className}`}
        {...{ disabled }}
        onClick={handleClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
