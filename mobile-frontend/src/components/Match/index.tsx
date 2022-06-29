import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { theme } from '../../global/styles/theme';
import { useMatch } from '../../hooks/useMatch';
import { IMatch } from '../../screens/Home';
import { api } from '../../services/api';
import { styles } from './styles';

type MatchProps = {
  match: IMatch;
}

type WinnerType = {
  id: string;
  name: string;
  avatar: string | null;
  ranking: {
    points: number;
  }
}

export function Match({ match }: MatchProps) {
  const { deleteMatch } = useMatch();
  const [winnerinfo, setWinnerinfo] = useState<WinnerType>();
  const { secondary50, secondary70 } = theme.colors;
  const [refreshing, setRefreshing] = React.useState(false);
  
  const wait = (timeout:any) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  };

  useEffect(() => {
    api.get(`/users/info/${match.winner}`)
      .then((res) => setWinnerinfo(res.data))
  }, [])

  const date = new Date(match.created_at);
  const matchDate = new Date(date.getTime()).toLocaleDateString('pt-br')

  function deleteMatchFunction() {
      deleteMatch(match.id)
      setRefreshing(true);
      wait(0.1).then(() => setRefreshing(false));
      window.location.reload();
  }
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <View style={styles.matchContent}>
        {/* <View style={styles.winnerNameContainer}>
          <Text style={styles.winnerColumn}>Timovi</Text>
          <Text style={styles.winnerName}>{match.players.length}</Text>
        </View> */}

        <View style={styles.winnerNameContainer}>
          <Text style={styles.winnerColumn}>Pobjednik</Text>
          <Text style={styles.winnerName}>{winnerinfo?.name}</Text>
        </View>

        <View style={styles.winnerNameContainer}>
          <Text style={styles.winnerColumn}>Broj bodova</Text>
          <Text style={styles.winnerName}>{winnerinfo?.ranking.points}</Text>
        </View>

        <View style={styles.winnerNameContainer}>
          <Text style={styles.winnerColumn}>Datum igranja</Text>
          <Text style={styles.winnerName}>
            {matchDate}
          </Text>
        </View>

        <View style={styles.winnerNameContainer}>
          <Text style={styles.winnerColumn}>Dugme</Text>
          <Pressable  style={styles.button1} onPress={() => deleteMatchFunction()}><Text style={styles.text}>Obrisi</Text></Pressable >
        </View>
      </View>
    </LinearGradient>
  )
}
