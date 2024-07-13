import Thumbnail from "./components/Thumbnail";
import arr from "./data/thumbnails-data.js";

function App() {
  return (
    <>
      {arr.map((element, index) => {
        return (
          <Thumbnail
            key={element.id}
            name={element.name}
            about={element.about}
            subscriber={element.subscriber}
            date={element.date}
            verified={element.verified}
            imgURL={element.imgURL}
          />
        );
      })}
    </>
  );
}

export default App;
