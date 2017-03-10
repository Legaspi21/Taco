'use strict';

import React, { Component } from 'react';

import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Right
} from 'native-base';

class AmigosListItem extends Component {
  render() {
    return (
      <ListItem avatar>
				<Left>
					<Thumbnail source={this.props.imageSource} />
				</Left>
        <Body>
          <Text>{this.props.name}</Text>
          <Text note>{this.props.message}</Text>
        </Body>
        <Right>
          <Text note>{this.props.time}</Text>
        </Right>
      </ListItem>
    );
  }
}

export default AmigosListItem;
