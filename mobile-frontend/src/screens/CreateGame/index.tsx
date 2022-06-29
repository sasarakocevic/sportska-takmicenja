import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { theme } from '../../global/styles/theme';
import { useMatch } from '../../hooks/useMatch';
import { api } from '../../services/api';
import { styles } from './styles';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {MaterialIcons} from '@expo/vector-icons';


export function CreateGame() {
  const navigation = useNavigation();
  const { createMatch } = useMatch();
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItem] = useState<string[]>([]);
  
  
  useEffect(() => {
    (async () => {
      api.get("/users")
        .then(res => setItems(res.data))
        .catch(err => console.log(err.message));
    })();
  }, []);

  function handleSelectedItems(selectedItem: string[]) {
    setSelectedItem(selectedItem)
  };



  async function handleCreateMatch() {
    try {
      if(selectedItems.length==2) {
        createMatch(selectedItems);
        navigation.navigate("Game" as never)
      }else{
        alert("Morate odabrati 2 tima");
      }
      

    } catch (error: any) {
      console.log(error.message);
      alert(error.message);
    }
  }

  return (
    <Background>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
        style={styles.keyboardView}
      >
        <View style={styles.container}>
          <Text style={styles.title}>
            Dodaj mec
          </Text>

          <View style={styles.select}>
            {/* <MultiSelect
              hideSubmitButton
              uniqueKey="id"
              items={items}
              selectedItems={selectedItems}
              onSelectedItemsChange={handleSelectedItems}
              selectText="Escolha os jogadores"
              searchInputPlaceholderText="Pesquise..."
              searchInputStyle={{ color: 'white' }}

              tagTextColor={theme.colors.heading}
              tagBorderColor={theme.colors.secondary50}
            /> */}

            <SectionedMultiSelect
              IconRenderer={MaterialIcons}
              items={items}
              uniqueKey="id"
              subKey="children"
              selectText="Odaberite timove..."
              showDropDowns={true}
              readOnlyHeadings={false}
              onSelectedItemsChange={handleSelectedItems}
              selectedItems={selectedItems}
              colors= {{
                selectToggleTextColor: 'red',
                chipColor:'red'
              }}
            />
          </View>

          <View style={styles.viewBtn}>
            <Button
              title="Napravi utakmicu"
              onPress={handleCreateMatch}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Background>
  )
}
