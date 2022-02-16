import { NavBar } from "./navbar";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <header className="sticky">
        <NavBar />
      </header>
      <main className="p-4 bg-[rgb(245,245,245)]">{children}</main>
      <footer className="bg-gray-200 py-20">
        <div className="text-center ">
          <p>© 2020 </p>
        </div>
      </footer>
    </>
  );
};
