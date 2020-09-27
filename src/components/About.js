import React from 'react';
import Header from './header';
import Contact from './Contact';
import Work from './Work';

import data from './yourdata';

const About = () =>{
  return (
    <div>
      <Header name={data.name} contactEmail={data.contactEmail}></Header>
      <div className="about_container">
        <Work subject={"JS"} projects={data.projects}></Work>
        <Contact contactEmail = {data.contactEmail} contactPara= {data.contactPara} socialLinks = {data.social}></Contact>
      </div>
    </div>
  );
}
export default About;