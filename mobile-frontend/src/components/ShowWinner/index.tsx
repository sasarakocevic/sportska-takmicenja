import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { api } from '../../services/api';
import { styles } from './styles';
import { useMatch } from '../../hooks/useMatch';

type PlayerType = {
  id: string,
  name?: string,
  avatar: string | null,
  ranking: {
    points: number,
  }
}

export function ShowWinner() {
  const { winner, match } = useMatch();
  const [newPoints, setNewPoints] = useState();
  const [playerWinner, setPlayerWinner] = useState<PlayerType | null>();

  useEffect(() => {
    (async () => {
      const { data: playerWinnerData } = await api.get(`/users/info/${winner?.player}`);
      setPlayerWinner(playerWinnerData);

      api.put('/ranking', { userId: playerWinnerData?.id })
        .then((res) => setNewPoints(res.data.points))//dodaje 3 poena

      await api.put(`/matches/${match?.id}`, { winnerId: playerWinnerData.id })
      
    })(); setTimeout(function(){ location.reload(); }, 2000);
  }, [winner]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
      { `${playerWinner?.name} je pobijedio!` }
      </Text>
      <Text style={styles.point}>
        { `Trenutno ima: ${newPoints} poena` }
      </Text>
    </View>
  )
}
