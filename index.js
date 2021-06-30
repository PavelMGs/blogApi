const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const sequelize = require('./utils/database');
const blogRoutes = require('./routes/blog');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded());

app.use('/api/blog', blogRoutes);
app.use(cors());



async function start() {
    try {
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Server started at ${PORT} port`)
        })
    } catch (err) {
        console.log(err);
    }
}

start();

app.get('/', (req, res) => {
    res.send('Hello World')
});