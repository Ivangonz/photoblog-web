import { useParams } from "react-router";

const Photo = () => {
  const { id } = useParams();

  return <div>URL params: {id} </div>;
};

export default Photo;
