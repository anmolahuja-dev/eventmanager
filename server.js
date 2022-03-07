const express = require('express');
const connectDB = require('./config/db');
const app = express();
const path = require('path')
// connect Db
connectDB();

// Initialize middleware
app.use(express.json({extended:false}));

// app.get('/', (req, res) => res.send('API Running..'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/event', require('./routes/api/events'));

// Serve Static asset in production
// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('assignment-internshala/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'assignment-internshala', 'build', 'index.html'));
    });
  }

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));