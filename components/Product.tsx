interface ProductProps {
  title: string;
  thumbnailUrl: string;
}

export const Product = ({ thumbnailUrl, title }: ProductProps) => {
  return (
    <div>
      <img src={thumbnailUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
};
