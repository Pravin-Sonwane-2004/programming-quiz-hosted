const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/quizPerformance', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB:', error));

// Define a schema for storing performance data
const performanceSchema = new mongoose.Schema({
  username: String,
  score: Number,
  totalQuestions: Number,
  percentage: Number,
  date: { type: Date, default: Date.now }
});

// Create a model for performance data
const Performance = mongoose.model('Performance', performanceSchema);

// API to save performance data
app.post('/submit-performance', async (req, res) => {
  const { username, score, totalQuestions, percentage } = req.body;

  try {
    const performance = new Performance({
      username,
      score,
      totalQuestions,
      percentage
    });

    await performance.save();
    res.status(200).json({ message: 'Performance saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving performance data', error });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
