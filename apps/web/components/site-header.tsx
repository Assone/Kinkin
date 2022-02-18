import Image from "next/image";
import { useRouter } from "next/router";
import Button from "./common/button";
import Header from "./common/header";
import Search from "./search";

const SiteHeader: React.FC = () => {
  const router = useRouter();

  return (
    <Header className="sticky top-0 border-b backdrop-blur bg-white/75">
      <nav className="flex justify-between w-11/12 py-2 m-auto">
        <div className="flex items-center gap-4">
          <Image
            className="cursor-pointer"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="logo"
            width={50}
            height={40}
            onClick={() => router.push("/")}
          />
          <Search />
        </div>
        <div className="flex items-center gap-4">
          <Button to={["/"]}>Log in</Button>
          <Button
            border
            hoverColor="#fff"
            hoverBackground="rgb(59, 73, 223)"
            to={["/search"]}
          >
            Create Account
          </Button>
        </div>
      </nav>
    </Header>
  );
};

export default SiteHeader;
