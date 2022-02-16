import { Button } from "ui";

export default function Web() {
  return (
    <div className="grid grid-cols-3">
      <div>
        <div className="p-2">
          <div>
            DEV Community is a community of 800,275 amazing developers We're a
            place where coders share, stay up-to-date and grow their careers.
          </div>
          <button>Create account</button>
          <button>Log in</button>
        </div>
      </div>
      <div>2</div>
      <div>
        <div>
          <div className="flex justify-between p-2">
            <h1>Listings</h1>
            <button>See all</button>
          </div>
          <div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div className="flex flex-col gap-2 p-2 border-b-2" key={i}>
                <div>Mail Merge Gmail</div>
                <div>education</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
