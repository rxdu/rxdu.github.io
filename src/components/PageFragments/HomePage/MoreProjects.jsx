import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';
import AboutTile from '../../AbouTile';
import ImageTile from '../../ImageTile';
import style from './page.module.less';

const MoreProjects = () => (
  <div style={{ marginTop: 26, alignItems: 'center', justifyContent: 'center' }}>
    <h2>More Past Projects</h2>   
    I've worked on robotics projects with various types of robot hardware platforms. A few more examples of my past projects:
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={12}>
                <ImageTile
                        img="nutonomy.png"
                        width={400}
                        alt="nutonomy image"
                        img_desc="Self-driving Car (nuTonomy)"
                        />
        </Col>
        <Col span={12}>
            <div>
            <iframe 
                width="400" 
                height="225" 
                src="https://www.youtube.com/embed/6qI_RjVsvzs?rel=0" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen />
            </div>
            <div className={style.tileCaption}>{ "2D Mobile Robot Simulator" }</div>
        </Col>
    </Row>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={12}>
            <div>
            <iframe 
                width="400" 
                height="225" 
                src="https://www.youtube.com/embed/5VGGHFQIzGk?rel=0" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen />
            </div>
            <div className={style.tileCaption}>{ "Quadrotor Attitude Control" }</div>
        </Col>
        <Col span={12}>
            <div>
            <iframe 
                width="400" 
                height="225" 
                src="https://www.youtube.com/embed/8LrmLvdZvYY?rel=0" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen />
            </div>
            <div className={style.tileCaption}>{ "Medical Robot Simulation" }</div>
        </Col>
    </Row>
  </div>
);

export default MoreProjects;
