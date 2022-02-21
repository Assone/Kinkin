import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <SiteHeader />
      <main className="bg-[rgb(245,245,245)] py-4">
        <div className="w-[98vw] lg:max-w-7xl m-auto">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
};
