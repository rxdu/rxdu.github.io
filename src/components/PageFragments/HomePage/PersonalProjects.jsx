import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';
import AboutTile from '../../AbouTile';
import ImageTile from '../../ImageTile';

const PersonalProjects = () => (
  <div style={{ marginTop: 26, alignItems: 'center', justifyContent: 'center' }}>
    <h2>Personal Projects</h2>    
    I've been maintaining a few open-source packages for my research and hobby projects over the past a few years. Below are a few screenshots of planning-related algorithms implemented in the packages.
    <ul>
        <li><a href="https://github.com/rxdu/libgraph">libgraph</a>: C++ class templates for graph construction and search.</li>
        <li><a href="https://github.com/rxdu/libxmotion">libxmotion</a>: A lightweight mobile robot motion planning and control library</li>
        <li><a href="https://github.com/rxdu/robofw">robofw</a>: A robot firmware framework based on Zephyr</li>
    </ul>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col>
                <ImageTile
                        img="lattice.png"
                        width={400}
                        alt="occupancy image"
                        img_desc="Lattice Generation"
                        />
        </Col>
        <Col>
                <ImageTile
                        img="rrt.png"
                        width={400}
                        alt="occupancy image"
                        img_desc="RRT Search"
                        />
        </Col>
    </Row>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col>
                <ImageTile
                        img="occupancy.png"
                        width={400}
                        alt="occupancy image"
                        img_desc="Probabilistic Occupancy Estimation"
                        />
        </Col>
        <Col>
                <ImageTile
                        img="rrts.png"
                        width={400}
                        alt="occupancy image"
                        img_desc="RRT* Search"
                        />
        </Col>
    </Row>
  </div>
);

export default PersonalProjects;
