function Interests(props) {
  const data = props.data;
  return (
    <>
      <h3>Interests</h3>
      <ul>
        {data.map((element) => {
          return <li>{element}</li>;
        })}
      </ul>
    </>
  );
}

export default Interests;
