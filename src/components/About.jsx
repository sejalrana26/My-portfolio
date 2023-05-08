import styled from 'styled-components';
import "./About.css";

const AboutContainer = styled.section`
  padding:60px;
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

const AboutImage = styled.img`
  max-width: 50%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
`;

const AboutText = styled.div`
  max-width: 50%;
  margin-left: 20px;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const AboutDescription = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: 20px;
`;
const Tabtitles = styled.div`
  display:flex;
  margin:20px 0 40px;
`;
const About = () => {
  function opentab(tabname, event){
    const tablinks = document.getElementsByClassName("Tablinks");
    const tabcontents = document.getElementsByClassName("Tabcontents");

    for(const tablink of tablinks){
      tablink.classList.remove("active-link");
    }

    for(const tabcontent of tabcontents){
      tabcontent.classList.remove("activetab");
      if (tabcontent.id === tabname) {
        tabcontent.classList.add("activetab");
      }
    }
    event.currentTarget.classList.add("active-link");
  }

  return (
    <AboutContainer>
      <AboutContent>
        <AboutImage src="/images/about-image.jpg" alt="About Me" />
        <AboutText>
          <AboutTitle>About Me</AboutTitle>
          <AboutDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dignissim risus vel sem hendrerit, in consectetur dolor suscipit.
            Aliquam malesuada purus non libero porttitor elementum.
          </AboutDescription>
          <Tabtitles>
            <p className='Tablinks active-link' onClick={(e) => opentab('education', e)}>Education</p>
            <p className='Tablinks' onClick={(e) => opentab('projects', e)}>Projects</p>
            <p className='Tablinks' onClick={(e) => opentab('achievments', e)}>Achievements</p>
          </Tabtitles>
        <div className="Tabcontents activetab" id="education">
          <ul>
            <li><span style={{color:"rgb(234, 11, 145)", fontSize:"14px", fontWeight:"600"}}>2019 - 2023__82%</span><br/><h3>B.E from Savtribai Phule Pune University</h3></li>
            <li><span style={{color:"rgb(234, 11, 145)", fontSize:"14px", fontWeight:"600"}}>2018 - 2019__61.3%</span><br/><h3>HSC from Swami Vivekanand Moolji Jaitha Junior College, Jagaon</h3></li>
            <li><span style={{color:"rgb(234, 11, 145)", fontSize:"14px", fontWeight:"600"}}>2016 - 2017__82.60%</span><br/><h3>SSC from St. Lawrence High School, Jalgaon</h3></li>
          </ul>
        </div>

         <div className="Tabcontents" id="projects">

          <ul>
            <li><span style={{color:"rgb(234, 11, 145)", fontSize:"14px", fontWeight:"600"}}>Weather Web Application</span><br/><h3>A simple weather web application that uses OpenWeatherMap API to get the weather data at any location.
Technologies Used: HTML 5, CSS, JavaScript, Open weather map API.</h3></li>
            <li><span style={{color:"rgb(234, 11, 145)", fontSize:"14px", fontWeight:"600"}}>To-do List</span><br/><h3>To-Do List website with HTML, CSS and JavaScript and React. In this we can add our task
list and mark that task as completed. Here we are using Local Storage that will store the task list or To Do list in your web browser.</h3></li>
            <li><span style={{color:"rgb(234, 11, 145)", fontSize:"14px", fontWeight:"600"}}>User Management Project</span><br/><h3>A simple web application that manages a collection of users with the basic features(Crud operations - Create, Update, Read, Delete) in Java using JSP jdbc Mysql</h3></li>
            <li><span style={{color:"rgb(234, 11, 145)", fontSize:"14px", fontWeight:"600"}}>My portfolio</span><br/><h3>A simple web application that manages a collection of users with the basic features
(Crud operations - Create, Update, Read, Delete) in Java using JSP jdbc Mysql</h3></li>
          </ul>
        </div>

        <div className="Tabcontents" id="achievments">

          <ul>
            <li><span style={{color:"rgb(234, 11, 145)", fontSize:"14px", fontWeight:"600"}}>Jan 2022-Feb 2022</span><br/><h3>Web development and designing Internship at Oasis InfoByte</h3></li>
            <li><span style={{color:"rgb(234, 11, 145)", fontSize:"14px", fontWeight:"600"}}>Transfer and placement volunteer</span><br/><h3>Actively participated in drives and had responsibilities like crowd handling</h3></li>
            <li><span style={{color:"rgb(234, 11, 145)", fontSize:"14px", fontWeight:"600"}}>Treasurer at College Campus</span><br/><h3>Selected for the position of Treasurer among the Committee Members, Responsible for
handling events and finances of IT department</h3></li>
          </ul>

        </div>
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
