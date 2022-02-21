import ArticleList from "@/components/article-list";
import Card from "@/components/card";
import CardStory from "@/components/card-story";
import Button from "@/components/common/button";
import NavList from "@/components/nav-list";
import Tabs from "@/components/tabs";
import { fetchHomeData, useHome } from "@kinkin/web-service";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = () => {
  const data = fetchHomeData();

  return { props: data };
};

const Web: React.FC<FunctionReturnType<typeof fetchHomeData>> = ({
  dateFilterTabs,
  tabs,
  popularTags,
  navList,
}) => {
  const { isShowDateFilterTabs, handleTabsChange } = useHome();

  return (
    <div className="grid grid-cols-[240px_1fr] lg:grid-cols-[240px_2fr_1fr] gap-4 ">
      <div className="flex flex-col gap-4">
        <Card className="flex flex-col gap-2 p-2">
          <h2 className=" font-bold text-xl">
            DEV Community is a community of 800,275 amazing developers
          </h2>
          <div>
            We're a place where coders share, stay up-to-date and grow their
            careers.
          </div>
          <Button border hoverColor="#fff" hoverBackground="rgb(59, 73, 223)">
            Create account
          </Button>
          <Button>Log in</Button>
        </Card>
        <NavList list={navList} />
        <NavList
          title="Popular Tags"
          list={popularTags}
          height="200px"
          scrollable
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <Tabs list={tabs} onChange={handleTabsChange} />
          {isShowDateFilterTabs && <Tabs list={dateFilterTabs} />}
        </div>
        <div className="flex flex-col gap-2">
          {Array.from({ length: 20 }).map((_, i) => (
            <CardStory key={i} />
          ))}
        </div>
      </div>
      <div className="flex-col gap-4 hidden lg:flex">
        <ArticleList
          title="Listings"
          more={{ text: "See all", link: "/listings" }}
          articles={Array.from({ length: 10 }).map((_, i) => ({
            id: i,
            title: `Article ${i}`,
            creator: `Creator ${i}`,
          }))}
        />
        <ArticleList
          title="#help"
          articles={Array.from({ length: 5 }).map((_, i) => ({
            id: i,
            title: `title ${i}`,
            creator: `create ${i}`,
          }))}
        />
      </div>
    </div>
  );
};

export default Web;
