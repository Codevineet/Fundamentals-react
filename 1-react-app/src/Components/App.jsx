import Header from "./Header";
import Interests from "./Interests";
import Skills from "./Skills";
import Education from "./Education";
import Internship from "./Internship";
import Resume from "../data/Resume";

function App() {
  return (
    <>
      <Header />
      <Education data={Resume.education} />
      <Interests data={Resume.Interest} />
      <Skills data={Resume.skills} />
      <Internship data={Resume.internship} />
    </>
  );
}

export default App;
