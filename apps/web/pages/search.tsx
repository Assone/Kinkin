import CardStory from "@/components/card-story";
import NavList, { NavListItem } from "@/components/nav-list";
import Tabs, { TabItem } from "@/components/tabs";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { fetchSearchTabs, fetchSearchNavList } from "@kinkin/web-service";

export const getStaticProps: GetStaticProps = async () => {
  const tabs = fetchSearchTabs();
  const navList = fetchSearchNavList();

  return {
    props: {
      tabs,
      navList,
    },
  };
};

const Search: React.FC<{ tabs: TabItem[]; navList: NavListItem[] }> = ({
  tabs,
  navList,
}) => {
  const route = useRouter();
  const { keyword } = route.query;

  return (
    <>
      <div className="flex justify-between px-2 py-4">
        <div className="text-3xl font-bold">Search results for {keyword}</div>
        <Tabs list={tabs} />
      </div>
      <div className="grid grid-cols-[240px_1fr] gap-4">
        <NavList highlight list={navList} />
        <div className="flex flex-col gap-2 w-full">
          {[1, 2, 3, 4, 5].map((i) => (
            <CardStory key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
