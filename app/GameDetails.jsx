import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, ScrollView, Dimensions } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import axios from 'axios';

const { width } = Dimensions.get('window'); // Get screen width for image sizing

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
          `fields name, summary, cover.url, screenshots.url, first_release_date, platforms.name, genres.name, involved_companies.company.name; 
           where id = ${gameId};`,
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

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
  };

  const renderCompanies = () => {
    return gameDetails.involved_companies?.map((company) => company.company.name).join(', ') || 'N/A';
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {gameDetails ? (
          <>
            <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
              {gameDetails.cover && (
                <Image
                  source={{ uri: `https:${gameDetails.cover.url.replace('t_thumb', 't_cover_big')}` }}
                  style={styles.image}
                />
              )}
              {gameDetails.screenshots &&
                gameDetails.screenshots.map((screenshot, index) => (
                  <Image
                    key={index}
                    source={{ uri: `https:${screenshot.url.replace('t_thumb', 't_screenshot_big')}` }}
                    style={styles.image}
                  />
                ))}
            </ScrollView>
            <Text style={styles.title}>{gameDetails.name}</Text>
            <Text style={styles.description}>{gameDetails.summary || 'No description available.'}</Text>

            <View style={styles.infoContainer}>
              <Text style={styles.info}>
                <Text style={styles.infoLabel}>Release Year:</Text>{' '}
                {gameDetails.first_release_date ? formatDate(gameDetails.first_release_date) : 'N/A'}
              </Text>
              <Text style={styles.info}>
                <Text style={styles.infoLabel}>Platforms:</Text>{' '}
                {gameDetails.platforms?.map((platform) => platform.name).join(', ') || 'N/A'}
              </Text>
              <Text style={styles.info}>
                <Text style={styles.infoLabel}>Genres:</Text>{' '}
                {gameDetails.genres?.map((genre) => genre.name).join(', ') || 'N/A'}
              </Text>
              <Text style={styles.info}>
                <Text style={styles.infoLabel}>Involved Companies:</Text> {renderCompanies()}
              </Text>
            </View>
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
  imageContainer: {
    marginBottom: 16,
  },
  image: {
    width,
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  infoContainer: {
    marginTop: 16,
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
});

export default GameDetails;
