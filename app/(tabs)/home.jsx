import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';

const Home = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1); 
  const [isEndReached, setIsEndReached] = useState(false); 
  const router = useRouter();

  // Fetch games on component mount and page change
  useEffect(() => {
    fetchGames(page);
  }, [page]);

  const fetchGames = async (pageNumber) => {
    setLoading(true);
    try {
      const clientId = '5o4462x5j4ijlrvi0b8mcj3s96dwpi'; // Replace with your IGDB Client-ID
      const accessToken = 'kq7czy3yghxsjrx5kinwzjf5x2nzlx'; // Replace with your IGDB Access Token

      const response = await axios.post(
        'https://api.igdb.com/v4/games',
        `fields id, name, cover.url; sort popularity desc; limit 10; offset ${(pageNumber - 1) * 10};`,
        {
          headers: {
            'Client-ID': clientId,
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const formattedGames = response.data.map((game) => ({
        id: game.id,
        name: game.name,
        coverUrl: game.cover
          ? `https:${game.cover.url.replace('t_thumb', 't_cover_big')}`
          : null,
      }));

      
      if (formattedGames.length < 10) {
        setIsEndReached(true);
      }

      setGames((prevGames) => [...prevGames, ...formattedGames]);
    } catch (error) {
      console.error('Error fetching games:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (text) => {
    setSearchQuery(text);
  
    
    if (!text.trim()) {
      setGames([]); 
      fetchGames(page); 
      return;
    }
  
    setLoading(true);
    try {
      const clientId = '5o4462x5j4ijlrvi0b8mcj3s96dwpi'; // Replace with your IGDB Client-ID
      const accessToken = 'kq7czy3yghxsjrx5kinwzjf5x2nzlx'; // Replace with your IGDB Access Token
  
      
      await new Promise((resolve) => setTimeout(resolve, 1000));
  
      const query = `search "${text}"; fields id, name, cover.url; limit 10;`;
  
      if (text.trim()) { 
        console.log('Making request with query:', query); 
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
  
        const formattedGames = response.data.map((game) => ({
          id: game.id,
          name: game.name,
          coverUrl: game.cover
            ? `https:${game.cover.url.replace('t_thumb', 't_cover_big')}`
            : null,
        }));
  
        setGames(formattedGames);
      }
    } catch (error) {
      console.error('Error fetching games:', error.message);
      if (error.response) {
        console.error('Response data:', error.response.data); 
      }
      if (error.response && error.response.status === 400) {
        console.log('Bad request error. Please check the query or API parameters.');
      }
    } finally {
      setLoading(false);
    }
  };

  const renderGameItem = ({ item }) => (
    <TouchableOpacity
      style={styles.gameItem}
      onPress={() => router.push(`/GameDetails?gameId=${item.id}`)} // Navigate to GameDetails
    >
      {item.coverUrl ? (
        <Image source={{ uri: item.coverUrl }} style={styles.gameImage} />
      ) : (
        <View style={styles.noImage}>
          <Text>No Image</Text>
        </View>
      )}
      <Text style={styles.gameTitle}>{item.name}</Text>
    </TouchableOpacity>
  );
  
  // Use the index and id to create a unique key
  const keyExtractor = (item, index) => `${item.id}-${index}`;

  // Function to trigger when the user reaches the bottom of the list
  const handleLoadMore = () => {
    if (!loading && !isEndReached) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search games"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {loading && page === 1 ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={games}
          keyExtractor={keyExtractor}  // Updated keyExtractor to ensure unique keys
          renderItem={renderGameItem}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    backgroundColor: '#32D3CA',
  },
  listContainer: {
    paddingBottom: 16,
  },
  gameItem: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  gameImage: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  noImage: {
    width: 150,
    height: 150,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  gameTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
