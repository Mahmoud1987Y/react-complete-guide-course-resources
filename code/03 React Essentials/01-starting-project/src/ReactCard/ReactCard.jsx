export default function ReactCard({ image, title, description }) {
  return (
    <>
      <div>
        <img src={image} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
}
