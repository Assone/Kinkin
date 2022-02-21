import CardStory from "@/components/card-story";
import Button from "@/components/common/button";
import { useRouter } from "next/router";

const TagDetail: React.FC = () => {
  const router = useRouter();
  const { tag } = router.query;

  return (
    <div className="flex flex-col gap-4">
      <header className="overflow-hidden border rounded-lg bg-white">
        <div className="h-3 bg-red-600" />
        <div className="flex justify-between items-center p-6">
          <h1 className="text-2xl font-bold">{tag}</h1>
          <Button>Follow</Button>
        </div>
      </header>
      <div>
        <div></div>
        <div className="flex flex-col gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <CardStory key={i} />
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TagDetail;
