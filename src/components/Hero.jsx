import styled from 'styled-components';

const HeroContainer = styled.section`
  height: calc(100vh - 80px);
  background-image: url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const HeroContent = styled.div`
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 5rem;
  margin-bottom: 10px;
`;

const HeroSubtitle = styled.h2`
  font-size: 3rem;
  padding-bottom:30px;
  font-weight:500;
`;
const StyledLink = styled.a`
  color: black;
  font-weight:bold;
  text-decoration: none;
  background-color:#FF0080 ;
  font-size:20px;
  padding: 10px 18px;
  border-radius: 5px;
  display:inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

const Hero = () => {
  return (
    <>
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Welcome to My Portfolio!!</HeroTitle>
        <HeroSubtitle>This is my official Portfolio website, a place to showcase my work</HeroSubtitle>
        <StyledLink href="https://drive.google.com/file/d/1l5XCJIjMxlrhij2TmGXLONUCngeuKpnO/view?usp=sharing" target="_"><span >DOWNLOAD CV</span></StyledLink>
      </HeroContent>
    </HeroContainer>
    </>
  );
};

export default Hero;
