import Link from "next/link";

const Videos: React.FC = () => (
  <>
    <div>DEV on Video</div>
    <div className="grid grid-cols-3 gap-8">
      {Array.from({ length: 10 }).map((_, i) => (
        <div className="border rounded overflow-hidden" key={i}>
          <div className="relative">
            <img src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <span className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black text-white">
              42:12
            </span>
          </div>
          <div className="flex flex-col gap-4 p-4 bg-white">
            <p>Solidity Programming2:25:37 Solidity Programming</p>
            <Link href="/">codebangkok</Link>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Videos;
