import "../styles/Thumbnail.css";

function Thumbnail(props) {
  const { name, about, subscriber, date, imgURL, verified } = props;

  return (
    <>
      <div className="container">
        <div className="imageContainer">
          <img src={imgURL} alt={name} />
        </div>
        <div className="description">
          <p className="about">{about}</p>
          <p className="channel-name">
            {name} {verified ? "✔️" : null}
          </p>
          <p className="subscriber">
            {subscriber}k <span>. {date} months ago</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Thumbnail;
