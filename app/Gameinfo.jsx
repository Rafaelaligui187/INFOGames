import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
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
      image: [
        "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/ax0V5TYMax06mLzmkWeQMiwH.jpg",
        "https://www.superjumpmagazine.com/content/images/2022/04/god-of-war-2018-featured-image.jpg",
        "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1593500/ss_3670ba72c7e3e9c3c3225547ef2c1053504e62b8.1920x1080.jpg?t=1729030762",
        "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1593500/ss_93a3ca63aa2cd8c675bbb6430324ee3f2d44b845.1920x1080.jpg?t=1729030762",
        "https://sm.ign.com/t/ign_za/lists/7/7-games-li/7-games-like-god-of-war-worth-playing-in-2023_mnt2.1200.jpg",
        "https://gamingbolt.com/wp-content/uploads/2022/10/god-of-war-ragnarok-image-4-1-1024x576.jpg",
      ],
    },
    "Assassin Creed Unity": {
      name: "Assassin Creed Unity",
      description: `Assassin's Creed Unity is an action-adventure game developed by Ubisoft. Released in 2014, it is set in Paris during the French Revolution and features Arno Dorian as he seeks to uncover the truth behind his father's murder.`,
      releaseDate: "October 28, 2014",
      developer: "Ubisoft",
      platform: "PlayStation 4, Xbox One, Microsoft Windows",
      genre: "Action-adventure",
      image: [
        "https://upload.wikimedia.org/wikipedia/en/4/41/Assassin%27s_Creed_Unity_cover.jpg",
        "https://cdn.mos.cms.futurecdn.net/870c0228eb21c522250f6dbd3580202b-1200-80.jpg",
        "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/12067713/assassins-creed-unity-luxembourg-riot_1920.0.0.jpg?quality=90&strip=all&crop=7.8125,0,84.375,100",
        "https://i.ytimg.com/vi/W5WGkbBcRUk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBnCx5Z3mVeUW5THA6EjC48gIs7jA",
        "https://i.ytimg.com/vi/4uVTNUNrZ3c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDblCk-hnziDvQYvM_KUf7SClRVsw",
        "https://i.ytimg.com/vi/uFt4_hhnh14/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAsP-XumtuFlnE59f0gW57Eq_xZfg",
      ]
    },
    "Crossfire": {
      name: "Crossfire",
      description: `Crossfire is a tactical first-person shooter developed by Smilegate Entertainment. Released in 2007, it features two factions battling against each other in various game modes.`,
      releaseDate: "May 3, 2007",
      developer: "Smilegate Entertainment",
      platform: "Microsoft Windows",
      genre: "First-person shooter",
      image: [
        "https://mmoculture.com/wp-content/uploads/2020/02/CrossFire-new-image.png",
        "https://i.ytimg.com/vi/nqLammSAMUI/maxresdefault.jpg",
        "https://i.ytimg.com/vi/ncQ6McXYDiA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBubvFGZMV2J3cv4FfMo5CXmCG5dw",
        "https://pinoygamer.ph/attachments/crossfire-sierra-squad-jpg.16139/",
        "https://i.ytimg.com/vi/yK8oiOmSyro/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgYyhUMA8=&rs=AOn4CLCDdux3mUnM3bWRQLs4gwSmyyojxQ",
        "https://mmoculture.com/wp-content/uploads/2019/12/CrossFire-Zero-image.png",
      ]
    },
    "DayZ": {
      name: "DayZ",
      description: `DayZ is a survival video game developed by Bohemia Interactive. Released in 2013, it places players in a post-apocalyptic world where they must survive against zombies and other players.`,
      releaseDate: "December 16, 2013",
      developer: "Bohemia Interactive",
      platform: "Microsoft Windows, Xbox One, PlayStation 4",
      genre: "Survival",
      image: [
        "https://dayz.com/img/dayz-og-thumb.png",
        "https://i.redd.it/y44jpmsix9s81.jpg",
        "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/13643821/dayz_lost.jpg?quality=90&strip=all&crop=0,10.732984293194,100,78.534031413613",
        "https://www.bohemia.net/assets/games/dayz/screenshots/4.jpg?5",
        "https://www.bohemia.net/assets/games/dayz/screenshots/5.jpg?5",
        "https://preview.redd.it/hello-everyone-any-tips-for-a-new-dayz-player-i-will-take-v0-87of4o71ja7c1.jpeg?auto=webp&s=c4a96e4db0894fb2a2bea1f5befe54434a96c6e5",
      ]
    },
    "Dota 2": {
      name: "Defend of the Ancient 2",
      description: `Defense of the Ancients (DotA) is a multiplayer online battle arena (MOBA) mod for Warcraft III. It has evolved into a standalone game, Dota 2, developed by Valve Corporation.`,
      releaseDate: "2003 (as a mod), Dota 2 released on July 9, 2013",
      developer: "Valve Corporation",
      platform: "Microsoft Windows, macOS, Linux",
      genre: "MOBA",
      image: [
        "https://business-portal-bucket.s3.amazonaws.com/media/images/41e172c318357d632f53b92d8cb38661_large_cover.original.jpg",
        "https://s1.dmcdn.net/v/A4mCI1ZfCOjo6weLh/x1080",
        "https://s2.dmcdn.net/v/95Bt_1Kz-K1ES-zQb/x1080",
        "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/570/ss_ad8eee787704745ccdecdfde3a5cd2733704898d.1920x1080.jpg?t=1731544174",
        "https://hybrid.co.id/wp-content/uploads/2021/07/5ca61657c0dceb7500942c7c07a3cf2d_dota-2-cover.jpg",
        "https://api.duniagames.co.id/api/content/upload/file/10510206081622192001.jpg",
      ]
    },
    "Formula 1 2024": {
      name: "Formula 1 2024",
      description: `Formula 1 2024 is a racing simulation video game developed by Codemasters and published by EA Sports. It features all teams, drivers, and circuits from the 2024 Formula 1 season.`,
      releaseDate: "Scheduled for release in 2024",
      developer: "Codemasters",
      platform: "Multiple platforms including PlayStation, Xbox, and PC",
      genre: "Racing",
      image: [
        "https://i.ytimg.com/vi/NnyCWsA6KSI/maxresdefault.jpg",
        "https://media.contentapi.ea.com/content/dam/ea/f1/f1-24/images/2024/04/f124hm-austria-redbull-sg01.jpg.adapt.crop16x9.575p.jpg",
        "https://i.ytimg.com/vi/YKbpm3LQppU/maxresdefault.jpg",
        "https://www.thedrive.com/wp-content/uploads/2024/05/31/2488620_20240528230757_1-copy.jpg?strip=all&quality=85",
        "https://img.redbull.com/images/c_crop,w_3840,h_1920,x_0,y_74/c_auto,w_1200,h_600/f_auto,q_auto/redbullcom/2024/6/29/mpfguy7udadhq3zy9krk/f1-24-f1-world-guide",
        "https://sm.ign.com/t/ign_za/gallery/f/f1-manager/f1-manager-2024-gameplay-screenshots_u4ej.600.jpg",
      ]
    },
    "Genshin Impact": {
      name: "Genshin Impact",
      description: `Genshin Impact is an action role-playing game developed and published by miHoYo. Released in 2020, it features an open world and action-based battle system, with a gacha system for character acquisition.`,
      releaseDate: "September 28, 2020",
      developer: "miHoYo",
      platform: "Multiple platforms including PlayStation, PC, iOS, and Android",
      genre: "Action role-playing",
      image: [
        "https://genshindb.org/wp-content/uploads/2022/10/Version-3.0-Key-Visual-Official-Art-1.jpg",
        "https://i.ytimg.com/vi/QsHWebfAwpY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBWyfcL2mdPoePPn4D6K1BvD3wVCw",
        "https://www.gamespot.com/a/uploads/screen_kubrick/1574/15746725/3822185-genshinimpact-gameplayfootageps5.mp4.00_02_16_55.still002.jpg",
        "https://play-lh.googleusercontent.com/71h7kH0CoSpZMM29eVXElOku5quNzevSYKlJvrCWgxOtMbHdkpWUeJmoBhCC62m-02o=w526-h296-rw",
        "https://games.lol/wp-content/uploads/2021/03/Genshin-Impact-Zhongli-Gameplay.jpg",
        "https://fastcdn.hoyoverse.com/content-v2/hk4e/125408/a978c294036de995e4559cc885f15b05_3768724755797522688.jpg",
      ]
    },
    "Ghost of Tsushima": {
      name: "Ghost of Tsushima",
      description: `Ghost of Tsushima is an action-adventure game developed by Sucker Punch Productions. Released in 2020, it follows samurai Jin Sakai as he fights against the Mongol invasion of Tsushima Island.`,
      releaseDate: "July 17, 2020",
      developer: "Sucker Punch Productions",
      platform: "PlayStation 4, PlayStation 5",
      genre: "Action-adventure",
      image: [
        "https://i.ytimg.com/vi/cD5FrDNx9QU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCuBxpSFHQMM6-3ARnVsNy8bG1wUg",
        "https://i.ytimg.com/vi/nVhXp6FX7Y4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBWeF7fZ_GEJM3ZGOOdaYotQW6Ccw",
        "https://d.newsweek.com/en/full/1315001/ps5-games-list-ghosts-tsushima-playstation-5.jpg?w=1200&f=388ea33bae2d6068b74591d5ec65601f",
        "https://lh3.googleusercontent.com/TtINFCHcIXBZfXMrOhAh5R7Jh5-_lL5Ff2pKF2tEjdi_Xu2XItfG0FECoYQ8pKwywe59ngJ7j6_1UCC_pbhOiAvm0lRIQiSDhgG1rFvk-Tse0iy6OMqtzGZ2lfH7SlV7k1tW52mC",
        "https://www.hollywoodreporter.com/wp-content/uploads/2020/05/ghost_of_tsushima_-_publicity_-__h_2020_.jpg",
        "https://press-start.com.au/wp-content/uploads/2020/05/ghost-of-Tsushima.jpg",
      ]
    },
    "Grand Theft Auto V": {
      name: "Grand Theft Auto V",
      description: `Grand Theft Auto V is an action-adventure game developed by Rockstar North. Released in 2013, it follows three criminals as they plan and execute a series of heists in the fictional state of San Andreas.`,
      releaseDate: "September 17, 2013",
      developer: "Rockstar North",
      platform: "PlayStation 3, PlayStation 4, PlayStation 5, Xbox 360, Xbox One, Xbox Series X/S, Microsoft Windows",
      genre: "Action-adventure, Open world",
      image: [
        "https://assets.newatlas.com/dims4/default/de91311/2147483647/strip/true/crop/2560x1344+0+48/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fgta-5-review.jpg&na.image_optimisation=0",
        "https://sm.ign.com/t/ign_ap/articlepage/g/grand-theft-auto-5-a-new-perspective/grand-theft-auto-5-a-new-perspective_yfcy.1280.jpg",
        "https://i.ytimg.com/vi/d74REG039Dk/maxresdefault.jpg",
        "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/08/gta5.jpg",
        "https://www.thepixelempire.net/uploads/1/2/1/1/12119064/grand-theft-auto-v-playstation-3-20_orig.png",
        "https://i.ytimg.com/vi/FJVEtCUN99I/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBwmSl6GZlhsJ7uVvljxX9l1oSPsg",
      ]
    },
    "Infamous": {
      name: "Infamous",
      description: `Infamous is an action-adventure game developed by Sucker Punch Productions. Released in 2009, it features Cole MacGrath, a bike messenger who gains electrical powers after a catastrophic explosion.`,
      releaseDate: "May 26, 2009",
      developer: "Sucker Punch Productions",
      platform: "PlayStation 3",
      genre: "Action-adventure",
      image: [
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c5d8b06-67c9-4c39-bb17-7a1a140ac3cb/d2bi072-16b6c425-1b5a-4a7b-9564-278cc5349e3f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVjNWQ4YjA2LTY3YzktNGMzOS1iYjE3LTdhMWExNDBhYzNjYlwvZDJiaTA3Mi0xNmI2YzQyNS0xYjVhLTRhN2ItOTU2NC0yNzhjYzUzNDllM2YuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7HJqeNb3WOCRkCPqlxHA0Le143RUenUTyjy0WAPBsWo",
        "https://www.vice.com/wp-content/uploads/sites/2/2017/07/1499801014633-Infamous1.jpeg",
        "https://images.pushsquare.com/screenshots/37679/large.jpg",
        "https://www.thepixelempire.net/uploads/1/2/1/1/12119064/infamous-playstation-3-1_orig.png",
        "https://www.phillyburbs.com/gcdn/authoring/2011/06/16/NBCC/ghows-PA-4fe80b97-b8e2-4ba9-8a6c-1955a6cd5824-898a225c.jpeg?width=660&height=372&fit=crop&format=pjpg&auto=webp",
        "https://gametrog.com/wp-content/uploads/2023/03/Infamous-06.jpg",
      ]
    },
    "Naruto Ninja Storm": {
      name: "Naruto Ninja Storm",
      description: `Naruto: Ultimate Ninja Storm is a fighting game developed by CyberConnect2. Released in 2008, it features characters from the Naruto anime series in dynamic combat.`,
      releaseDate: "November 4, 2008",
      developer: "CyberConnect2",
      platform: "Android, PlayStation 3, Xbox 360, Microsoft Windows",
      genre: "Fighting",
      image: [
        "https://image.api.playstation.com/cdn/UP0700/CUSA07136_00/zcAXlt30d5rRQOESkTPGN3zIAzFMOsOi.png",
        "https://ristechy.com/wp-content/uploads/2024/09/Naruto-Ultimate-Ninja-Storm-Apk-Mod.jpg",
        "https://i.ytimg.com/vi/s_ZUl2C4_6A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLARGM8SxT5CxReOm3BYHEMtBQsx4A",
        "https://www.22esport.gg/wp-content/uploads/2024/09/naruto-ultimate-ninja-storm-gameplay.webp",
        "https://static-sg.winudf.com/wupload/xy/aprojectadmin/I8Knr2hY.jpg",
        "https://images.mobi.gg/uploads/2024/09/naruto-ultimate-ninja-storm-exploration.webp",
      ]
    },
    "NBA 2K24": {
      name: "NBA 2K24",
      description: `NBA 2K24 is a basketball simulation video game developed by Visual Concepts. Released in September 2023, it features updated rosters and gameplay mechanics.`,
      releaseDate: "September 8, 2023",
      developer: "Visual Concepts",
      platform: "PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, Microsoft Windows, Nintendo Switch",
      genre: "Sports",
      image: [
        "https://images7.alphacoders.com/133/1330243.jpeg",
        "https://www.operationsports.com/wp-content/uploads/2023/08/NBA-2K24-MAMBA-MOMENTS-Drive-v-Spurs-.jpg?fit=1920%2C1080",
        "https://i.ytimg.com/vi/etxNrvnuD4E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDk3yULyTtbVYiAx11t4h7wo4CInw",
        "https://cdn.prgloo.com/media/2ada4e8de535426e842f069139fd1778.jpg?width=968&height=1452",
        "https://i.ytimg.com/vi/fr25vQYAGKk/maxresdefault.jpg",
        "https://i.ytimg.com/vi/BgE6l3aknXc/maxresdefault.jpg",
      ]
    },
    "Prototype": {
      name: "Prototype",
      description: `Prototype is an open-world action-adventure game developed by Radical Entertainment. Released in 2009, players control Alex Mercer, who has shape-shifting abilities as he uncovers the truth about his past.`,
      releaseDate: "June 9, 2009",
      developer: "Radical Entertainment",
      platform: "PlayStation 3, Xbox 360, Microsoft Windows",
      genre: "Action-adventure",
      image: [
        "https://images2.alphacoders.com/167/167390.jpg",
        "https://torrent5.net/uploads/posts/2018-01/1517230179_cb4e3f7a69bd.jpg",
        "https://images.gamebanana.com/img/ss/mods/606de20297c18.jpg",
        "https://assets2.ignimgs.com/2007/10/03/prototype-20071003012557788-2149361.jpg",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/10150/0000008854.1920x1080.jpg?t=1655760765",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/10150/0000008861.1920x1080.jpg?t=1655760765",
      ]
    },
    "Roblox": {
      name: "Roblox",
      description: `Roblox is a game creation platform that allows users to create and play games made by other users. Launched in 2006, it features a variety of user-generated games across genres.`,
      releaseDate: "September 1, 2006",
      developer: "Roblox Corporation",
      platform: "Multiple platforms including PC, Xbox One, iOS, Android",
      genre: "Platform, Game creation system",
      image: [
        "https://iisummer.com/wp-content/uploads/2022/01/Roblox.jpg",
        "https://i.redd.it/whq6gol2gitb1.jpg",
        "https://www.lifewire.com/thmb/0PqOvacwu1j_GNLl5mDEFojcO4k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Roblox_MeepCity-5978fbc0054ad90010302587.jpg",
        "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/5X/c/e/8/4/ce84283c7925a60772cd76619b8c9abae1fd0397.jpeg",
        "https://kevinsguides.com/wp-content/uploads/2024/07/roblox-worldzero.webp",
        "https://i.ytimg.com/vi/cvcNy_7UqA8/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGDIgZShjMA8=&rs=AOn4CLCdGHb6qNYD17JrSzltl_n9fqGLGg",
      ]
    },
    "Sleeping Dogs": {
      name: "Sleeping Dogs",
      description: `Sleeping Dogs is an open-world action-adventure game developed by United Front Games. Released in 2012, players assume the role of Wei Shen, an undercover cop infiltrating the Sun On Yee triad organization.`,
      releaseDate: "August 14, 2012",
      developer: "United Front Games",
      platform: "PlayStation 3, Xbox 360, Microsoft Windows",
      genre: "Action-adventure",
      image: [
        "https://gaming-cdn.com/images/products/545/616x353/sleeping-dogs-definitive-edition-definitive-edition-pc-mac-game-steam-cover.jpg?v=1704193741",
        "https://i.ytimg.com/vi/N0axELt9K5c/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgSygzMA8=&rs=AOn4CLBg2kJzjLiIkue9wcUoV_2X8bicxw",
        "https://static.actugaming.net/media/2023/01/sleeping-dogs-hk.jpg",
        "https://i.redd.it/z3m5jrltf95b1.jpg",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/307690/ss_179f4e531f1c03656196eab16ac671cbd8a69428.1920x1080.jpg?t=1602800785",
        "https://i.ytimg.com/vi/xNs2UY1Vhao/maxresdefault.jpg",
      ]
    },
    "Spider-Man": {
      name: "Spider-Man (2018)",
      description: `Marvel's Spider-Man is an action-adventure game developed by Insomniac Games. Released in 2018, players control Spider-Man as he battles iconic villains in New York City.`,
      releaseDate: "September 7, 2018",
      developer: "Insomniac Games",
      platform: "PlayStation 4, PlayStation 5",
      genre: "Action-adventure",
      image: [
        "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/5ayReKkz8RaBVuTvrxgA3rvh.png",
        "https://blogs-images.forbes.com/games/files/2018/09/Marvels-Spider-Man_20180829140236.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsCRk6iOkd5u1zhwBmEUOO7nfEXa8RMwf85Q&s",
        "https://d.newsweek.com/en/full/1070660/marvels-spider-man-screen.jpg",
        "https://i.ytimg.com/vi/3DctMnF0rpw/maxresdefault.jpg",
        "https://m.media-amazon.com/images/M/MV5BNTM3YjQ0MzEtODhiYi00MWUxLTk0NWItYmM5N2QyNTUzMzM4XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_QL75_UY281_CR0,0,500,281_.jpg",
      ]
    },
    "Stardew Valley": {
      name: "Stardew Valley",
      description: `Stardew Valley is a farming simulation role-playing game developed by ConcernedApe. Released in 2016, players take over a farm in a small town, engaging in farming, mining, and building relationships with townspeople.`,
      releaseDate: "February 26, 2016",
      developer: "ConcernedApe",
      platform: "Multiple platforms including PC, PlayStation 4, Xbox One, Nintendo Switch, iOS, Android",
      genre: "Simulation, Role-playing",
      image: [
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/capsule_616x353.jpg?t=1711128146",
        "https://static01.nyt.com/images/2021/05/02/arts/02STARDEW-VALLEY2a/merlin_186493323_e982a54d-fa19-4c50-ab7e-8966b6a57724-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24794732/ss_64d942a86eb527ac817f30cc04406796860a6fc1.jpg?quality=90&strip=all&crop=0,3.4613147178592,100,93.077370564282",
        "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/08/stardew-valley-gold-clock-perfection-farm.jpg",
        "https://cdn.mos.cms.futurecdn.net/26ZoJEFSxdXr5NMRrm8hs5.png",
        "https://www.stardewvalley.net/wp-content/uploads/2018/12/StardewValley_12-1.png",
      ]
    },
    "Watch Dogs": {
      name: "Watch Dogs",
      description: `Watch Dogs is an open-world action-adventure game developed by Ubisoft Montreal. Released in 2014, players control Aiden Pearce, a vigilante hacker seeking revenge in a near-future Chicago.`,
      releaseDate: "May 27, 2014",
      developer: "Ubisoft Montreal",
      platform: "PlayStation 3, PlayStation 4, Xbox 360, Xbox One, Microsoft Windows",
      genre: "Action-adventure, Stealth",
      image: [
        "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fwatch-dogs%2Fhome%2FWDOG_STD_Store_Landscape_2580x1450-2580x1450-faf11f76438b5ec516195323bc6c5402d1812d7c.jpg",
        "https://media.wired.com/photos/5f9892a42cc0d6153d3f9634/master/pass/games_culture_legion_1.jpg",
        "https://i.ytimg.com/vi/FcMRkyoHKeA/maxresdefault.jpg",
        "https://www.dsogaming.com/wp-content/uploads/2014/03/WatchDogs-anamorphic-les-flares-on_E3-2012.jpg",
        "https://i.ytimg.com/vi/_NpVZ4lOjJ8/maxresdefault.jpg",
        "https://i.ytimg.com/vi/1WaVhMXicMs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA-bF-C0R6uwvWM1mvd7fKSLbquXQ",
      ]
    },
    "Minecraft": {
      name: "Minecraft",
      description: `Minecraft is a sandbox video game developed by Mojang Studios. Released in its full version in 2011, players can build and explore virtual worlds made up of blocks, engaging in activities like crafting, mining, and combat.`,
      releaseDate: "November 18, 2011",
      developer: "Mojang Studios",
      platform: "PC, Mac, Linux, PlayStation 4, Xbox One, Nintendo Switch, mobile devices, and more",
      genre: "Sandbox, Survival",
      image: [
        "https://target.scene7.com/is/image/Target/GUEST_b98e9dc0-6f29-41e3-ae20-13182d3007f0?wid=668&qlt=80&fmt=png",
        "https://terracoders.com/sites/default/files/inline-images/MC.png",
        "https://i.redd.it/x3ekiihttpj51.png",
        "https://media.forgecdn.net/attachments/31/417/thzzdin.png",
        "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a6/EnderUpdate.jpg/revision/latest?cb=20161113035117",
        "https://vste.org/wp-content/uploads/2017/05/VSTE-Explore.png",
      ]
},

    
  };
////////////////////////////////////////////////////////////////////////////////////

const selectedGame = gameInfo[game] || {};

return (
  <ScrollView style={styles.container}>
    {selectedGame.image && (
      <FlatList
        data={selectedGame.image}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.gameImage} />
        )}
      />
    )}
    {selectedGame.name && (
      <Text style={styles.title}>{selectedGame.name}</Text>
    )}
    {selectedGame.description && (
      //////Game Description
      <Text style={styles.text}> {selectedGame.description}</Text>
    )}
    <Text style={styles.disLine}></Text>
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
    <Text style={styles.disLine}></Text>
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
disLine: {
  backgroundColor: "black",
  height: 1,
  width: '100%',
  marginBottom: 20,
  marginTop: 20,
},
gameImage: {
  width: 325, 
  height: 200,
  resizeMode: 'cover',
  marginRight: 10,
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 10,
  textAlign: 'center',
},
text: {
  fontSize: 15,
  marginBottom: 0,
  textAlign: "left",
},
});

export default Gameinfo;
