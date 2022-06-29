import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';
import { RankingPlayer } from '../../components/RankingPlayer';
import { api } from '../../services/api';
import { styles } from './styles';

export function Ranking() {
  const [ranking, setRanking] = useState([]);
  
  useEffect(() => {
    (async () => {
      api.get("/ranking")
        .then((res) => setRanking(res.data))
        .catch(err => console.log(err));
    })();
  }, []);

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>
          Statistika
        </Text>

        <View style={styles.tableHead}>
          <Text style={styles.column}>
            Slika
          </Text>
          <Text style={styles.column}>
            Ime
          </Text>
          <Text style={styles.column}>
            Poeni
          </Text>
          <Text style={styles.column}>
            Datum poslednje utakmice
          </Text>
          <Text style={styles.column}>
            Akcije
          </Text>
        </View>

        <View style={styles.table}>
          <FlatList
            data={ranking}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <RankingPlayer player={item} />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
            ListHeaderComponent={() => <ListDivider />}
            contentContainerStyle={{ paddingBottom: 100 }}
            style={styles.ranking}
          />
        </View>
      </View>
    </Background>
  )
}
