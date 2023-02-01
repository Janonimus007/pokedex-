import { FlatList, Image, Text, ActivityIndicator, View } from 'react-native';
import React from 'react'
import {AntDesign} from '@expo/vector-icons';
import { styles } from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import { usePokemonPagination } from '../hooks/usePokemonPagination';
import { FadeInImage } from '../components/FadeInImage';
import PokemonCard from '../components/PokemonCard';

export default function HomeScreen() {
  const {top} = useSafeAreaInsets()
  const{simplePokemonList, loadPokemons}=usePokemonPagination()
  console.log(simplePokemonList);
  
  return (
    < >
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <View style={{
        ...styles.globalMargin,
        alignItems:'center'
      }}>
<Text style={{...styles.title,...styles.globalMargin,
              marginTop:top+20,
              marginBottom:top+5

            }}>Pokedex</Text>
      
        <FlatList
          data={simplePokemonList}
          keyExtractor={pokemon => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item})=>(<PokemonCard pokemon={item}/>)}

          onEndReached={loadPokemons}
          onEndReachedThreshold={0.1}

          ListFooterComponent={(
            <ActivityIndicator 
              style={{height:100}}
              color='black'
              size={20}
            />
          )}
        />
      </View>
    </>
  )
}