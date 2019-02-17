import React, { Component } from 'react';

// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';

class FeaturedItem extends Component {
  render() {
    return (
      <>
        <Row>
          <Col xs={12}>
            <Card className="card flex-sm-row mb-gutter">
              <img alt='' className="card-img-top card-img-sm-left" src="https://tarkhov.github.io/postboot/assets/img/thumbnail.jpg"/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                  no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
};

export default FeaturedItem;
