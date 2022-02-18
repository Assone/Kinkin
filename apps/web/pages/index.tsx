import ArticleList from "@/components/article-list";
import Card from "@/components/card";
import CardStory from "@/components/card-story";
import Button from "@/components/common/button";
import NavList, { NavListItem } from "@/components/nav-list";
import Tabs, { TabItem } from "@/components/tabs";
import Link from "next/link";
import { useState } from "react";

export default function Web() {
  const tabs: TabItem[] = [
    { name: "Relevant" },
    { name: "Popular" },
    { name: "Top" },
  ];
  const dateFilterTabs: TabItem[] = [
    { name: "Week" },
    { name: "Month" },
    { name: "Year" },
    { name: "Infinity" },
  ];
  const navList: NavListItem[] = [
    { name: "Home", href: "/" },
    { name: "Tags", href: "/tags" },
    { name: "Videos", href: "/videos" },
    { name: "Podcasts", href: "/podcasts" },
    { name: "Listings", href: "/listings" },
  ];
  const popularTags: NavListItem[] = [
    { name: "#React", href: "/tags/react" },
    { name: "#Vue", href: "/tags/vue" },
    { name: "#NextJS", href: "/tags/nextjs" },
    { name: "#NodeJS", href: "/tags/nodejs" },
    { name: "#JavaScript", href: "/tags/javascript" },
    { name: "#TypeScript", href: "/tags/typescript" },
    { name: "#ReactNative", href: "/tags/reactnative" },
    { name: "#GraphQL", href: "/tags/graphql" },
    { name: "#Docker", href: "/tags/docker" },
    { name: "#Kubernetes", href: "/tags/kubernetes" },
    { name: "#Git", href: "/tags/git" },
  ];
  const [isShowDateFilterTabs, setIsShowDateFilterTabs] = useState(false);

  return (
    <div className="grid grid-cols-[240px_2fr_1fr] gap-4 ">
      <div className="flex flex-col gap-4">
        <Card className="flex flex-col gap-4 p-2">
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
        <NavList list={popularTags} height="200px" scrollable />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <Tabs
            list={tabs}
            onChange={(tab) => setIsShowDateFilterTabs(tab.name === "Top")}
          />
          {isShowDateFilterTabs && <Tabs list={dateFilterTabs} />}
        </div>
        <div className="flex flex-col gap-2">
          {Array.from({ length: 20 }).map((_, i) => (
            <CardStory key={i} />
          ))}
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <Card className="flex flex-col gap-4 p-2">
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
}
