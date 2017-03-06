import React from 'react';
import { Image, View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Registration from './components/landing/Registration';
import Menu from './components/main/Menu';

const RouterComponent = () => {
	const AppLogo = () => {
  return (
    <View style={{ alignItems: 'center', marginTop: 5, width: 1, height: 1 }}>
      <Image source={require('./img/taco-logo.png')}
             style={{ width: 84, height: 29 }} />
    </View>
  );
};
	return (
		<Router sceneStyle={{ paddingTop: 65 }} >
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
			</Scene>
		</Router>
	);
};

export default RouterComponent;
