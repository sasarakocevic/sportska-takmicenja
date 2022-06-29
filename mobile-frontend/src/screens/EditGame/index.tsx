import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, Text, View,TextInput  } from 'react-native';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';

import { api } from '../../services/api';
import { styles } from './styles';

export function EditTeam() {
    const navigation = useNavigation();

    const [isLoading, setLoading] = React.useState(true);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPasswprd] = React.useState('');

    function goToHome() {
        navigation.navigate("Home" as never)
      }
    
    
    const handleClick = async () => {
        api.put("/user", { name:name,password:password,email:email })
            .then(response => console.log(response.data));
    };



  return (
    <Background>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
        style={styles.keyboardView}
      >
        <View style={styles.container}>
          <Text style={styles.title}>
            Uredi Tim
          </Text>

          <View style={styles.select}>
          
            <Text style={styles.text}>Unesite naziv tima</Text>
            <TextInput placeholder='Unesite ime tima' style={styles.textInput} onChangeText={name => setName(name)}></TextInput>
            <Text style={styles.text}>Unesite broj bodova</Text>
            <TextInput placeholder='Unesite broj bodova' style={styles.textInput} onChangeText={password => setPasswprd(password)}></TextInput>
            <Text style={styles.text}>Unesite link avatara</Text>
            <TextInput placeholder='Unesite link avatara' style={styles.textInput} onChangeText={email => setEmail(email)}></TextInput>
            {/* <TextInput placeholder='Unesite ime mail' style={styles.textInput} onChangeText={() => handleInputChange} value={'123'}></TextInput> */}
          </View>

          <View style={styles.viewBtn}>
            <Button
              title="Uredi"
              onPress={() => handleClick()} 
            />
            <Button
              title="Odustani"
              onPress={goToHome}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Background>
  )
}
