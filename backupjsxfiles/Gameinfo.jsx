import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const Gameinfo = () => {
  const { game } = useLocalSearchParams(); 

  const gameInfo = {


    ///////////////INFORMATION SA MGA GAMES//////////////////////////
    "God of War": {
      name: "God of War",
      description: `God of War is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. Released in 2018, the game serves as a soft reboot of the God of War series, focusing on Norse mythology. Players follow Kratos, a former Greek God, as he embarks on a journey with his son Atreus to fulfill his wife's final wish.`,
      releaseDate: "April 20, 2018",
      developer: "Santa Monica Studio",
      platform: "PlayStation 4, PlayStation 5, Microsoft Windows",
      genre: "Action-adventure",
      image: require('../assets/Gameicon/godofwar.jpg'),
    },
    "Assassin Creed Unity": {
      name: "Assassin Creed Unity",
      description: `Assassin's Creed Unity is an action-adventure game developed by Ubisoft. Released in 2014, it is set in Paris during the French Revolution and features Arno Dorian as he seeks to uncover the truth behind his father's murder.`,
      releaseDate: "October 28, 2014",
      developer: "Ubisoft",
      platform: "PlayStation 4, Xbox One, Microsoft Windows",
      genre: "Action-adventure",
      image: require('../assets/Gameicon/ASunity.jpg'),
    },
    "Crossfire": {
      name: "Crossfire",
      description: `Crossfire is a tactical first-person shooter developed by Smilegate Entertainment. Released in 2007, it features two factions battling against each other in various game modes.`,
      releaseDate: "May 3, 2007",
      developer: "Smilegate Entertainment",
      platform: "Microsoft Windows",
      genre: "First-person shooter",
      image: require('../assets/Gameicon/cf.png'),
    },
    "DayZ": {
      name: "DayZ",
      description: `DayZ is a survival video game developed by Bohemia Interactive. Released in 2013, it places players in a post-apocalyptic world where they must survive against zombies and other players.`,
      releaseDate: "December 16, 2013",
      developer: "Bohemia Interactive",
      platform: "Microsoft Windows, Xbox One, PlayStation 4",
      genre: "Survival",
      image: require('../assets/Gameicon/dayz.png'),
    },
    "Defend of the Ancient": {
      name: "Defend of the Ancient",
      description: `Defense of the Ancients (DotA) is a multiplayer online battle arena (MOBA) mod for Warcraft III. It has evolved into a standalone game, Dota 2, developed by Valve Corporation.`,
      releaseDate: "2003 (as a mod), Dota 2 released on July 9, 2013",
      developer: "Valve Corporation",
      platform: "Microsoft Windows, macOS, Linux",
      genre: "MOBA",
      image: require('../assets/Gameicon/dota2.jpg'),
    },
    "Formula 1 2024": {
      name: "Formula 1 2024",
      description: `Formula 1 2024 is a racing simulation video game developed by Codemasters and published by EA Sports. It features all teams, drivers, and circuits from the 2024 Formula 1 season.`,
      releaseDate: "Scheduled for release in 2024",
      developer: "Codemasters",
      platform: "Multiple platforms including PlayStation, Xbox, and PC",
      genre: "Racing",
      image: require('../assets/Gameicon/f12024.jpg'),
    },
    "Genshin Impact": {
      name: "Genshin Impact",
      description: `Genshin Impact is an action role-playing game developed and published by miHoYo. Released in 2020, it features an open world and action-based battle system, with a gacha system for character acquisition.`,
      releaseDate: "September 28, 2020",
      developer: "miHoYo",
      platform: "Multiple platforms including PlayStation, PC, iOS, and Android",
      genre: "Action role-playing",
      image: require('../assets/Gameicon/GEn.png'),
    },
    "Ghost of Tsushima": {
      name: "Ghost of Tsushima",
      description: `Ghost of Tsushima is an action-adventure game developed by Sucker Punch Productions. Released in 2020, it follows samurai Jin Sakai as he fights against the Mongol invasion of Tsushima Island.`,
      releaseDate: "July 17, 2020",
      developer: "Sucker Punch Productions",
      platform: "PlayStation 4, PlayStation 5",
      genre: "Action-adventure",
      image: require('../assets/Gameicon/ghostoftsushima.jpg'),
    },
    "Grand Theft Auto V": {
      name: "Grand Theft Auto V",
      description: `Grand Theft Auto V is an action-adventure game developed by Rockstar North. Released in 2013, it follows three criminals as they plan and execute a series of heists in the fictional state of San Andreas.`,
      releaseDate: "September 17, 2013",
      developer: "Rockstar North",
      platform: "PlayStation 3, PlayStation 4, PlayStation 5, Xbox 360, Xbox One, Xbox Series X/S, Microsoft Windows",
      genre: "Action-adventure, Open world",
      image: require('../assets/Gameicon/gtav.jpg'),
    },
    "Infamous": {
      name: "Infamous",
      description: `Infamous is an action-adventure game developed by Sucker Punch Productions. Released in 2009, it features Cole MacGrath, a bike messenger who gains electrical powers after a catastrophic explosion.`,
      releaseDate: "May 26, 2009",
      developer: "Sucker Punch Productions",
      platform: "PlayStation 3",
      genre: "Action-adventure",
      image: require('../assets/Gameicon/infamous.jpg'),
    },
    "Naruto Ninja Storm": {
      name: "Naruto Ninja Storm",
      description: `Naruto: Ultimate Ninja Storm is a fighting game developed by CyberConnect2. Released in 2008, it features characters from the Naruto anime series in dynamic combat.`,
      releaseDate: "November 4, 2008",
      developer: "CyberConnect2",
      platform: "PlayStation 3, Xbox 360, Microsoft Windows",
      genre: "Fighting",
      image: require('../assets/Gameicon/narutoninjastorm.jpg'),
    },
    "NBA 2K24": {
      name: "NBA 2K24",
      description: `NBA 2K24 is a basketball simulation video game developed by Visual Concepts. Released in September 2023, it features updated rosters and gameplay mechanics.`,
      releaseDate: "September 8, 2023",
      developer: "Visual Concepts",
      platform: "PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, Microsoft Windows, Nintendo Switch",
      genre: "Sports",
      image: require('../assets/Gameicon/nba2k24.jpeg'),
    },
    "Prototype": {
      name: "Prototype",
      description: `Prototype is an open-world action-adventure game developed by Radical Entertainment. Released in 2009, players control Alex Mercer, who has shape-shifting abilities as he uncovers the truth about his past.`,
      releaseDate: "June 9, 2009",
      developer: "Radical Entertainment",
      platform: "PlayStation 3, Xbox 360, Microsoft Windows",
      genre: "Action-adventure",
      image: require('../assets/Gameicon/prototype.jpg'),
    },
    "Roblox": {
      name: "Roblox",
      description: `Roblox is a game creation platform that allows users to create and play games made by other users. Launched in 2006, it features a variety of user-generated games across genres.`,
      releaseDate: "September 1, 2006",
      developer: "Roblox Corporation",
      platform: "Multiple platforms including PC, Xbox One, iOS, Android",
      genre: "Platform, Game creation system",
      image: require('../assets/Gameicon/roblox.jpg'),
    },
    "Sleeping Dogs": {
      name: "Sleeping Dogs",
      description: `Sleeping Dogs is an open-world action-adventure game developed by United Front Games. Released in 2012, players assume the role of Wei Shen, an undercover cop infiltrating the Sun On Yee triad organization.`,
      releaseDate: "August 14, 2012",
      developer: "United Front Games",
      platform: "PlayStation 3, Xbox 360, Microsoft Windows",
      genre: "Action-adventure",
      image: require('../assets/Gameicon/sleepingdogs.jpg'),
    },
    "Spider-Man": {
      name: "Spider-Man",
      description: `Marvel's Spider-Man is an action-adventure game developed by Insomniac Games. Released in 2018, players control Spider-Man as he battles iconic villains in New York City.`,
      releaseDate: "September 7, 2018",
      developer: "Insomniac Games",
      platform: "PlayStation 4, PlayStation 5",
      genre: "Action-adventure",
      image: require('../assets/Gameicon/spiderman.jpg'),
    },
    "Stardew Valley": {
      name: "Stardew Valley",
      description: `Stardew Valley is a farming simulation role-playing game developed by ConcernedApe. Released in 2016, players take over a farm in a small town, engaging in farming, mining, and building relationships with townspeople.`,
      releaseDate: "February 26, 2016",
      developer: "ConcernedApe",
      platform: "Multiple platforms including PC, PlayStation 4, Xbox One, Nintendo Switch, iOS, Android",
      genre: "Simulation, Role-playing",
      image: require('../assets/Gameicon/stardewvalley.png'),
    },
    "Watch Dogs": {
      name: "Watch Dogs",
      description: `Watch Dogs is an open-world action-adventure game developed by Ubisoft Montreal. Released in 2014, players control Aiden Pearce, a vigilante hacker seeking revenge in a near-future Chicago.`,
      releaseDate: "May 27, 2014",
      developer: "Ubisoft Montreal",
      platform: "PlayStation 3, PlayStation 4, Xbox 360, Xbox One, Microsoft Windows",
      genre: "Action-adventure, Stealth",
      image: require('../assets/Gameicon/watchdogs.jpg'),
    },
    "Minecraft": {
      name: "Minecraft",
      description: `Minecraft is a sandbox game developed by Mojang Studios. Released in 2011, players explore a blocky, procedurally generated world, discovering and extracting raw materials, crafting tools and items, and building structures or earthworks.`,
      releaseDate: "November 18, 2011",
      developer: "Mojang Studios",
      platform: "PlayStation 3, PlayStation 4, Xbox 360, Xbox One, Microsoft Windows, Nintendo Switch, iOS, Android, macOS",
      genre: "Sandbox, Survival",
      image: require('../assets/Gameicon/minecraft.jpg'),
    },
    "Little Nightmares II": {
      name: "Little Nightmares II",
      description: `Little Nightmares II is a suspense-adventure game developed by Tarsier Studios and published by Bandai Namco Entertainment. Released in 2021, players control Mono, a young boy trapped in a distorted world, as he partners with Six to survive the horrors of the Pale City.`,
      releaseDate: "February 11, 2021",
      developer: "Tarsier Studios",
      platform: "PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, Microsoft Windows, Nintendo Switch",
      genre: "Puzzle-platformer, Horror",
      image: require('../assets/Gameicon/Littlenightmares2.jpg'),
    },
    "Counter Strike Global Offensive": {
      name: "Counter-Strike: Global Offensive",
      description: `Counter-Strike: Global Offensive (CS:GO) is a multiplayer first-person shooter developed by Valve and Hidden Path Entertainment. Released in 2012, it is the fourth game in the Counter-Strike series, where players join either the Terrorists or Counter-Terrorists to complete objectives like planting bombs or rescuing hostages.`,
      releaseDate: "August 21, 2012",
      developer: "Valve, Hidden Path Entertainment",
      platform: "Microsoft Windows, macOS, PlayStation 3, Xbox 360, Linux",
      genre: "First-person shooter",
      image: require('../assets/Gameicon/csgo.jpg'),
    },
    "League of Legends": {
      name: "League of Legends",
      description: `League of Legends is a multiplayer online battle arena (MOBA) game developed and published by Riot Games. Released in 2009, players assume the role of a "champion" with unique abilities and battle against other teams in strategic, team-based combat to destroy the enemy's Nexus.`,
      releaseDate: "October 27, 2009",
      developer: "Riot Games",
      platform: "Microsoft Windows, macOS",
      genre: "Multiplayer online battle arena (MOBA)",
      image: require('../assets/Gameicon/LOL.jpg'),
    },



    
  };
////////////////////////////////////////////////////////////////////////////////////

  const selectedGame = gameInfo[game] || {}; 

  return (
    <ScrollView style={styles.container}>
      {selectedGame.image && (
        <Image source={selectedGame.image} style={styles.gameImage} />
      )}
      {selectedGame.name && (
        <Text style={styles.title}>{selectedGame.name}</Text>
      )}
      {selectedGame.description && (
        <Text style={styles.text}>Description: {selectedGame.description}</Text>
      )}
      {selectedGame.releaseDate && (
        <Text style={styles.text}>Release Date: {selectedGame.releaseDate}</Text>
      )}
      {selectedGame.developer && (
        <Text style={styles.text}>Developer: {selectedGame.developer}</Text>
      )}
      {selectedGame.platform && (
        <Text style={styles.text}>Platform: {selectedGame.platform}</Text>
      )}
      {selectedGame.genre && (
        <Text style={styles.text}>Genre: {selectedGame.genre}</Text>
      )}
    </ScrollView>
  );
};




//////////////STYLES FOR GAME INFORMATION////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  gameImage: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 13,
    marginBottom: 8,
    lineHeight: 22,
  },
});

export default Gameinfo;
