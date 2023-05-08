import styled from 'styled-components';

const ServiceContainer = styled.section`
  padding: 80px 20px;
`;

const ServiceTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const ServiceCard = styled.div`
  padding: 20px;
  background-color: #FF0080;
  border-radius: 8px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
`;

const ServiceIcon = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90px;
  height: 90px;
  position: relative;
  border-radius: 45px;
  background-color: black;
  display: flex;
  justify-content:center;
  align-item:center;
  
`;

const ServiceName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color:
`;

const ServiceDescription = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
`;

const Service = () => {
  return (
    <ServiceContainer>
      <ServiceTitle>My Skills</ServiceTitle>
      <ServiceGrid>
        <ServiceCard>
          <ServiceIcon src="/images/java.jpg" alt="java Icon" />
          <ServiceName>Java</ServiceName>
          <ServiceDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dignissim risus vel sem hendrerit.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src="/images/dbms.png" alt="Service Icon" style={ {width:"25%", paddingTop:"10px", paddingBottom:"12px"} } />
          <ServiceName>Database Management System</ServiceName>
          <ServiceDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        dignissim risus vel sem hendrerit.
      </ServiceDescription>
    </ServiceCard>
    <ServiceCard>
      <ServiceIcon src="/images/hcj.png" alt="Service Icon"/>
      <ServiceName>HTML/CSS/Javascript</ServiceName>
      <ServiceDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        dignissim risus vel sem hendrerit.
      </ServiceDescription>
    </ServiceCard>
    <ServiceCard>
      <ServiceIcon src="/images/react.png" alt="Service Icon" style={ { width:"55%", paddingTop:"10px", paddingBottom:"28px"} }/>
      <ServiceName>React</ServiceName>
      <ServiceDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        dignissim risus vel sem hendrerit.
      </ServiceDescription>
    </ServiceCard>
    <ServiceCard>
      <ServiceIcon src="/images/ds.png" alt="Service Icon"/>
      <ServiceName>Data Structure and Algorithms</ServiceName>
      <ServiceDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        dignissim risus vel sem hendrerit.
      </ServiceDescription>
    </ServiceCard>
    <ServiceCard>
      <ServiceIcon src="/images/bash.png" alt="Service Icon" style={ { paddingTop:"9px", paddingBottom:"22px"}} />
      <ServiceName>Linux Shell Scripting Language</ServiceName>
      <ServiceDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        dignissim risus vel sem hendrerit.
      </ServiceDescription>
    </ServiceCard>
    <ServiceCard>
      <ServiceIcon src="/images/gcp.png" alt="Service Icon" style={ { width:"30%",paddingBottom:"8px"}}/>
      <ServiceName>Google cloud platform basics</ServiceName >
      <ServiceDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        dignissim risus vel sem hendrerit.
      </ServiceDescription>
    </ServiceCard>
    <ServiceCard>
      <ServiceIcon src="/images/git.png" alt="Service Icon" style={ {width:"27%" , paddingBottom:"10px", paddingTop:"10px"}}/>
      <ServiceName>Git</ServiceName>
      <ServiceDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        dignissim risus vel sem hendrerit.
      </ServiceDescription>
    </ServiceCard>
  </ServiceGrid>
</ServiceContainer>
  );
};
 
export default Service;
