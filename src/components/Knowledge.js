import React, { Component } from 'react';

// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
import react from '../assets/img/logos/react.png';
import ruby from '../assets/img/logos/ruby.png';

import Item from './Item';

class Knowledge extends Component {
  render() {
    return (
      <>
        <Row>
          <Col className='mt-4' xs={4} sm={2} md={1}>
            <Item logo={ansible}/>
          </Col>
          <Col className='mt-4' xs={4} sm={2} md={1}>
            <Item logo={bash}/>
          </Col>
          <Col className='mt-4' xs={4} sm={2} md={1}>
            <Item logo={rspec}/>
          </Col>
          <Col className='mt-4' xs={4} sm={2} md={1}>
            <Item logo={rails}/>
          </Col>
          <Col className='mt-4' xs={4} sm={2} md={1}>
            <Item logo={ruby}/>
          </Col>
          <Col className='mt-4' xs={4} sm={2} md={1}>
            <Item logo={typescript}/>
          </Col>
          <Col className='mt-4' xs={4} sm={2} md={1}>
            <Item logo={node}/>
          </Col>
          <Col className='mt-4' xs={4} sm={2} md={1}>
            <Item logo={react}/>
          </Col>
          <Col className='mt-4' xs={4} sm={2} md={1}>
            <Item logo={circleci}/>
          </Col>
          <Col className='mt-4' xs={4} sm={2} md={1}>
            <Item logo={docker}/>
          </Col>
          <Col className='mt-4' xs={4} sm={2} md={1}>
            <Item logo={git}/>
          </Col>
          <Col className='mt-4' xs={4} sm={2} md={1}>
            <Item logo={vim}/>
          </Col>
        </Row>
      </>
    );
  }
}

export default Knowledge;
