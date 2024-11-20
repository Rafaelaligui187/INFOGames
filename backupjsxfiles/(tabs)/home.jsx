import { View, Text, Image, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();
  
  const images = [
    { name: "God of War", source: require('../../assets/Gameicon/godofwar.jpg') },
    { name: "Assassin Creed Unity", source: require('../../assets/Gameicon/ASunity.jpg') },
    { name: "Crossfire", source: require('../../assets/Gameicon/cf.png') },
    { name: "DayZ", source: require('../../assets/Gameicon/dayz.png') },
    { name: "Defend of the Ancient", source: require('../../assets/Gameicon/dota2.jpg') },
    { name: "Formula 1 2024", source: require('../../assets/Gameicon/f12024.jpg') },
    { name: "Genshin Impact", source: require('../../assets/Gameicon/GEn.png') },
    { name: "Ghost of Tsushima", source: require('../../assets/Gameicon/ghostoftsushima.jpg') },
    { name: "Grand Theft Auto V", source: require('../../assets/Gameicon/gtav.jpg') },
    { name: "Infamous", source: require('../../assets/Gameicon/infamous.jpg') },
    { name: "Naruto Ninja Storm", source: require('../../assets/Gameicon/narutoninjastorm.jpg') },
    { name: "NBA 2K24", source: require('../../assets/Gameicon/nba2k24.jpeg') },
    { name: "Prototype", source: require('../../assets/Gameicon/prototype.jpg') },
    { name: "Roblox", source: require('../../assets/Gameicon/roblox.jpg') },
    { name: "Sleeping Dogs", source: require('../../assets/Gameicon/sleepingdogs.jpg') },
    { name: "Spider-Man", source: require('../../assets/Gameicon/spiderman.jpg') },
    { name: "Stardew Valley", source: require('../../assets/Gameicon/stardewvalley.png') },
    { name: "Watch Dogs", source: require('../../assets/Gameicon/watchdogs.jpg') },
    { name: "Minecraft", source: require('../../assets/Gameicon/minecraft.jpg')},
    { name: "Little Nightmares II", source: require('../../assets/Gameicon/Littlenightmares2.jpg')},
    { name: "Counter Strike Global Offensive", source: require('../../assets/Gameicon/csgo.jpg')},
    { name: "League of Legends", source: require('../../assets/Gameicon/LOL.jpg')},
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
    padding: 0,
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
    flex: 1,
    alignItems: 'center',
    margin: 15,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  text: {
    marginTop: 5,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
