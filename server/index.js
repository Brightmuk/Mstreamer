const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin:'http://localhost:3000',
    optionsSuccessStatus:200
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.json({
        'type': 'success',
        'data': [
            { 'name': 'Calculus III', 'credits': 20 },
            { 'name': 'Embedded Systems', 'credits': 15 },
            { 'name': 'Web Development', 'credits': 19 },
            { 'name': 'Mobile Development', 'credits': 11 },
            { 'name': 'Database Design', 'creditss': 10 },
            { 'name': 'Data Structures & Algorithims', 'credits': 13 },
            // { 'name': 'Computer Graphics', 'credits': 17 },
            // { 'name': 'Advanced Programming', 'credits': 10 }
        ]
    });
});

app.listen(4000, () => {
    console.log('Server running on http://localhost:4000')
})