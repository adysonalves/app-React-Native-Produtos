import React, {useState} from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './style';


export default function Form() {

    return (
        <View>
            <Text style={styles.label}>Login</Text>
            <TextInput style={styles.input}  />

            <Text style={styles.label}>Senha</Text>
            <TextInput secureTextEntry={true} style={styles.input} />

        </View>
    );
}