const express = require('express');
const sequelize = require('./database');
const bookRouter = require('./routes/bookRoutes');

const cors = require('cors');

const app = express();
const PORT = 3000;


// Midlleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use(bookRouter);

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`)
        });
    })
    .catch(error => {
        console.error('Unable to connect to the database:', error);
    })