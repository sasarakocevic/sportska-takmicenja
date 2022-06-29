import React from 'react';
import { Button, Pressable, Text, View } from 'react-native';
import { Avatar } from '../Avatar';
import { ListDivider } from '../ListDivider';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { useMatch } from '../../hooks/useMatch';

type PlayerObj = {
  id: string;
  points: number;
  updated_at: string;
  user: {
    name: string;
    email: string;
  }
}

interface IPlayer {
  player: PlayerObj;
}

export function RankingPlayer({ player }: IPlayer) {
  
  const { players, setPoints, winner, setWinner, deleteMatch, match } = useMatch();
  const navigation = useNavigation();
  const date = new Date(player.updated_at);
  const fullDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  

  async function deleteUser(id: string) {
    try {
      await api.delete(`/ranking/${id}`)
      console.log(id)
    } catch (error: any) {
      console.log(error.message);
      throw new Error(error);
    }
  }

  function deleteU (){
    deleteUser(player.id);
    console.log(player.id)
    window.location.reload();
  }


  
  function Edit() {
    navigation.navigate("EditTeam" as never)
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.rankingColumn}>
          <Avatar urlImage='' />
        </View>

        <View style={styles.rankingColumn}>
          <Text style={styles.playerName}>
            { player.user.name }
          </Text>
        </View>

        <View style={styles.rankingColumn}>
          <Text style={styles.points}>
            { player.points }
          </Text>
        </View>

        <View style={styles.rankingColumn}>
          <Text style={styles.lastWin}>
            { fullDate }
          </Text>
        </View>
        <View>
          <Pressable  style={styles.button1} onPress={() => deleteU()}><Text style={styles.text}>Obrisi</Text></Pressable >
          <Pressable style={styles.button2} onPress={() => Edit()}><Text style={styles.text}>Uredi</Text></Pressable >
        </View>
      </View>
      <ListDivider />
    </>
  )
}
