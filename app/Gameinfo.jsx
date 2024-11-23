import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';

const Gameinfo = () => {
  const router = useRouter();
  const { gameId } = router.params; // Get the gameId passed from Home screen

  const [gameDetails, setGameDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGameDetails(gameId);
  }, [gameId]);

  const fetchGameDetails = async (id) => {
    setLoading(true);
    try {
      const clientId = '5o4462x5j4ijlrvi0b8mcj3s96dwpi'; // Replace with your IGDB Client-ID
      const accessToken = 'kq7czy3yghxsjrx5kinwzjf5x2nzlx'; // Replace with your IGDB Access Token

      const response = await axios.post(
        'https://api.igdb.com/v4/games',
        `fields name, cover.url, first_release_date, summary; where id = ${id};`,
        {
          headers: {
            'Client-ID': clientId,
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const gameData = response.data[0];
      setGameDetails({
        name: gameData.name,
        coverUrl: gameData.cover ? `https:${gameData.cover.url.replace('t_thumb', 't_cover_big')}` : null,
        releaseDate: gameData.first_release_date
          ? new Date(gameData.first_release_date * 1000).toLocaleDateString()
          : 'Unknown',
        summary: gameData.summary || 'No description available.',
      });
    } catch (error) {
      console.error('Error fetching game details:', error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!gameDetails) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No details available for this game.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: gameDetails.coverUrl }} style={styles.image} />
      <Text style={styles.title}>{gameDetails.name}</Text>
      <Text style={styles.releaseDate}>Release Date: {gameDetails.releaseDate}</Text>
      <Text style={styles.summary}>{gameDetails.summary}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  releaseDate: {
    fontSize: 16,
    marginVertical: 5,
  },
  summary: {
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Gameinfo;
