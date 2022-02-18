import Link from "next/link";
import { useRouter } from "next/router";
import Card from "./card";

interface Article {
  id: number;
  title: string;
  creator?: string;
  tags?: { text: string; color: string }[];
  comments?: number;
}

interface ArticleProps {
  title: string;
  more?: { link: string; text: string };
  articles: Article[];
}

const ArticleList: React.FC<ArticleProps> = ({ title, more, articles }) => {
  const router = useRouter();

  return (
    <Card background="#FAFAFA">
      <section>
        <header className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-bold">{title}</h3>
          {more && (
            <span
              className="text-sm text-blue-600 cursor-pointer"
              onClick={() => router.push(more.link)}
            >
              {more.text}
            </span>
          )}
        </header>
        <ul>
          {articles.map(({ id, title, creator, tags, comments }, i) => (
            <li
              className="flex flex-col p-4 border-b last:border-0 cursor-pointer hover:bg-white hover:text-blue-700"
              key={i}
              onClick={() => router.push(`/posts/${id}`)}
            >
              <div className="text-sm">{title}</div>
              {creator && (
                <div className="text-xs text-gray-400">{creator}</div>
              )}
              {tags && (
                <div>
                  {tags.map(({ text, color }, i) => (
                    <div style={{ backgroundColor: color }} key={i}>
                      {text}
                    </div>
                  ))}
                </div>
              )}
              {comments && <div>{comments} comments</div>}
            </li>
          ))}
        </ul>
      </section>
    </Card>
  );
};

export default ArticleList;
