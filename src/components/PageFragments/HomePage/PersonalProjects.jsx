import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';
import AboutTile from '../../AbouTile';
import ImageTile from '../../ImageTile';

const SkillsProgress = () => (
  <div style={{ marginTop: 26 }}>
    <h2>Personal Projects</h2>    
    Here are a few open-source packages I've been working on over the past a few years, together with some screenshots of planning-related algorithms implemented in the packages:
    <ul>
        <li><a href="https://github.com/rxdu/libgraph">libgraph</a>: C++ class templates for graph construction and search.</li>
        <li><a href="https://github.com/rxdu/robosw">robosw</a>: A lightweight mobile navigation framework</li>
        <li><a href="https://github.com/rxdu/robofw">robofw</a>: A robot firmware framework based on Zephyr</li>
    </ul>
    <Row gutter={[24, 24]} >
        <Col xs={24} sm={24} md={12} lg={8} className="widthHalfFull">
            <Row>
                <ImageTile
                    img="lattice.png"
                    width={300}
                    // height={150}
                    alt="lattice image"
                    img_desc="Lattice Generation"
                />
            </Row>
            <Row>
                <ImageTile
                img="occupancy.png"
                width={300}
                // height={300}
                alt="occupancy image"
                img_desc="Probabilistic Occupancy Estimation"
                />
            </Row>
            <Row>
                <ImageTile
                img="minimum_snap.png"
                width={300}
                // height={300}
                alt="minimum_snap image"
                img_desc="Minimum-snap Trajectory Generation"
                />
            </Row>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} className="widthHalfFull">
            <Row>
                <ImageTile
                    img="rrt.png"
                    width={300}
                    // height={300}
                    alt="lattice image"
                    img_desc="RRT Search"
                />
            </Row>
            <Row>
                <ImageTile
                img="rrg.png"
                width={300}
                // height={300}
                alt="occupancy image"
                img_desc="RRG Search"
                />
            </Row>
            <Row>
                <ImageTile
                img="rrts.png"
                width={300}
                // height={300}
                alt="minimum_snap image"
                img_desc="RRT* Search"
                />
            </Row>
        </Col>     
    </Row>
  </div>
);

export default SkillsProgress;
