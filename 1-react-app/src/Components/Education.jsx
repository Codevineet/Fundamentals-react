import EducationFormat from "./EducationFormat";

function Education(props) {
  const data = props.data.slice(0, 3);
  return (
    <>
      <h3>Education</h3>
      {data.map((element, index) => {
        return (
          <EducationFormat
            name={data[index].name}
            course={data[index].course}
            branch={data[index].branch}
            board={data[index].board}
            percentage={data[index].percentage}
            key={index}
          />
        );
      })}
    </>
  );
}
export default Education;
