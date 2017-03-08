'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View
} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

import MenuList from './MenuList';

class Menu extends Component {
  render() {
    return (
      <Container>
        <Content>
          <MenuList />
        </Content>
      {/*Temporarily rendering Footer here due to breaking change with Flex: https://github.com/facebook/react-native/wiki/Breaking-Changes#fix-unconstraint-sizing-in-main-axis-0a9b6b---emilsjolander*/}
        <Footer >
          <FooterTab>
            <Button>
              <Icon name="cart" />
              <Text>Cart</Text>
            </Button>
            <Button active>
              <Icon active name="paper-plane" />
              <Text>Send</Text>
            </Button>
            <Button>
              <Icon name="person" />
              <Text>Account</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Menu;
