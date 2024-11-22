import { View, Text, Image, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import axios from 'axios';

const Home = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0); // Track the current page for pagination
  const [hasMore, setHasMore] = useState(true); // Track if there are more games to load

  useEffect(() => {
    fetchGames(); // Fetch games on component mount
  }, []);

  const fetchGames = async (isLoadMore = false) => {
    if (loading || (isLoadMore && !hasMore)) return; // Prevent duplicate fetches
    setLoading(true);
    try {
      const clientId = '5o4462x5j4ijlrvi0b8mcj3s96dwpi';
      const accessToken = 'm6snrsxd6wl2o1v2iz8sjzlonyzskj';
      const offset = isLoadMore ? page * 20 : 0; // Calculate offset for pagination
  
      const response = await axios.post(
        'https://api.igdb.com/v4/games',
        `fields id, name, cover.url; sort popularity desc; limit 20; offset ${offset};`,
        {
          headers: {
            'Client-ID': clientId,
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("Fetched Games:", response.data);

      const fetchedGames = response.data.map((game) => {
        // Check if the cover URL exists and is valid
        const coverUrl = game.cover?.url;
        if (coverUrl) {
          return {
            id: game.id,
            name: game.name,
            source: { uri: coverUrl.replace('t_thumb', 't_cover_big') },
          };
        } else {
          return {
            id: game.id,
            name: game.name,
            source: { uri: 'https://via.placeholder.com/150' }, // Fallback image
          };
        }
      });
  
      setGames((prevGames) => (isLoadMore ? [...prevGames, ...fetchedGames] : fetchedGames));
      setHasMore(fetchedGames.length > 0); // If no games are fetched, stop loading more
      if (isLoadMore) setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching games:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (text) => {
    setSearchQuery(text);
    setPage(0);
    setHasMore(true); // Reset pagination state for search
    if (text.length === 0) {
      fetchGames(); // Reset to random games if search query is cleared
      return;
    }

    setLoading(true);
  try {
    const clientId = '5o4462x5j4ijlrvi0b8mcj3s96dwpi';
    const accessToken = 'kwx509r1frczzx64zzqecqvit2y12z';

    const response = await axios.post(
      'https://api.igdb.com/v4/games',
      `search "${text}"; fields id, name, cover.url; limit 20;`,
      {
        headers: {
          'Client-ID': clientId,
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    console.log("Search Response:", response.data);

    const searchedGames = response.data.map((game) => {
      const coverUrl = game.cover?.url;
      if (coverUrl) {
        return {
          id: game.id,
          name: game.name,
          source: { uri: coverUrl.replace('t_thumb', 't_cover_big') },
        };
      } else {
        return {
          id: game.id,
          name: game.name,
          source: { uri: 'https://via.placeholder.com/150' }, // Fallback image
        };
      }
    });

    setGames(searchedGames);
    setHasMore(searchedGames.length > 0);
  } catch (error) {
    console.error('Error fetching search results:', error);
    setGames([]);
  } finally {
    setLoading(false);
  }
};

  const handleThumbnailPress = (id) => {
    router.push({ pathname: '/Gameinfo', params: { gameId: id } });
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleThumbnailPress(item.id)}>
      <View style={styles.itemContainer}>
        <Image source={item.source} style={styles.image} />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search games"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {loading && page === 0 ? (
        <Text style={{ textAlign: 'center' }}>Loading...</Text>
      ) : (
      <FlatList
        data={games}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.id}-${index}`} // Ensure unique keys by combining id and index
        numColumns={2}
        onEndReached={() => fetchGames(true)} // Load more when reaching the end
        onEndReachedThreshold={0.5} // Trigger when 50% away from the bottom
        ListFooterComponent={loading && <Text style={{textAlign: 'center'}}>Loading more...</Text>} // Show loading indicator at the bottom
    />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    paddingLeft: 8,
    margin: 10,
    borderRadius: 50,
    backgroundColor: '#32D3CA',
  },
  itemContainer: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  text: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 150,
    lineHeight: 18,
  },
});

export default Home;
