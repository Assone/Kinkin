import Link from "next/link";
import { useRouter } from "next/router";

export const NavBar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="flex justify-between px-4 py-1 bg-white">
      <div className="flex items-center gap-2">
        <img
          className="w-16"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          onClick={() => router.push("/")}
        />
        <input onKeyDown={() => router.push("/search?keyword=hahah")}></input>
      </div>
      <div className="flex items-center gap-2">
        <button>Log in</button>
        <button>Create Account</button>
      </div>
    </nav>
  );
};
