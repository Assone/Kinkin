import Image from "next/image";
import Card from "./card";
import Button from "./common/button";

const CardStoryControls: React.FC = () => {
  return (
    <div className="flex items-center gap-8 text-sm">
      <div>42 reactions</div>
      <div>3 comment</div>
    </div>
  );
};

const CardStory: React.FC = () => {
  return (
    <Card className="flex flex-col gap-2 p-4" roundSize="8px">
      <div className="grid grid-cols-[2.5rem_1fr] gap-2">
        <Image
          width={40}
          height={40}
          alt="avatar"
          className="border rounded-full cursor-pointer"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div>
          <div className="text-base">Name</div>
          <div className="text-xs">Feb 16, 21</div>
        </div>
      </div>
      <div className="grid grid-cols-[2.5rem_1fr] gap-2">
        <div />
        <div className="flex-1 flex flex-col gap-2">
          <div>
            <p className="text-2xl cursor-pointer hover:text-blue-700">
              Top 5 Best Javascript Icons Libraries 🚀
            </p>
            <div>
              {[1, 2, 3, 4, 5].map((i) => (
                <span className="mr-4" key={i}>
                  #aaaa
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-between w-full">
            <CardStoryControls />
            <div className="flex gap-2 items-center text-xs">
              <div>7 min read</div>
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
