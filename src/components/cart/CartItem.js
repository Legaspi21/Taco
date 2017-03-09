'use strict';

import React, { Component } from 'react';

import { ListItem, Left, Text, Body, Right } from 'native-base';

class CartItem extends Component {
	itemTotal() {
		const total = (parseInt(this.props.quantity, 10) * this.props.price) / 100;
		return `$${total}`;
	}

  render() {
    return (
      <ListItem>
        <Left>
          <Text note >{this.props.title}</Text>
        </Left>
        <Body>
          <Text note >{this.props.quantity}</Text>
        </Body>
        <Right>
          <Text note >{this.itemTotal()}</Text>
        </Right>
      </ListItem>
    );
  }
}

export default CartItem;
