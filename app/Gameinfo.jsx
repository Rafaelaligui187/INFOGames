import { StyleSheet, Text, View, ActivityIndicator, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter, useGlobalSearchParams } from 'expo-router';
import axios from 'axios';

const Gameinfo = () => {
  const { gameId } = useGlobalSearchParams(); // Use this instead of useSearchParams
  const [gameDetails, setGameDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGameDetails = async () => {
      if (!gameId) return;

      try {
        const clientId = '5o4462x5j4ijlrvi0b8mcj3s96dwpi';
        const accessToken = 'm6snrsxd6wl2o1v2iz8sjzlonyzskj';

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

        if (response.data.length > 0) {
          setGameDetails(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching game details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [gameId]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#32D3CA" />
      </View>
    );
  }

  if (!gameDetails) {
    return (
      <View style={styles.container}>
        <Text>Game details not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{gameDetails.name}</Text>
      {gameDetails.cover && (
        <Image
          source={{
            uri: gameDetails.cover.url.replace('t_thumb', 't_cover_big') // Ensure the correct size URL
          }}
          style={styles.image}
        />
      )}
      <ScrollView contentContainerStyle={styles.descriptionContainer}>
        <Text style={styles.description}>
          {gameDetails.summary || 'No description available yet.'}
        </Text>
      </ScrollView>
    </View>
  );
};

export default Gameinfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: '100%', // Set width to 100% to make the image take up full width of the screen
    height: 300, // Set a fixed height for better display
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  descriptionContainer: {
    paddingBottom: 20, // Add some padding to the bottom of the description for better appearance
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
  },
});
