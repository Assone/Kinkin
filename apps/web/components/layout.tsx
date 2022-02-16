import { NavBar } from "./navbar";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <header className="sticky">
        <NavBar />
      </header>
      <main className="bg-[rgb(245,245,245)]">{children}</main>
    </>
  );
};
