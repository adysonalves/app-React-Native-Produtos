import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Button } from "react-native-elements";
import axios from "axios";
import Toast from 'react-native-toast-message';


function Contatos({ route, navigation }) {

  const [list, setlist] = useState([]);
  const [getNome, setNome] = useState();
  const [getCapacidade, setCapacidade] = useState();
  const [getPreco, setPreco] = useState();
  const [getId, setId] = useState();

  useEffect(() => {
    if (route.params) {
      const { nome } = route.params;
      const { capacidade } = route.params;
      const { preco } = route.params;
      const { id } = route.params;

      setNome(nome);
      setCapacidade(capacidade);
      setPreco(preco);
      setId(id);
    }
  }, [])



  async function addProduto() {
    await axios.post('http://192.168.0.28:4002/add-produto', {
      nome: getNome,
      capacidade: getCapacidade,
      preco: getPreco
    }).then(response => {
      Toast.show({
        type: 'success',
        text1: 'Produto adicionado com sucesso!'
      });
      setTimeout(() => {
        navigation.navigate('Produtos');
      }, 2000);
    }).catch(error => {
      Toast.show({
        type: 'error',
        text1: 'Erro ao adicionar o produto!'
      });
    })
  }


  return (
    <View style={{ alignItems: "center" }}>
      <Text>Produto</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setNome(text)}
        value={getNome}
      />

      <Text>Armazenamento</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setCapacidade(text)}
        value={getCapacidade}
      />

      <Text>Preco</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
        keyboardType='numeric'
        onChangeText={text => setPreco(text)}
        value={getPreco}
      />

      <Button title="Salvar produto"
        buttonStyle={{ marginTop: 20, width: 300 }}
        onPress={() => addProduto()}
      />

      <Toast />
    </View>
  )

}

export default Contatos;