import Card from "./card";
import Button from "./common/button";

const CardStory: React.FC = () => {
  return (
    <Card className="flex flex-col gap-4 p-4 border">
      <div className="grid grid-cols-[2.5rem_1fr] gap-4">
        <img
          className="w-10 h-10 border rounded-full"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div>
          <div className="text-base">Name</div>
          <div className="text-xs">Feb 16, 21</div>
        </div>
      </div>
      <div className="grid grid-cols-[2.5rem_1fr] gap-4">
        <div />
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-4xl">Top 5 Best Javascript Icons Libraries 🚀</p>
          <div>
            {[1, 2, 3, 4, 5].map((i) => (
              <span className="mr-4" key={i}>
                #aaaa
              </span>
            ))}
          </div>
          <div className="flex justify-between w-full">
            <div className="flex gap-8 text-sm">
              <div>♥ 42 reactions</div>
              <div>🥧add comment</div>
            </div>
            <div className="flex gap-2 items-center text-xs">
              7 min read
              <Button
                color="#000"
                hoverColor="#090909"
                background="#d6d6d7"
                hoverBackground="#bdbdbd"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardStory;
