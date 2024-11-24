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

  useEffect(() => {
    fetchGames(page);
  }, [page]);

  const fetchGames = async (pageNumber) => {
    setLoading(true);
    try {
      const clientId = '5o4462x5j4ijlrvi0b8mcj3s96dwpi';
      const accessToken = 'kq7czy3yghxsjrx5kinwzjf5x2nzlx';

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
      const clientId = '5o4462x5j4ijlrvi0b8mcj3s96dwpi';
      const accessToken = 'kq7czy3yghxsjrx5kinwzjf5x2nzlx';

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const query = `search "${text}"; fields id, name, cover.url; limit 10;`;

      if (text.trim()) {
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
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setGames([]);
    fetchGames(1);
    setPage(1);
    setIsEndReached(false);
  };

  const renderGameItem = ({ item }) => (
    <TouchableOpacity
      style={styles.gameItem}
      onPress={() => router.push(`/GameDetails?gameId=${item.id}`)}
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

  const handleLoadMore = () => {
    if (!loading && !isEndReached) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <View className="bg-slate-800" style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search games"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity style={styles.clearButton} onPress={clearSearch}>
            <Text style={styles.clearText}>X</Text>
          </TouchableOpacity>
        )}
      </View>
      {loading && page === 1 ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(item, index) => `${item.id}-${index}`}
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
  searchContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    paddingRight: 40, // Add padding to make space for the "X" button
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    top: 8,
    padding: 5,
    backgroundColor: '#ccc',
    borderRadius: 50,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
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
    color: 'white',
  },
});

export default Home;
