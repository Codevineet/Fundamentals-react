import "../styles/skills.css";

function Skills(props) {
  const data = props.data;
  // console.log(data);
  let backend, frontend, programming, database, os, fundamentals;
  {
    data.map((element, index) => {
      backend = element.backend.split(", ");
      frontend = element.frontend.split(", ");
      os = element.os.split(", ");
      database = element.database.split(", ");
      programming = element.programming.split(", ");
      fundamentals = element.fundamentals.split(", ");
    });
  }
  return (
    <>
      <h3>Skills</h3>
      <div className="container">
        <h4>Programming</h4>
        <ul>
          {programming.map((x) => {
            return <li>{x}</li>;
          })}
        </ul>
        <h4>Frontend</h4>
        <ul>
          {frontend.map((x) => {
            return <li>{x}</li>;
          })}
        </ul>
        <h4>Backend</h4>
        <ul>
          {backend.map((x) => {
            return <li>{x}</li>;
          })}
        </ul>
        <h4>Database</h4>
        <ul>
          {database.map((x) => {
            return <li>{x}</li>;
          })}
        </ul>
        <h4>OS</h4>
        <ul>
          {os.map((x) => {
            return <li>{x}</li>;
          })}
        </ul>
        <h4>Fundamentals</h4>
        <ul>
          {fundamentals.map((x) => {
            return <li>{x}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default Skills;
