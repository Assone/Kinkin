const CardStory: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 p-8 border rounded bg-white">
      <div className="flex items-center gap-4">
        <img
          className="w-8 h-8 rounded-full"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div>
          <div>Name</div>
          <div>Feb 16, 21</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-4 pl-10">
        <div>
          <p className="text-4xl">Title</p>
          <div>
            {[1, 2, 3, 4, 5].map((i) => (
              <span className="mr-4" key={i}>
                #aaaa
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex">
            <div>42 reactions</div>
            <div>add comment</div>
          </div>
          <div>
            7 min read
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStory;
