import { TabItem } from "../../../apps/web/components/tabs";
import { NavListItem } from "../../../apps/web/components/nav-list";
import { useState } from "react";

export const fetchHomeData = () => {
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

  return {
    tabs,
    dateFilterTabs,
    navList,
    popularTags,
  };
};

export const useHome = () => {
  const [isShowDateFilterTabs, setIsShowDateFilterTabs] = useState(false);

  const handleTabsChange = (tab: TabItem) => {
    setIsShowDateFilterTabs(tab.name === "Top");
  };

  return {
    isShowDateFilterTabs,
    handleTabsChange,
  };
};
