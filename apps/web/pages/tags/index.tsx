const Tags: React.FC = () => {
  return (
    <div className="w-4/5 m-auto">
      <div className="flex justify-between items-center p-4">
        <div className="text-4xl">Top tags</div>
        <div className="flex gap-8">
          <input type="search" />
          <button>Following tags</button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="border rounded-lg overflow-hidden" key={i}>
            <div className="w-full h-4 bg-slate-600" />
            <div className="flex flex-col items-start p-8 bg-white">
              <div>#tag</div>
              <p>
                Once relegated to the browser as one of the 3 core technologies
                of the web, JavaScript can now be found almost anywhere you find
                code.
              </p>
              <span>87754 posts published</span>
              <button>Follow</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
