import { View, StyleSheet, TouchableOpacity, Text, Image, ActivityIndicator } from 'react-native';
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/Navigator'
import {AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import usePokemon from '../hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'>{}

export default function PokemonScreen(props:Props) {
  const {simplePokemon,color} =props.route.params
  const {id,name,picture} = simplePokemon
  const navigation = useNavigation()
  const {top} = useSafeAreaInsets()

  const {isLoading,pokemon} = usePokemon(id)
  
  return (
    <View style={{flex:1}}>
      <View style={{
        ...styles.headerContainer,
        backgroundColor:color,paddingTop:top
      }}>
        <TouchableOpacity
          style={{...styles.backButton,marginTop:top}}
          onPress={()=>{navigation.goBack()}}
        >
          <AntDesign
            name='back'
            size={40}
            color='black'
          />
        </TouchableOpacity>
        <Text style={styles.pokemonName}>
          {name}
        </Text>
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokeball}
        />
        <FadeInImage
          uri={picture}
          style={styles.pokemonImage}

        />
      </View>    
      {/* detalles y loading   */}
      {
        isLoading?(
          <View style={styles.loadingIndicator}>
            <ActivityIndicator
              color='black'
              size={65}
            />
          </View>          
        ):(
          <PokemonDetails pokemon={pokemon}/>
        )
      }

    </View>

  )
}

const styles = StyleSheet.create({
  headerContainer:{
    height:320,
    zIndex:999,
    alignItems:'center',
    borderBottomRightRadius:200,
    // borderBottomLeftRadius:200

  },
  backButton:{
    position:'absolute',
     left:10,
  },
  pokemonName:{
    color:'black',
    fontWeight:'bold',
    fontSize:25
  },
  pokeball:{
    width:250,
    height:250,
    bottom:-20,
    opacity:0.5
    
  },
  pokemonImage:{
    width:250,
    height:250,
    bottom:-15,
    position:'absolute'
  },
  loadingIndicator:{
    flex:1,
    justifyContent:'center'
  }
})