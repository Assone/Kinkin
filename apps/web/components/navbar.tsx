import Link from "next/link";

export const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between px-4 py-1 bg-white">
      <div className="flex items-center gap-2">
        <img className="w-16" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <input></input>
      </div>
      <div className="flex items-center gap-2">
        <button>Log in</button>
        <button>Create Account</button>
      </div>
    </nav>
  );
};
