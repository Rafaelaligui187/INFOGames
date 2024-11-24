import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import axios from 'axios';

const { width } = Dimensions.get('window');

const GameDetails = () => {
  const { gameId } = useLocalSearchParams();
  const [gameDetails, setGameDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const clientId = '5o4462x5j4ijlrvi0b8mcj3s96dwpi';
        const accessToken = 'kq7czy3yghxsjrx5kinwzjf5x2nzlx';

        const query = `
          fields 
            name, 
            summary, 
            cover.url, 
            screenshots.url, 
            first_release_date, 
            platforms.name, 
            genres.name, 
            involved_companies.company.name, 
            game_modes.name;
          where id = ${gameId};
        `;

        const response = await axios.post(
          'https://api.igdb.com/v4/games',
          query,
          {
            headers: {
              'Client-ID': clientId,
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setGameDetails(response.data[0]);
      } catch (error) {
        console.error('Error fetching game details:', error.response ? error.response.data : error.message);
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

  const renderGameModes = () => {
    return gameDetails?.game_modes?.length ? gameDetails.game_modes.map((mode) => mode.name).join(', ') : 'N/A';
  };

  const handleImagePress = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalVisible(true);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {gameDetails ? (
          <>
            <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
              {gameDetails.cover && (
                <TouchableOpacity onPress={() => handleImagePress(`https:${gameDetails.cover.url.replace('t_thumb', 't_cover_big')}`)}>
                  <Image
                    source={{ uri: `https:${gameDetails.cover.url.replace('t_thumb', 't_cover_big')}` }}
                    style={styles.image}
                  />
                </TouchableOpacity>
              )}
              {gameDetails.screenshots?.map((screenshot, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleImagePress(`https:${screenshot.url.replace('t_thumb', 't_screenshot_big')}`)}
                >
                  <Image
                    source={{ uri: `https:${screenshot.url.replace('t_thumb', 't_screenshot_big')}` }}
                    style={styles.image}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>

            <Text style={styles.title}>{gameDetails.name}</Text>
            <Text style={styles.description}>{gameDetails.summary || 'No description available yet.'}</Text>

            <View style={styles.infoContainer}>
              <Text style={styles.info}>
                <Text style={styles.infoLabel}>Release Year:</Text> {gameDetails.first_release_date ? formatDate(gameDetails.first_release_date) : 'N/A'}
              </Text>
              <Text style={styles.info}>
                <Text style={styles.infoLabel}>Platforms:</Text> {gameDetails.platforms?.map((platform) => platform.name).join(', ') || 'N/A'}
              </Text>
              <Text style={styles.info}>
                <Text style={styles.infoLabel}>Genres:</Text> {gameDetails.genres?.map((genre) => genre.name).join(', ') || 'N/A'}
              </Text>

              <Text style={styles.info}>
                <Text style={styles.infoLabel}>Game Modes:</Text> {renderGameModes()}
              </Text>
            </View>
          </>
        ) : (
          <Text>No game details found.</Text>
        )}

        {/* Full-Screen Image Modal */}
        <Modal
          visible={isModalVisible}
          transparent={true}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            {selectedImage && (
              <Image source={{ uri: selectedImage }} style={styles.fullScreenImage} />
            )}
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
    backgroundColor: '#1a292a',
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
    color: 'white',
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    color: 'white',
    padding: 10,
  },
  infoContainer: {
    marginTop: 16,
    padding: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
    color: 'white',
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default GameDetails;
