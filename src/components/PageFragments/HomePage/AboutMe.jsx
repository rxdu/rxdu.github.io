import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `I am a <b>Robotics Engineer</b> with a focus on <b>autonomous navigation of 
  mobile robots</b>. My areas of interest include sensing and motion planning for 
  self-driving cars, mobile robot planning, control and simulation, and 
  real-time embedded systems.`,
  paraTwo: `I got my first <b>Master's degree in Robotics Engineering</b> 
  from <b>Worcester Polytechnic Institute (WPI)</b> in the USA in 2013. Then I spent about 2 years 
  working on the DARPA Robotics Chanllenge with Professor Taskin Padir. After the competition, I continued my graduate study as a <b>PhD candidate in Mechanical Engineering</b> at WPI and worked in the Autonomy, Control, and Estimation Laboratory (ACEL) under supervision of Professor Raghvendra V. Cowlagi. In early 2019, I dropped out of the PhD program due to VISA issue and concluded my study at WPI with another <b>Master's degree in Aerospace Engineering</b>.`,
  paraThree: `Currently I work as a full-time robotics engineer and the CTO of <b>Weston Robot</b>. I lead a small team building mobile robot hardware and software solutions.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="Home"
          description={description}
          path=""
          keywords={['Ruixiang Du', 'rdu', 'rxdu', 'Robotics Engineer', 'Mobile Robot', 'Autonomous Navigation', 'Motion Planning']}
        />
        <h1 className="titleSeparate">About Me</h1>
        {/* <p>
          {pageText.paraOne}
        </p> */}
        <p dangerouslySetInnerHTML={domHtml(pageText.paraOne)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paraThree)} />
        {/* <p>
          {pageText.paraThree}
        </p> */}
      </div>
      {/* <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Mangalore, KA, India"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socially Awkward"
            textH3="At times"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Love Riding"
            textH3="Biker for life"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Tech in"
            textH3="Computer Science"
            height={60}
            width={60}
          />
        </Col>
      </Row> */}
    </>
  );
};
export default AboutMe;
