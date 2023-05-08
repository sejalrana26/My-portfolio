import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 40px 0;
  font-size: 14px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1140px;
  margin: 0 auto;
`;

const FooterColumn = styled.div`
  flex: 1;
  margin-right: 20px;

  &:last-of-type {
    margin-right: 0;
  }
`;

const FooterHeading = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
`;

const FooterList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #ccc;
  }
`;

const FooterBottom = styled.div`
  background-color: #111;
  color: #ccc;
  padding: 10px 0;
  font-size: 15px;
  text-align: center;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterHeading>visit</FooterHeading>
          <FooterList>
            <FooterListItem><FooterLink href="http://localhost:3000/about">About</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="http://localhost:3000/service">Skills</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="http://localhost:3000/contact">Press</FooterLink></FooterListItem>
          </FooterList>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Projects code</FooterHeading>
          <FooterList>
            <FooterListItem><FooterLink href="https://github.com/sejalrana26/To-Do-List.git">To do List</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="https://github.com/sejalrana26/Weather-web-application.git"> Weather Web Application</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="https://github.com/sejalrana26/OIBSIP_/blob/main/TASK%203%20TEMPERATURE%20CONVERTER.html">Temperature Converter</FooterLink></FooterListItem>
          </FooterList>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Links</FooterHeading>
          <FooterList>
            <FooterListItem><FooterLink href="https://www.linkedin.com/in/sejal-rana-30b3741a5/">LinkdIn</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="https://github.com/sejalrana26">Github</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="https://www.instagram.com/rana_sejal_26/">Instagram</FooterLink></FooterListItem>
          </FooterList>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Contact</FooterHeading>
          <FooterList>
            <FooterListItem>Pune, Maharashtra</FooterListItem>
            <FooterListItem><FooterLink href="tel:9307719167">9307719167</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="mailto:ranasejal2601@gmail.com">ranasejal2601@gmail.com</FooterLink></FooterListItem>
          </FooterList>
        </FooterColumn>
      </FooterContent>
      <FooterBottom>Thank you for visiting!!</FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
