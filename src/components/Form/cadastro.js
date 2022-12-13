import {Text, TextInput, View} from 'react-native';
import styles from './style';

export default function Form(){
    return ( 
    <View>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Senha</Text>
        <TextInput secureTextEntry={true} style={styles.input} />

    </View>
    );
}