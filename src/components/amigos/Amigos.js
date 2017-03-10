'use strict';

import React, { Component } from 'react';

import {
	Container,
	Content,
	Footer,
	FooterTab,
	Button,
	Icon,
	Text,

} from 'native-base';

import AmigosListItem from './AmigosListItem';

const img1 = require('./user_img/0.jpg');
const img2 = require('./user_img/11.jpg');
const img3 = require('./user_img/28.jpg');
const img4 = require('./user_img/3.jpg');
const img5 = require('./user_img/6.jpg');


const communications = [
{ name: 'Brad Peters', message: 'Thanks for the tacos Nik!', imageSource: img1, time: '3: 43 pm' },
{ name: 'Nik Hill', message: 'Sent Brad Peters a care package', imageSource: img2, time: '3: 40 pm' },
{ name: 'Megan Brand', message: 'Get in my belly!', imageSource: img3, time: '3: 15 pm' },
{ name: 'Austin Combs', message: 'Taco Tuesday!! You know what that means!', imageSource: img4, time: '2: 32 pm' },
{ name: 'Mya Scott', message: 'Studying for finals agh need tacos ASAP!!', imageSource: img5, time: '2:21 pm' }
	];

class Amigos extends Component {
	
	renderAmigoList() {
		return (
			communications.map((com) => 
					<AmigosListItem 
						key={com.name}
						name={com.name} 
						message={com.message} 
						imageSource={com.imageSource} 
						time={com.time} 
					/>
			)
		);
	}

  render() {
    return (
      <Container>
        <Content>
          {this.renderAmigoList()}
        </Content>
        <Footer >
          <FooterTab>
            <Button onPress={() => this.onCartPress()}>
              <Icon active name="cart" />
              <Text>Cart</Text>
            </Button>
            <Button onPress={() => this.onSendPress()}>
              <Icon name="restaurant" />
              <Text>Menu</Text>
            </Button>
            <Button active onPress={() => this.onAccountPress()}>
              <Icon active name="people" />
              <Text>Amigos</Text>
            </Button>
          </FooterTab>
        </Footer>
			</Container>
    );
  }
}

export default Amigos;
