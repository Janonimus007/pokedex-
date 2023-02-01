import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import { PokemonFull } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage'

interface Props{
  pokemon:PokemonFull
}

export default function PokemonDetails({pokemon}:Props) {
  return (
    <ScrollView style={{...StyleSheet.absoluteFillObject}}>
      <View style={{...styles.container,marginTop:310}}>

        <Text style={styles.title}>Types</Text>
        <View style={{flexDirection:'row'}}>
          {
            pokemon.types.map(({type},index)=>(
              <Text style={{...styles.regularText,marginRight:10}} key={type.name+index}>
                {type.name}
              </Text>
            ))
          }          
        </View>
        <Text style={styles.title}>Peso</Text>
        <Text style={styles.regularText}>{pokemon.weight} kg</Text>
      </View>

      <View style={{marginHorizontal:20}}>
        <Text style={styles.title}>Sprites</Text>
      </View>

      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprite}
        />    
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprite}
        />                        
      </ScrollView>

      <View style={styles.container}>
        <Text style={styles.title}>
            Habilidades base
        </Text>
        <View style={{flexDirection:'row'}}>
          {
            pokemon.abilities.map(({ability},index)=>(
              <Text style={{...styles.regularText,marginRight:10}} key={ability.name+index}>
                {ability.name}
              </Text>
            ))
          }          
        </View>        
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>
            Movimientos
        </Text>
        <View style={{flexWrap:'wrap',flexDirection:'row'}}>
          {
            pokemon.moves.map(({move},index)=>(
              <Text style={{...styles.regularText,marginRight:10}} key={move.name+index}>
                {move.name}
              </Text>
            ))
          }          
        </View>        
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>
            Stats
        </Text>
        <View style={{
          // flexWrap:'wrap',flexDirection:'row'
          marginBottom:20
        }}>
          {
            pokemon.stats.map((stat,index)=>(
              <View style={{flexDirection:'row',marginBottom:5}} key={stat.stat.name+index}>
                <Text style={{...styles.regularText,marginRight:10,
                width:170}} >
                  {stat.stat.name}
                </Text>    
                <Text style={{...styles.regularText,marginRight:10}} >
                  {stat.base_stat}
                </Text>                            
              </View>

            ))
          }          
        </View>        
      </View>      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal:20,
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:20
  },
  regularText:{
    fontSize:19
  },
  basicSprite:{
    width:110,
    height:100
  }
})