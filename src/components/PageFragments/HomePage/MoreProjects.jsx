import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';
import AboutTile from '../../AbouTile';
import ImageTile from '../../ImageTile';

const SkillsProgress = () => (
  <div style={{ marginTop: 26 }}>
    <h2>More Robotics Projects</h2>    
    <Row gutter={[24, 24]} >
        <Col xs={24} sm={24} md={12} lg={8} className="widthHalfFull">
            <Row>
                <ImageTile
                    img="nutonomy.png"
                    width={300}
                    height={300}
                    alt="occupancy image"
                    // img_desc="Probabilistic Occupancy Estimation"
                    />
            </Row>
            <Row>
                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/6qI_RjVsvzs?rel=0" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen />
            </Row>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} className="widthHalfFull">
            <Row>
                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/6qI_RjVsvzs?rel=0" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>  
            </Row>
            <Row>
                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/8LrmLvdZvYY?rel=0" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            </Row>
        </Col>     
    </Row>
  </div>
);

export default SkillsProgress;
