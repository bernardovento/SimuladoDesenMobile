import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.containerMor}>
      <View style={styles.container}>
        <Text style={styles.NomeDoItem}>Arco do Juramento</Text>
        <Image
          style={styles.ImagemItem}
          source={require('./img/ArcoDoJuramento.jpg')}
        />
        <Text style={styles.DescricaoItem}>O Arco do Juramento é um arco mágico que causa mais dano nos seus inimigos jurados, jure alguém como seu inimigo em elfico, com isso passará a dar o dobro do dano.</Text>
        
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
