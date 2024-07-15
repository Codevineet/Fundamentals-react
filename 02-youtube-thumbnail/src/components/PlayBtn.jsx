function PlayBtn({ children, onPlay, onPause }) {
  let playing = false; //dont use this approach
  function handleClick() {
    if (playing) onPause();
    else onPlay();
    playing = !playing;
  }

  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}

export default PlayBtn;
