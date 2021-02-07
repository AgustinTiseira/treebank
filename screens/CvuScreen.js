import React,{useEffect} from 'react';
import { ImageBackground,Image, StyleSheet, Text, View, Linking } from 'react-native';
import { Divider, Headline, Paragraph,TextInput, Button, } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import logo from '../assets/logo.png'
import Transfer from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux'



export default function CvuScreen({changeScreen}) {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user)
	const { firstName, lastName } = user.loggedUser

	useEffect(() => {
		// dispatch(getUserByID(user.user.id.id));
	}, [])


const handldeWhatsAppPress = async() => {
  await Linking.openURL('https://wa.me/?text=Este es mi CVU:000000543290784315763-Mensaje Enviado desde TreeBankAPP')
}



	return (
    <View style={styles.container}>
    <View style={styles.heading}>
    <Icon.Button
		name="arrow-left"
		size={25}
		color="black"
		backgroundColor="#FFFF"
		// onPress={() => changeScreen('main')}
		/>
    <Headline>CVU</Headline>
    </View>
    <View style={styles.logo}>
    <ImageBackground
    style={{width:40,height:40}}
    source={require('../assets/LogoVector.png')}
    >
    </ImageBackground>
    </View>
		<View>
		<ImageBackground
		source={require('../assets/backgroundCard1.jpeg')}
		style={styles.mainCard}
		imageStyle={{ borderRadius: 15 }}>
		</ImageBackground>
		</View>
			<View style={{alignItems:'center',
      width:320,
      marginTop:-186,
			marginLeft:-100,
      height:36,
      }}>
			<Headline style={{color:'white',fontSize:24}}>CVU:</Headline>
		  </View>
			<View style={{alignItems:'center',
      width:250,
      marginTop:30,
      height:36,
			marginLeft:30,
			backgroundColor: '#006A34',
			opacity:0.8
      }}>
			<Headline style={{color:'white',fontSize:20}}>000000543290784315763</Headline>
		  </View>
      <View style={{alignItems:'center',
      width:220,
			marginTop:26,
      height:36,
			marginLeft:-20,
      }}>
      <Headline style={{color:'white'}}>{` ${firstName}`}</Headline>
      </View>
      <View style={{marginTop:40,
      }}>
      <View>
      <View style={{marginTop:40,}} >
      <Divider/>
      <Divider/>
      </View>
      </View>
      </View>
      <View style={styles.botonAsociar}>
      <View>
      <Button style={styles.iconButtons}>
      <Transfer name="cash-plus" size={30} color="#fff" />
      </Button>
      <Paragraph style={{fontWeight: '700',marginLeft:18}}>Asociar</Paragraph>
      </View>
      </View>
			<View style={styles.botonCompartir}>
			<View>
			<Button
			 onPress={handldeWhatsAppPress}
			 style={styles.iconButtons}>
			<Transfer name="share-outline" size={30} color="#fff" />
			</Button>
			<Paragraph style={{fontWeight: '700',marginLeft:12}}>Compartir</Paragraph>
			</View>
			</View>
  </View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
 		padding: 20,
 		backgroundColor: "#FFFF"
  	},
logo: {
   alignItems:'center',
   marginTop:-10,
},
mainCard: {
	width: 310,
	height: 190,
	padding: 10,
	borderRadius: 20,
	marginTop: 10,
	marginBottom: 10,
	marginLeft: 4
	},
botonAsociar: {
   alignItems:'center',
   marginTop:45,
   marginLeft:-200
},
botonCompartir: {
   alignItems:'center',
   marginTop:-105,
   marginLeft:160
},
iconButtons: {
  backgroundColor: '#006A34',
  marginBottom: 10,
  borderRadius: 20,
  marginTop: 25,
  width:15,
  marginLeft:12
},
  heading: {
    marginBottom: 10,
    marginTop: 10,
 		fontSize: 35,
		alignItems : 'center',
		display: 'flex',
		flexDirection: 'row'
}
});
