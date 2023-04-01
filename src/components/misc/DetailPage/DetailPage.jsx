
import { useParams } from 'react-router-dom';
import Comments from '../../Comments/Comments';

const DetailPage = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <h1>Detail Page</h1>
      <Comments postId={id} />
    </div>
  );
};

export default DetailPage;

