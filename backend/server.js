const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./routes/todos');

const app = express();
const PORT = process.env.PORT || 5000;
//const MONGO_URI = 'mongodb+srv://polishetwarsravani:<polishetwarsravani>@cluster0.2vbcvsp.mongodb.net/';
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://polishetwarsravani:polishetwarsravani@cluster0.2vbcvsp.mongodb.net/';

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
