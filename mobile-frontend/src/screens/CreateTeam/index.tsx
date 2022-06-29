import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, Text, View,TextInput  } from 'react-native';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';

import { api } from '../../services/api';
import { styles } from './styles';

// const initialNameState = {
//     id: null,
//     name: "",
//     email: "",
//     password: "",
//   };

export function CreateTeam() {

    
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

    // const [user, setUser] = useState(initialNameState);

    const handleClick = async () => {
        api.post('/users', { name:name,email:email,password:password })
        .then(response => console.log(response.data));
        window.location.reload();
   };
    

//   useEffect(() => {
//     (async () => {
//       api.post("/users")
//         .then(res => setName(res.data))
//         .catch(err => console.log(err.message));
//     })();
//   }, []);



//   const saveUser = () => {
//     var data = {
//       name: user.name,
//       email: user.email,
//       password: user.password,
//     };
    
//     api.post("/users", data)
//       .then(response => {
//         setUser({
//           id: response.data.id,
//           name: response.data.name,
//           email: response.data.email,
//           password: response.data.password,
//         });
//         console.log(response.data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

//   function handleInputChange (event: { target: { name: any; value: any; }; }) {
//     const { name, value } = event.target;
//     setUser({ ...user, [name]: value });
//   };



//   function handleSelectedItems(selectedItem: string[]) {
//     setSelectedItem(selectedItem)
//   };



//   async function handleCreateTeam() {
//     try {
//       if(selectedItems.length==2) {
//         createMatch(selectedItems);
//         navigation.navigate("Game" as never)
//       }else{
//         alert("Morate odabrati 2 tima");
//       }
      

//     } catch (error: any) {
//       console.log(error.message);
//       alert(error.message);
//     }
//   }

  return (
    <Background>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
        style={styles.keyboardView}
      >
        <View style={styles.container}>
          <Text style={styles.title}>
            Dodaj Tim
          </Text>

          <View style={styles.select}>
          
            <Text style={styles.text}>Unesite naziv tima</Text>
            <TextInput placeholder='Unesite ime tima' style={styles.textInput} onChangeText={name => setName(name)} value={name}></TextInput>
            <Text style={styles.text}>Unesite broj bodova</Text>
            <TextInput placeholder='Unesite broj bodova' style={styles.textInput} onChangeText={password => setPassword(password)} value={password}></TextInput>
            <Text style={styles.text}>Unesite link avatara</Text>
            <TextInput placeholder='Unesite link avatara' style={styles.textInput} onChangeText={email => setEmail(email)} value={email}></TextInput>
            {/* <TextInput placeholder='Unesite ime mail' style={styles.textInput} onChangeText={() => handleInputChange} value={'123'}></TextInput> */}
          </View>

          <View style={styles.viewBtn}>
            <Button
              title="Napravi Tim"
              onPress={() => handleClick()}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Background>
  )
}
