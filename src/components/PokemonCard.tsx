import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import React from 'react'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage';
import ImageColors from 'react-native-image-colors'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigator';
const windowWidth = Dimensions.get('window').width

interface Props{
  pokemon:SimplePokemon
}

export default function PokemonCard({pokemon}:Props) {
  const [bgColor, setBgColor] = React.useState('#93F8C9')
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>()


  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={()=>navigation.navigate('PokemonScreen',{simplePokemon:pokemon,color:'#93F8C9'})}
    >
      <View style={{...styles.cardContainer,width:windowWidth * 0.40,backgroundColor:bgColor}}> 
      {/* Nombre e id del pokemon */}
        <View>
          <Text style={styles.name}>
            {pokemon.name}
            {'\n#'+pokemon.id}
          </Text>
        </View>
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokebola}
        />
        <FadeInImage
          uri={pokemon.picture}
          style={styles.pokemonImage}          
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer:{
    marginHorizontal:10,
    marginVertical:10,
    // backgroundColor:'#93F8C9',
    height:120,
    borderRadius:10,
    flex:1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  name:{
    color:'black',
    fontSize:20,
    fontWeight:'bold',
    top:20,
    left:10
  },
  pokebola:{
    width:100,
    height:100,
    position:'absolute',
    bottom:-20,
    right:-20,
    opacity:0.5
  },
  pokemonImage:{
    width:100,
    height:100,
    position:'absolute',
    bottom:-11,
    right:-9
    
  }
})