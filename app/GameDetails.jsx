import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import axios from 'axios';

const GameDetails = () => {
  const { gameId } = useLocalSearchParams(); // Retrieve gameId
  const [gameDetails, setGameDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const clientId = '5o4462x5j4ijlrvi0b8mcj3s96dwpi';
        const accessToken = 'kq7czy3yghxsjrx5kinwzjf5x2nzlx';

        const response = await axios.post(
          'https://api.igdb.com/v4/games',
          `fields name, summary, cover.url; where id = ${gameId};`,
          {
            headers: {
              'Client-ID': clientId,
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setGameDetails(response.data[0]);
      } catch (error) {
        console.error('Error fetching game details:', error.message);
      } finally {
        setLoading(false);
      }
    };

    if (gameId) {
      fetchGameDetails();
    }
  }, [gameId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
      {gameDetails ? (
        <>
          {gameDetails.cover && (
            <Image
              source={{ uri: `https:${gameDetails.cover.url.replace('t_thumb', 't_cover_big')}` }}
              style={styles.image}
            />
          )}
          <Text style={styles.title}>{gameDetails.name}</Text>
          <Text style={styles.description}>{gameDetails.summary || 'No description available.'}</Text>
        </>
      ) : (
        <Text>No game details found.</Text>
      )}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
  },
});

export default GameDetails;
