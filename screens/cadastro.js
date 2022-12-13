import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Button } from "react-native-elements";
import styles from "./styles";
import axios from "axios";
import stylesForm from '../src/components/Form/style';
import Toast from 'react-native-toast-message';



function Cadastro({ navigation }) {

  const [getNome, setNome] = useState();
  const [getEmail, setEmail] = useState();
  const [getSenha, setSenha] = useState();

  async function addUser() {
    await axios.post('http://192.168.0.28:4002/add-user', {
      nome: getNome,
      email: getEmail,
      senha: getSenha
    }).then(response => {
      Toast.show({
        type: 'success',
        text1: 'Sua conta foi criada com sucesso!'
      });
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000)
      
    }).catch(err => { 
      Toast.show({
        type: 'error',
        text1: 'Erro ao criar conta! Tente novamente.'
      });
    });
  }

  return (
    <View style={styles.container}>

      <Text style={stylesForm.label}>Nome</Text>
      <TextInput style={stylesForm.input} onChangeText={text => setNome(text)} value={getNome} />

      <Text style={stylesForm.label}>E-mail</Text>
      <TextInput style={stylesForm.input} onChangeText={text => setEmail(text)} value={getEmail} />

      <Text style={stylesForm.label}>Senha</Text>
      <TextInput secureTextEntry={true} style={stylesForm.input} onChangeText={text => setSenha(text)} value={getSenha} />

      <Button title={'Criar conta'} titleStyle={{ fontSize: 28, fontWeight: 'bold' }} buttonStyle={styles.buttonLog} onPress={() => addUser()} />

      <Toast />
    </View>
  )

}

export default Cadastro;