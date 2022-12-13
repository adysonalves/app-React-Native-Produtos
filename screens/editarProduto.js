import { View, Text, TextInput } from "react-native";
import { Button } from "react-native-elements";
import axios from "axios";
import { useEffect, useState } from "react";
import Toast from 'react-native-toast-message';


function Produtos({ route, navigation }) {

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



  async function alterarDados() {
    await axios.put('http://192.168.0.28:4002/editar-produto/' + getId, {
      nome: getNome,
      capacidade: getCapacidade,
      preco: getPreco
    }).then(response => {
      Toast.show({
        type: 'success',
        text1: 'Produto alterado com sucesso!'
      });
      setTimeout(() => {
        navigation.navigate('Produtos');
      }, 2000);
    }).catch(error => {
      Toast.show({
        type: 'error',
        text1: 'Ocorreu um erro ao tentar atualizar o produto.'
      });
    })
  }

  async function deletarDados() {
    await axios.delete('http://192.168.0.28:4002/delete-produto/' + getId).then(response => {
      Toast.show({
        type: 'success',
        text1: 'Produto excluído com sucesso!'
      });
      setTimeout(() => {
        navigation.navigate('Produtos');
      }, 2000);
    }).catch(error => {
      console.log(error);
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

      <Button title="Salvar"
        buttonStyle={{ marginTop: 20, width: 300 }}
        onPress={() => alterarDados()}
      />

      <Button title="Excluir"
        buttonStyle={{ marginTop: 20, width: 300, backgroundColor: 'red' }}
        onPress={() => deletarDados()}
      />

      <Toast />
    </View>
  )

}

export default Produtos;