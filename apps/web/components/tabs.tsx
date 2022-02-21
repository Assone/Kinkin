import { useState } from "react";
import Button from "./common/button";

export interface TabItem {
  name: string;
  href?: string;
}

interface TabsProps {
  list: TabItem[];
  onChange?: (tab: TabItem) => void;
}

const Tabs: React.FC<TabsProps> = ({ list, onChange = () => {} }) => {
  const [active, setActive] = useState(0);

  const handleClick = (index: number) => {
    setActive(index);
    onChange(list[index]);
  };

  return (
    <div>
      {list.map(({ name, href }, i) => (
        <Button
          className={`${active === i ? "font-bold" : ""} !px-2`}
          key={name}
          to={[href]}
          color="#000"
          hoverColor="rgb(59, 73, 223)"
          hoverBackground="#fff"
          onClick={() => handleClick(i)}
        >
          {name}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;
