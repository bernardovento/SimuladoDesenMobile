import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.containerMor}>
      <View style={styles.container}>
        <Text style={styles.NomeDoItem}>Espada Vorpal</Text>
        <Image
          style={styles.ImagemItem}
          source={require('./img/EspadaVorpal.webp')}
        />
        <Text style={styles.DescricaoItem}>A Espada Vorpal é conhecida como a espada mais letal, ela é uma espada +3 que possui uma chance de 1 em 20 de decapitar o inimigo em cada acerto.</Text>
        
        </View>
        <View style={styles.Botao}>
        <Button 
          title = 'Trocar'
          color= '#808080'
        />
        </View>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding:40
  },
  containerMor: {
    flex: 1,
    backgroundColor: '#cfcfc4',
  },

  DescricaoItem:{
    fontSize: 15,
    textAlign: 'center',
    width: 300,
    flex: 1,
    padding:40
  },
  NomeDoItem: {
    fontWeight: 'bold',
    fontSize: 25,
    flex: 0.3
  },
  ImagemItem: {
    width: 200,
    height: 200,
    borderRadius: 30,
  },
  Botao:{
    alignItems: 'flex-end',
    padding: 100
  },
});
