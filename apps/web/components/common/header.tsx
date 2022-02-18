interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return <header {...{ className }}>{children}</header>;
};

export default Header;
