import Thumbnail from "./components/Thumbnail";
import arr from "./data/thumbnails-data.js";
import PlayBtn from "./components/PlayBtn.jsx";

function App() {
  return (
    <>
      {arr.map((element) => {
        return (
          <div key={element.id}>
            <Thumbnail
              name={element.name}
              about={element.about}
              subscriber={element.subscriber}
              date={element.date}
              verified={element.verified}
              imgURL={element.imgURL}
            />

            <PlayBtn 
              message="playClicked"
              onPlay={() => console.log("play", element.name)}
              onPause={() => console.log("pause", element.name)}
            >
              {element.name}
            </PlayBtn>
          </div>
        );
      })}
    </>
  );
}

export default App;
