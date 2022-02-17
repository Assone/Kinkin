import CardStory from "@/components/card-story";
import Link from "next/link";
import { Button } from "ui";

export default function Web() {
  return (
    <div className="grid grid-cols-5 gap-4 w-11/12 m-auto">
      <div className="flex flex-col gap-4">
        <div className="p-2 border rounded bg-white">
          <div>
            DEV Community is a community of 800,275 amazing developers We're a
            place where coders share, stay up-to-date and grow their careers.
          </div>
          <button>Create account</button>
          <button>Log in</button>
        </div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/tags">Tags</Link>
          </li>
          <li>
            <Link href="/videos">Videos</Link>
          </li>
          <li>
            <Link href="/podcasts">Podcasts</Link>
          </li>
          <li>
            <Link href="/listings">Listings</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-3">
        <ul className="flex gap-8 py-8">
          <li>
            <button>Relevant</button>
          </li>
          <li>
            <button>Latest</button>
          </li>
          <li>
            <button>Top</button>
          </li>
        </ul>
        <div className="flex flex-col gap-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <CardStory key={i} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="border rounded bg-white">
          <div className="flex justify-between p-2 border-b">
            <h1>Listings</h1>
            <button>See all</button>
          </div>
          <div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div className="flex flex-col gap-2 p-2 border-b" key={i}>
                <div>Mail Merge Gmail</div>
                <div>education</div>
              </div>
            ))}
            <div className="flex justify-center py-2">
              <button>Create Listings</button>
            </div>
          </div>
        </div>
        <div className="border rounded bg-white">
          <div className="flex justify-between p-2  border-b">
            <h1>#help</h1>
          </div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div className="flex flex-col gap-2 p-2 border-b" key={i}>
              <div>Mail Merge Gmail</div>
              <div>education</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
