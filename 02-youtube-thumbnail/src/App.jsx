import Thumbnail from "./components/Thumbnail";
import arr from "./data/thumbnails-data.js";
import PlayBtn from "./components/PlayBtn.jsx";

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
      <PlayBtn message="playClicked" onClick={() => console.log("touch")}>
        {/* this onClick is the custom event  */}
        play
      </PlayBtn>
      <PlayBtn message="pauseClicked" onClick={() => alert("Its meeee")}>
        pause
      </PlayBtn>
    </>
  );
}

export default App;
