import React from 'react';
import { Image, View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Registration from './components/landing/Registration';
import Menu from './components/main/Menu';
import Cart from './components/cart/Cart';
import Amigos from './components/amigos/Amigos';

const RouterComponent = () => {
	const AppLogo = () => (
    <View style={{ alignItems: 'center', marginTop: 5, width: 1, height: 1 }}>
      <Image 
      source={require('./img/taco-logo.png')}
      style={{ width: 84, height: 29 }} 
      />
    </View>
  );
  
	return (
		<Router sceneStyle={{ paddingTop: 65, flexGrow: 1 }} >
			<Scene key="auth">
				<Scene 
				key="registration" 
				component={Registration} 
				hideNavBar
				/>
			</Scene>
			<Scene key="main">
				<Scene 
				key="home"
				component={Menu}
				title={() => { return <AppLogo />; }}
				/>
				<Scene 
				key="cart"
				component={Cart}
				title="Cart"
				/>
				<Scene 
				key="amigos"
				component={Amigos}
				title="Amigos"
				/>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
