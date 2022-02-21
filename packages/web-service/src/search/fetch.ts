export const fetchSearchTabs = () => {
    const tabs = [
        { name: "Most Recent" },
        { name: "Newest" },
        { name: "Oldest" },
    ]

    return tabs
}
export const fetchSearchNavList = () => {
    const list = [
        { name: "Posts" },
        { name: "Podcasts" },
        { name: "People" },
        { name: "Tags" },
        { name: "Comments" },
        { name: "My posts only" },
    ]

    return list
}