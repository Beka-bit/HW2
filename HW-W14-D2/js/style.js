
let artists = [
    {name:"Micheal Jackson",songs:["Smooth Criminal","Billie Jean","Beat It","EarthSong"]},
    {name:"Billea Eilish",songs:["Bad Guy","Lovely","Lunch","Chihiro"]},
    {name:"Kairat Nurtas",songs:["Auyrmaidy Zhurek","Ol Sen Emes"]}
]
// 2
artists[2].songs[1]="Baika";
// 3
let JacksonArtist=artists[0];
let lastSong=JacksonArtist.songs[JacksonArtist.songs.length-1]
console.log(`Micheal JacksonTin songy ani: ${lastSong}`);


// 4
let EilishSongs=artists[1].songs.filter(songs=>songs.length<=6);
console.log(`Billea Eilishtin Kiska olendery: ${EilishSongs}`);


console.log(artists);