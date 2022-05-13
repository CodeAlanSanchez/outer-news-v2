interface Props {
  article: any;
}

const Article: React.FC<Props> = ({ article }: Props) => {
  return (
    <div className="article">
      <img
        className="article-image"
        src={article.imageUrl}
        alt="article image"
      />
      <h6 className="article-title">{article.title}</h6>
      <p className="article-description">{article.summary}</p>
    </div>
  );
};

export default Article;
