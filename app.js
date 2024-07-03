const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config/database');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/users', userRoutes);


sequelize.sync({ alter: true }).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log('Database connected.');
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
