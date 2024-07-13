function EducationFormat(props) {
  const { name, course, branch, board, percentage } = props;
  return (
    <>
      <div className="container" style={{ display: "flex" }}>
        <ul>
          <li>{name}</li>
          <li>{course}</li>
          <li>{branch}</li>
          <li>{board}</li>
          <li>{percentage} %</li>
        </ul>
      </div>
    </>
  );
}

export default EducationFormat;
