function Internship(props) {
  const data = props.data;
  console.log(data[0].name);
  return (
    <>
      <h3>Internship</h3>
      {data.map((element, index) => {
        return (
          <ul>
            <h4>{data[index].name}</h4>
            <li>{data[index].role}</li>
            <li>{data[index].skills}</li>
            <li>{data[index].description}</li>
          </ul>
        );
      })}
    </>
  );
}

export default Internship;
