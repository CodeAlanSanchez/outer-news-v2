interface Props {
  article: any;
}

const Article: React.FC<Props> = ({ article }: Props) => {
  return (
    <a
      target={'_blank'}
      referrerPolicy={'no-referrer'}
      href={article.url}
      className="article"
    >
      <img
        className="article-image"
        src={article.imageUrl}
        alt="article image"
      />
      <h6 className="article-title">{article.title}</h6>
      <p className="article-description">{article.summary}</p>
    </a>
  );
};

export default Article;
