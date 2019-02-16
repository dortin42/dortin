import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Item extends Component {
  render() {
    return (
      <Card className="bg-light">
        <Card.Img src={this.props.logo} alt="Card image" className='logo' />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
};

export default Item;
