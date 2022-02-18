import CardStory from "@/components/card-story";
import { useRouter } from "next/router";

const Search: React.FC = () => {
  const route = useRouter();
  const { keyword } = route.query;

  return (
    <>
      <div className="flex justify-between px-2 py-4">
        <div>Search results for {keyword}</div>
        <div className="flex gap-8">
          <button>Most Relevant</button>
          <button>Newest</button>
          <button>Oldest</button>
        </div>
      </div>
      <div className="flex gap-4">
        <ul>
          <li>Posts</li>
          <li>Posts</li>
          <li>Posts</li>
          <li>Posts</li>
          <li>Posts</li>
        </ul>
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
