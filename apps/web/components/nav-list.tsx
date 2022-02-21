import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export interface NavListItem {
  name: string;
  href?: string;
  icon?: React.ReactNode;
}

interface NavListProps {
  list: NavListItem[];
  title?: string;
  className?: string;
  height?: string;
  scrollable?: boolean;
  highlight?: boolean;
  defaultIndex?: number;
  slotItem?: (item: NavListItem) => React.ReactNode;
  onChange?: (item: NavListItem) => void;
}

const NavList: React.FC<NavListProps> = ({
  list,

  title,
  className,
  height = "auto",
  scrollable,

  highlight = false,
  defaultIndex = 0,

  slotItem,

  onChange = () => {},
}) => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleClick = (index: number) => {
    const item = list[index];

    onChange(item);
    setActiveIndex(index);

    if (item.href) {
      router.push(item.href);
    }
  };

  return (
    <nav className={className}>
      <style jsx>{`
        .list {
          height: ${height};
          overflow-y: ${scrollable ? "scroll" : "hidden"};
        }
      `}</style>
      {title && <h2 className="py-2 font-bold">{title}</h2>}
      <ul className="list flex flex-col">
        {list.map((item, i) => (
          <li
            className={`p-2 px-4 rounded cursor-pointer hover:bg-white hover:text-blue-700 ${
              highlight && i === activeIndex ? "bg-white font-bold" : ""
            } ${highlight ? "" : "hover:underline"}`}
            key={i}
            onClick={() => handleClick(i)}
          >
            {slotItem ? slotItem(item) : item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
