import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';
import AboutTile from '../../AbouTile';

const SkillsProgress = () => (
  <div style={{ marginTop: 26 }}>
    <h2>Personal Projects</h2>    
    Here are a few open-source packages I've been working on over the past a few years, together with some screenshots of planning-related algorithms implemented in the packages:
    <ul>
        <li><a href="https://github.com/rxdu/libgraph">libgraph</a>: C++ class templates for graph construction and search.</li>
        <li><a href="https://github.com/rxdu/robosw">robosw</a>: A lightweight mobile navigation framework</li>
        <li><a href="https://github.com/rxdu/robofw">robofw</a>: A robot firmware framework based on Zephyr</li>
    </ul>
    <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="../../../images/404.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Mangalore, KA, India"
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
        
    </Row>
    <Row>
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
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Tech in"
            textH3="Computer Science"
            height={60}
            width={60}
          />
        </Col>
    </Row>
    {/* <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={80}
          text="Javascript"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={70}
          text="Python"
        />
      </Col>
    </Row> */}
  </div>
);

export default SkillsProgress;
