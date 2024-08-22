const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();

const corsOptions = {
    origin: ['http://localhost:3000','https://mstreamer.onrender.com'],
    optionsSuccessStatus: 200
}
const baseUrl = process.env.BASE_URL;

app.use(cors(corsOptions));
app.use('/songs', express.static(path.join(__dirname, 'songs')));

app.get('/songs', (req, res) => {
    res.json({
        'type': 'success',
        'data': [
            { 'id': '001', 'name': 'Jireh Provider', 'by': 'Limoblaze, Lecrae', 'album': 'Jireh(My Provider)', 'duration': '3:28', 'audio': baseUrl+'/songs/jireh_provider/audio.mp3', 'img': baseUrl+'/songs/jireh_provider/art.jpg' },
            { 'id': '002', 'name': 'LIKE YOU', 'by': 'Aaron Cole ft Tauren wells & TobyMac', 'album': 'TWO UP TWO DOWN', 'duration': '3:27', 'audio': baseUrl+'/songs/more_like_you/audio.mp3', 'img': baseUrl+'/songs/more_like_you/art.jpg' },

        ]
    });
});

app.listen(4000, () => {
    console.log('Server running on '+baseUrl)
})