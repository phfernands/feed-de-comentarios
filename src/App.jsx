import FeedForm from "./components/FeedForm";
import FeedComentaryList from "./components/FeedComentaryList";
import useRenderFeed from "./hooks/useRenderFeed";

function App() {
  const { comentaryList, newComentary } = useRenderFeed();

  return (
    <>
      <FeedForm newComentary={newComentary} />
      <hr />
      <FeedComentaryList comentaryList={comentaryList} />
    </>
  );
}

export default App;
