const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use('/songs', express.static(path.join(__dirname, 'songs')));

app.get('/songs', (req, res) => {
    res.json({
        'type': 'success',
        'data': [
            { 'id': '001', 'name': 'Jireh Provider', 'by': 'Limoblaze, Lecrae', 'album': 'Jireh(My Provider)', 'duration': '3:28', 'audio': 'http://localhost:4000/songs/jireh_provider/audio.mp3', 'img': 'http://localhost:4000/songs/jireh_provider/art.jpg' },
            { 'id': '002', 'name': 'LIKE YOU', 'by': 'Aaron Cole ft Tauren wells & TobyMac', 'album': 'TWO UP TWO DOWN', 'duration': '3:27', 'audio': 'http://localhost:4000/songs/more_like_you/audio.mp3', 'img': 'http://localhost:4000/songs/more_like_you/art.jpg' },

        ]
    });
});

app.listen(4000, () => {
    console.log('Server running on http://localhost:4000')
})