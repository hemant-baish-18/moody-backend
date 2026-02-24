const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({
  origin: "*"
}));

const songs = {
  happy: [
    { title: "Upbeat Morning (English vibe)", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { title: "Feel Good Pop (English)", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
    { title: "Bollywood Dance Style Instrumental", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" }
  ],
  sad: [
    { title: "Sad Piano (Hindi emotional vibe)", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { title: "Lonely Night", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" }
  ],
  neutral: [
    { title: "Chill Lofi Beat", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    { title: "Background Study Music", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" }
  ],
  surprised: [
    { title: "Excited Electronic", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
    { title: "Adventure Theme", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" }
  ]
};

app.get("/", (req, res) => {
  res.send("Moody Backend API is running 🚀");
});

app.get("/songs", (req, res) => {
  const mood = req.query.mood || "neutral";
  res.json(songs[mood]);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});