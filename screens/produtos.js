import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Header, Card, Image } from "react-native-elements";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";




function Produtos({ route, navigation }) {
  const [list, setlist] = useState([]);

  async function consultarDados() {
    await axios.get('http://192.168.0.28:4002/produtos')
       .then(function (response) {
         setlist(response.data)
       }).catch(function (error) {
         console.log(error);
       });

   }

  useEffect(() => {
    navigation.addListener('focus', () => {
      consultarDados();
    })
  }, []);


  return ( 
    <View >
      <Header
        centerComponent={{ text: 'Lista de produtos', style: { color: '#fff', fontSize: 22} }}
        rightComponent={
          <Button
            title="+" onPress={() => {
              navigation.navigate('Inserir')
            }}
            titleStyle={{fontSize: 28, fontWeight: 'bold'}}
          />}
      />
      <ScrollView style={{width:"100%", marginBottom: 120}} >
            
          {
            list.map((u, i) => {
              return (
                <Card containerStyle={{marginBottom: 5, paddingBottom: 20}} key={i} >
                <View>
                  <Image
                    resizeMode="cover"
                    style={{ width: 330, height: 300, alignItems: "center" }}
                    source={{ uri: "https://m.media-amazon.com/images/I/71gm8v4uPBL._SX679_.jpg" }}
                    onPress={() => {
                      navigation.navigate('Editar Produto',{
                        nome: u.nome,
                        capacidade: u.capacidade,
                        preco: u.preco,
                        id: u.id,
                      });
                    }}
                   />
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold' }}>Produto: </Text>
                    <Text>{u.nome}</Text>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold' }}>Armazenamento: </Text>
                    <Text>{u.capacidade}</Text>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold' }}>Preço: </Text>
                    <Text>R${u.preco}</Text>
                    <Card.Divider/>
                  </View>
                </View>
                </Card>
              );
            })
          }
        
      </ScrollView>
    </View>
  )

}

const stylesApp = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default Produtos;