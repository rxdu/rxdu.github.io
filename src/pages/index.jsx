import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import PersonalProjects from '../components/PageFragments/HomePage/PersonalProjects';
import MoreProjects from '../components/PageFragments/HomePage/MoreProjects';
import PastResearch from '../components/PageFragments/HomePage/PastResearch';

export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <AboutMe />
          <PersonalProjects />
          <MoreProjects />
          <PastResearch />
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
);
