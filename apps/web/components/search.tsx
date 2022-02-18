import { useRouter } from "next/router";
import { useRef } from "react";

const Search: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const keyword = e.currentTarget.elements["keyword"].value;

    router.push({
      pathname: "/search",
      query: { keyword },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-2 border rounded-md">
        <input
          className="appearance-none outline-0"
          type="text"
          name="keyword"
          placeholder="Search..."
        />
        <button type="submit">?</button>
      </div>
    </form>
  );
};

export default Search;
