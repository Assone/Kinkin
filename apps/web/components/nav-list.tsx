import Link from "next/link";
import { useRouter } from "next/router";

export interface NavListItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

interface NavListProps {
  list: NavListItem[];
  height?: string;
  scrollable?: boolean;
  slotItem?: (item: NavListItem) => React.ReactNode;
}

const NavList: React.FC<NavListProps> = ({
  list,
  slotItem,
  height = "auto",
  scrollable,
}) => {
  const router = useRouter();

  return (
    <nav>
      <style jsx>{`
        .list {
          height: ${height};
          overflow-y: ${scrollable ? "scroll" : "hidden"};
        }
      `}</style>
      <ul className="list flex flex-col">
        {list.map((item, i) => (
          <li
            className="p-2 px-4 rounded cursor-pointer hover:bg-slate-400 hover:underline"
            key={i}
            onClick={() => router.push(item.href)}
          >
            {slotItem ? slotItem(item) : item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
