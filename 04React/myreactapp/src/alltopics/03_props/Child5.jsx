const Child5 = ({ getData }) => {
  function handleBtn() {
    getData("Hi From Child");
  }
  return (
    <div>
      <h1>Child5 Component</h1>
      <button onClick={handleBtn}>Click</button>
    </div>
  );
};
export default Child5;
