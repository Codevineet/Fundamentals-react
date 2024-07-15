function PlayBtn({ message, children, onClick }) {
  function handleClick() {
    onClick();
  }
  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}

export default PlayBtn;
