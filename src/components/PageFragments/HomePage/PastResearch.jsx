import React from 'react';
import { Row, Col } from 'antd';
import { stripTags, domHtml } from '../../../utils/stripTags';

import ProgressBar from '../../Progress';
import AboutTile from '../../AbouTile';
import ImageTile from '../../ImageTile';

const pageText = {
    paraOne: `Many people anticipate 5G communication would help autonomous driving
     make a breakthrough and reach the next-level of autonomy. But how is V2X 
     technology actually going to make a self-driving car safer and more efficient? 
     What if majority of surrounding vehicles are still manually driven by human 
     even though more and more of them are expected to be enhanced with communication 
     capabilities? In this project, we studied existing/emerging vehicular 
     communication technologies and investigated commonly available information 
     that can be exchanged among vehicles. We tried to use probabilistic reachable 
     set to predict potential occupancy by surrounding vehicles and evaluate collision 
     risk within planning horizon of the ego (autonomous) vehicle. The goal is to 
     selectively "listen to" vehicles that are relevant to ego vehicle's motion in 
     order to reduce onboard computation as well as mitigating communication channel 
     congestion in busy regions.`,
    paraTwo: `Small electric quadrotors have become commertially available for a wide 
    range of applications, such as photography, construction site inspection and 
    agriculture. Though these UAVs are suitable for cluttered environments by its 
    size and manuverability, their applications are largely restricted to relatively 
    open areas. Can we make them fly autonomously in places like warehouses, 
    factories or densely populated urban neighbourhoods? In this project, we proposed 
    a path repair algorithm for small UAVs equipped with FOV-limited onboard 3D 
    sensor to efficiently navigate in large indoor environments where only a 2D map 
    is available beforehand. The vehicle would try to take full advantage of 
    information from the 2D map and actively look for "shortcuts" in the 3D space 
    based on analysis with the map together with realtime sensor data.`,
    paraThree: `The DARPA Robotics Challenge (DRC) was introduced after the Fukushima 
    nuclear disaster happened in Japan, 2011. It's aimed at pushing the boundaries of 
    technology and making life saving robotics systems available for future disasters.
     WPI's entry of the DRC started from the Virtual Robotics Challenge phase, in 
     which we got the 2nd place and won an Atlas Robot built by Boston Dynamics. 
     During the DRC Trials phase, we formed a collaborative team with CMU and 
     successfully qualified as one of the finalists in December 2013. Our team 
     WPI-CMU successfully finished the DRC Finals and ranked the 7th out of 23 
     competing teams from all over the world, in California, June 2015. Our 
     development work invovled many aspects of robotics, such as scene segmentation 
     and object detection, whole-body control of the humanoid robot, path and step 
     planning, trajectory planning and control for manipulation, behavior management 
     and human-robot interaction.`,
  };

const PastResearch = () => (
  <div style={{ marginTop: 26, alignItems: 'center', justifyContent: 'center' }}>
    <h2>Previous Research</h2>    
    Here you can find a few research projects I've worked on during my graduate study at WPI.
    <div><br></br></div>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={12}>
                <div>
                <h3>Motion Prediction and Planning for Connected and Automated Vehicles</h3>
                <p dangerouslySetInnerHTML={domHtml(pageText.paraOne)} />
                </div>
        </Col>
        <Col span={12}>
            <div>
                <iframe 
                    width="400" 
                    height="225" 
                    src="https://www.youtube.com/embed/OkU2hrhpRAY?rel=0" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen />
                <ImageTile
                        img="threat_field.png"
                        width={400}
                        alt="threat_field image"
                        // img_desc="Probabilistic Occupancy Estimation"
                        />
            </div>
        </Col>
    </Row>
    <div><br></br></div>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>        
        <Col span={12}>
            <div>
                <iframe 
                    width="400" 
                    height="225" 
                    src="https://www.youtube.com/embed/TL6o-dDvIOY?rel=0" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen />
                <iframe 
                    width="400" 
                    height="225" 
                    src="https://www.youtube.com/embed/phAr_QhqO4A?rel=0" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen />
            </div>
        </Col>
        <Col span={12}>
                <div>
                <h3>Path Repair and Trajecotry Optimization for Small Unmanned Aerial Vehicles</h3>
                <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
                </div>
        </Col>
    </Row>
    <div><br></br></div>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={12}>
                <div>
                <h3>DARPA Robotics Challenge Trials & Finals</h3>
                <p dangerouslySetInnerHTML={domHtml(pageText.paraThree)} />
                </div>
        </Col>
        <Col span={12}>
            <div>
                <iframe 
                    width="400" 
                    height="225" 
                    src="https://www.youtube.com/embed/J-3JWAuBzE8?rel=0" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen />
                <iframe 
                    width="400" 
                    height="225" 
                    src="https://www.youtube.com/embed/UL3gMu76Nik?rel=0" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen />
            </div>
        </Col>
    </Row>
  </div>
);

export default PastResearch;
