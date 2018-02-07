import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Child from './Child';
import * as Actions from './../../../actions';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const propTypes = {
  toggleImage: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired
};

class ActionCreator extends Component {
  constructor(props) {
    super(props);

    this.item = {
      name: null, leave: null, price: null
    };

    this.onClickToggleImage = this.onClickToggleImage.bind(this);
    this.onClickAddItem = this.onClickAddItem.bind(this);
  }

  onClickToggleImage() {
    // console.log('start toggle demo1');
    this.props.toggleImage();
  }

  onClickAddItem() {
    // console.log('start add item');
    // create new item, not pass one object is this.item (as redux)
    const newItem = { ...this.item };
    // console.log(newItem);
    this.props.addItem(newItem);
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.onClickToggleImage}
          style={{ position: 'fixed', top: 35, left: 5 }}
        >Toggle Image
        </button>
        <Form>
          <FormGroup row>
            <Label for="name" sm={2}>Name</Label>
            <Col sm={10}>
              <Input
                type="email"
                name="name"
                id="name"
                placeholder="Item name"
                onChange={(e) => { this.item.name = e.target.value; }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="leave" sm={2}>Leave</Label>
            <Col sm={10}>
              <Input
                type="number"
                name="leave"
                id="leave"
                placeholder="Leave"
                onChange={(e) => { this.item.leave = e.target.value; }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="price" sm={2}>Price</Label>
            <Col sm={10}>
              <Input
                type="number"
                name="price"
                id="price"
                placeholder="Price"
                onChange={(e) => { this.item.price = e.target.value; }}
              />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button onClick={this.onClickAddItem}>Submit</Button>
            </Col>
          </FormGroup>
        </Form>

        <Child />
      </div>
    );
  }
}

ActionCreator.propTypes = propTypes;

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  toggleImage: () => {
    // console.log('dispatch toggle demo1');
    dispatch(Actions.toggleDemo1());
  },
  addItem: (item) => {
    // console.log('dispatch add item');
    dispatch(Actions.addDemo2(item));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionCreator);