import { useParams } from "react-router";

const BlogPost = () => {
  const { id } = useParams();

  return <div>URL params: {id} </div>;
};

export default BlogPost;
