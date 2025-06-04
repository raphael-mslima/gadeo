const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const emotionRoutes = require('./routes/emotionRoutes');
const journeyRoutes = require('./routes/journeyRoutes');
const reflectionRoutes = require('./routes/reflectionRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/emotions', emotionRoutes);
app.use('/api/journeys', journeyRoutes);
app.use('/api/reflections', reflectionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend API running on port ${PORT}`);
});
