import React, { Component } from 'react';

// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// Img
import ansible from '../assets/img/logos/ansible.png';
import bash from '../assets/img/logos/bash.png';
import rspec from '../assets/img/logos/rspec.png';
import rails from '../assets/img/logos/rails.png';
import typescript from '../assets/img/logos/typescript.png';
import circleci from '../assets/img/logos/circleci.png';
import docker from '../assets/img/logos/docker.png';
import git from '../assets/img/logos/git.png';
import node from '../assets/img/logos/node.png';
import vim from '../assets/img/logos/vim.png';

import Item from './Item';

class Knowledge extends Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <Item title='Daniel' logo={ansible}/>
          </Col>
          <Col>
            <Card>
              <Card.Header>Social media</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Item title='ansible' logo={ansible}/>
          </Col>
          <Col>
            <Item title='bash' logo={bash}/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Item title='rspec' logo={rspec}/>
          </Col>
          <Col>
            <Item title='rails' logo={rails}/>
          </Col>
          <Col>
            <Item title='typescript' logo={typescript}/>
          </Col>
          <Col>
            <Item title='node' logo={node}/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Item title='circleci' logo={circleci}/>
          </Col>
          <Col>
            <Item title='docker' logo={docker}/>
          </Col>
          <Col>
            <Item title='git' logo={git}/>
          </Col>
          <Col>
            <Item title='vim' logo={vim}/>
          </Col>
        </Row>
      </>
    );
  }
}

export default Knowledge;
