import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { Button, Row, Col } from 'antd';
import SEO from '../components/Seo';

// Widest the PDF page renders, in CSS px: an A4 page (595 pt) at scale 1.
const MAX_PAGE_WIDTH = 595;

export default class Resume extends Component {
  constructor() {
    super();
    this.state = {
      numPages: null,
      pageNumber: 1,
      pageWidth: null,
    };
    this.container = React.createRef();
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
    this.updatePageWidth = this.updatePageWidth.bind(this);
  }

  componentDidMount() {
    this.updatePageWidth();
    window.addEventListener('resize', this.updatePageWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePageWidth);
  }

  onDocumentLoadSuccess({ numPages }) {
    this.setState({ numPages });
  }

  // Fit the page to the screen on phones instead of scrolling sideways.
  updatePageWidth() {
    this.setState({ pageWidth: Math.min(this.container.current.clientWidth, MAX_PAGE_WIDTH) });
  }

  render() {
    const { pageNumber, numPages, pageWidth } = this.state;
    const pageToggle = () => {
      if (pageNumber === 1) {
        this.setState({ pageNumber: 2 });
      } else {
        this.setState({ pageNumber: 1 });
      }
      return 1;
    };

    return (
      <div ref={this.container}>
        <SEO
          title="Resume"
          description="You can find may education and work experimence from my resume."
          path="resume"
        />
        <Document
          file="../RuixiangDuResume.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} width={pageWidth || undefined} />
        </Document>
        <Row justify="center" style={{ background: 'lightslategray' }}>
          <Col span={2}>
            <p>{`Page ${pageNumber} of ${numPages}`}</p>
          </Col>
          <Col span={2}>
            <Button type="primary" onClick={pageToggle}>{pageNumber === 1 ? 'Next Page' : 'Previous Page'}</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
