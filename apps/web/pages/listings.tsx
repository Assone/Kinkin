const Listings: React.FC = () => {
  return (
    <div className=" flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Listings</h1>
        <div className="flex gap-4">
          <button>Create</button>
          <button>Manage</button>
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <input type="search" />
          <ul>
            <li>help</li>
            <li>help</li>
            <li>help</li>
            <li>help</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              className="flex flex-col gap-2 p-4 border rounded bg-white"
              key={i}
            >
              <div>
                <h2 className="text-2xl font-bold">
                  Speak at FutureStack 2022!
                </h2>
                <time>2月11日</time>
              </div>
              <div className="flex gap-2 py-2 text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i}>#javascript</div>
                ))}
              </div>
              <div>
                We are looking for contributors with Rust programming skills and
                an interest in System Programming to help us to build Qdrant,
                the high-performance open-source vector similarity engine. 🚀
                GitHub https://github.com/qdrant/qdrant
              </div>
              <div className="flex gap-2 items-center">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <div>
                  <div>andre</div>
                  <div>collabs</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;
