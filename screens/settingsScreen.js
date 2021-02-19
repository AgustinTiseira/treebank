import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native'
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Avatar, Menu,  TouchableRipple,
    Switch,useTheme,Text, Headline, Portal, Modal, Title, Caption } from 'react-native-paper';
import { AuthContext } from '../src/components/context';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
export default function SettingsScrenn({changeScreen}) {
const paperTheme = useTheme();
  const  { toggleTheme } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
    <View style={styles.heading}>
    <Icon.Button
    name="arrow-left"
    size={25}
    color="black"
    backgroundColor="transparent"
    onPress={() => changeScreen('main')}
    />
    <Headline>Configuración</Headline>
    </View>
    <View style={styles.logo}>
    
    <ImageBackground
    style={{width:140,height:140, marginBottom: '10%'}}
    source={require('../assets/LogoVector.png')}
    >
    </ImageBackground>
    <View style={styles.generalCont} >
    <TouchableRipple onPress={() => {toggleTheme()}}>
    <View>
    <Text>Tema</Text>
    <View pointerEvents="none">
    <Switch value={paperTheme.dark}/>
    </View>
    </View>
    </TouchableRipple>
    </View>
    <Feather
    name="moon"
    color="black"
    size={30}
    style={{marginTop:-50,marginLeft:130}}
    />
    <Feather
    name="sun"
    color="yellow"
    size={30}
    style={{marginTop:-34,marginLeft:-130}}
    />
    <View style={styles.fingerprint} >
    <Text style={{marginBottom: 10}}>Huella digital</Text>
    <TouchableRipple onPress={() => {}}>
    
    <View pointerEvents="none" >
    <Switch />
    </View>
    </TouchableRipple>
    <Entypo
     name="fingerprint"
     size={28}
     color="black"
     style={{marginTop: 10}}
     />
    </View>
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
  },
  generalCont: {
		display: 'flex',
		alignItems: 'center',
	},
  logo: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20
  },
  heading: {
    marginBottom: 10,
    marginTop: 10,
 		fontSize: 35,
		alignItems : 'center',
		display: 'flex',
		flexDirection: 'row'
},
fingerprint: {
  display: 'flex',
  alignItems: 'center',
  marginTop: '10%'
}
});
