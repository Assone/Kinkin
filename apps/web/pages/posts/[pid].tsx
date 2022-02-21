import { useRouter } from "next/router";
import {usePostDetail} from "@kinkin/web-service";


const PostDetail: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;
  usePostDetail(+pid);

  return <div className=" text-2xl">PostDetail {pid}</div>;
};

export default PostDetail;
