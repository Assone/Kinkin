import { useRouter } from "next/router";

const PostDetail: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <div className=" text-2xl">PostDetail {pid}</div>;
};

export default PostDetail;
