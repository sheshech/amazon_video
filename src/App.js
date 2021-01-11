
function Movie(props) {
  return <h1>I like { props.fav }</h1>;
}

function App() {
  return (
  <div>
    <h1>test</h1>
    <Movie fav="kimchi" />
    <Movie fav="samgiopsal" />
    <Movie fav="chukumi" />
  </div>
  );
}

export default App;
