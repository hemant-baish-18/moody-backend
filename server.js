const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const songs = {
  happy: [
    { title: "Happy Mood", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { title: "Positive Energy", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" }
  ],
  sad: [
    { title: "Sad Piano", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
  ],
  neutral: [
    { title: "Chill Beat", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" }
  ],
  surprised: [
    { title: "Excited", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" }
  ]
};

app.get("/songs", (req, res) => {
  const mood = req.query.mood || "neutral";
  res.json(songs[mood]);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});