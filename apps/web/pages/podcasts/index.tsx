const Podcasts: React.FC = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="text-4xl">Podcasts</div>
        <button>Suggest a Podcast</button>
      </div>
      <div>
        <div>
          <div className="text-3xl py-6">Latest episodes</div>
          <div className="grid grid-cols-5 gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div className=" border rounded-lg overflow-hidden" key={i}>
                <img src="https://img.yzcdn.cn/vant/cat.jpeg" />
                <div className="p-4 bg-white">
                  <p>My first hire</p>
                  <span>The Maker Mindset Podcast, Feb 16</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-3xl py-6">Featured shows</div>
          <div className="grid grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                className="flex flex-col justify-center items-center"
                key={i}
              >
                <img src="https://img.yzcdn.cn/vant/cat.jpeg" />
                <h3>CodeNewbie</h3>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-3xl py-6">Browse</div>
          <ul className="grid grid-cols-4 gap-x-14 gap-y-4">
            {Array.from({ length: 30 }).map((_, i) => (
              <li className="flex items-center gap-4" key={i}>
                <img
                  className="w-16 h-16 rounded"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <span>A Cup of Code Podcast</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Podcasts;
