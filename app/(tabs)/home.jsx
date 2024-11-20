import { View, Text, Image, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();
  
  const images = [
    { name: "God of War", source: { uri: "https://static.posters.cz/image/750/plakaty/playstation-god-of-war-i116582.jpg" } },
    { name: "Assassin Creed Unity", source: { uri: "https://upload.wikimedia.org/wikipedia/en/4/41/Assassin%27s_Creed_Unity_cover.jpg" } },
    { name: "Crossfire", source: { uri: "https://mmoculture.com/wp-content/uploads/2020/02/CrossFire-new-image.png" } },
    { name: "DayZ", source: { uri: "https://static-cdn.jtvnw.net/ttv-boxart/65632_IGDB-272x380.jpg" } },
    { name: "Dota 2", source: { uri: "https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Dota_2_Steam_artwork.jpg/220px-Dota_2_Steam_artwork.jpg" } },
    { name: "Formula 1 2024", source: { uri: "https://upload.wikimedia.org/wikipedia/en/5/55/F1_24_cover_art.jpg" } },
    { name: "Genshin Impact", source: { uri: "https://laz-img-sg.alicdn.com/p/5aed6972debf08bb54bbd759ebd19a38.png" } },
    { name: "Ghost of Tsushima", source: { uri: "https://helios-i.mashable.com/imagery/articles/00iMVz5oU69RK9UEoPsZTMW/hero-image.fill.size_1248x702.v1623390188.jpg" } },
    { name: "Grand Theft Auto V", source: { uri: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Grand_Theft_Auto_V.png/220px-Grand_Theft_Auto_V.png" } },
    { name: "Infamous", source: { uri: "https://upload.wikimedia.org/wikipedia/en/2/2b/Infamous-cover.jpg" } },
    { name: "Naruto Ninja Storm", source: { uri: "https://upload.wikimedia.org/wikipedia/en/4/44/Naruto-_Ultimate_NS1_box_art.jpg" } },
    { name: "NBA 2K24", source: { uri: "https://4kwallpapers.com/images/wallpapers/nba-2k24-2023-games-768x1024-12701.jpg" } },
    { name: "Prototype", source: { uri: "https://images2.alphacoders.com/167/167390.jpg" } },
    { name: "Roblox", source: { uri: "https://images.rbxcdn.com/5348266ea6c5e67b19d6a814cbbb70f6.jpg" } },
    { name: "Sleeping Dogs", source: { uri: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Sleeping_Dogs_-_Square_Enix_video_game_cover.jpg/220px-Sleeping_Dogs_-_Square_Enix_video_game_cover.jpg" } },
    { name: "Spider-Man", source: { uri: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Spider-Man_PS4_cover.jpg/220px-Spider-Man_PS4_cover.jpg" } },
    { name: "Stardew Valley", source: { uri: "https://images4.alphacoders.com/782/782781.png" } },
    { name: "Watch Dogs", source: { uri: "https://m.media-amazon.com/images/M/MV5BMjRhMmRhYjItMmFkNC00MDk0LTkxMDMtZmY3ZWEwMDJjNmFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" } },
    { name: "Minecraft", source: { uri: "https://m.media-amazon.com/images/M/MV5BNjQzMDlkNDctYmE3Yi00ZWFiLTlmOWYtMjI4MzQ4Y2JhZjY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" } },
  ];
  

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredImages, setFilteredImages] = useState(images); 

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = images.filter((image) =>
      image.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredImages(filtered);
  };

  const handleThumbnailPress = (name) => {
    router.push({ pathname: '/Gameinfo', params: { game: name } }); 
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleThumbnailPress(item.name)}>
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
        placeholder="Search"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredImages} 
        renderItem={renderItem}
        keyExtractor={item => item.name}
        numColumns={2}
      />
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
    borderRadius: 5,
    backgroundColor: '#32D3CA',
  },
  itemContainer: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    alignItems: 'center',
    width: 150,
    height: 200,
    resizeMode: "stretch",
    borderRadius: 10,
  },
  text: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
