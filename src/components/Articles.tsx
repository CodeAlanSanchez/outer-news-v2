import axios from 'axios';
import { useQuery } from 'react-query';
import Error from 'components/Error';
import Loading from './Loading';
import Article from './Article';

interface Props {}

const Articles: React.FC<Props> = ({}: Props) => {
  const { isLoading, error, data } = useQuery('articles', () =>
    axios
      .get('https://api.spaceflightnewsapi.net/v3/articles')
      .then((res) => res)
  );

  if (error) return <Error>error</Error>;

  if (isLoading) return <Loading></Loading>;

  return (
    <div className="articles">
      <h4 className="articles-title">Articles</h4>
      <div className="article-list">
        {data!.data.map((i: any) => (
          <Article key={i.id} article={i} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
