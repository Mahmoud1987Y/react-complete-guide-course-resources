export default function ({ text }) {
  return (
    <>
      <h2>{text.title}</h2>
      <p>{text.description}</p>
      <code>{text.code}</code>
    </>
  );
}
